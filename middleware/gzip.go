package middleware

import (
	"compress/gzip"
	"io"
	"net/http"
	"strings"
)

type GzipMiddleware struct {
	Next http.Handler
}

func (gm *GzipMiddleware) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if gm.Next == nil {
		gm.Next = http.DefaultServeMux
	}

	w.Header().Set("Cache-Control", "max-age=2592000, public, must-revalidate, proxy-revalidate")
	w.Header().Set("Expires", "Thu, 23 Dec 2021 20:00:00 GMT")
	encodings := r.Header.Get("Accept-Encoding")
	if !strings.Contains(encodings, "gzip") {
		gm.Next.ServeHTTP(w, r)
		return
	}
	w.Header().Add("Content-Encoding", "gzip")
	gzipWriter := gzip.NewWriter(w)
	defer gzipWriter.Close()
	grw := gzipResponseWriter{
		ResponseWriter: w,
		Writer:         gzipWriter,
	}
	gm.Next.ServeHTTP(grw, r)
}

type gzipResponseWriter struct {
	http.ResponseWriter
	io.Writer
}

func (grw gzipResponseWriter) Write(data []byte) (int, error) {
	return grw.Writer.Write(data)
}
