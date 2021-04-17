package controller

import (
	"html/template"
	"net/http"

	"github.com/EZFRICA/website-cloud-next-onair-abidjan/viewmodel"
)

type home struct {
	homeTemplate *template.Template
}

func (h home) registerRoutes() {
	http.HandleFunc("/", h.handleHome)
	http.HandleFunc("/home", h.handleHome)
}

func (h home) handleHome(w http.ResponseWriter, r *http.Request) {
	if pusher, ok := w.(http.Pusher); ok {
		pusher.Push("static/css/main.min.css", &http.PushOptions{
			Header: http.Header{"Content-Type": []string{"text/css"}},
		})
	}

	vm := viewmodel.NewHome()
	w.Header().Add("Content-Type", "text/html; charset=utf-8; X-Content-Type-Options=nosniff")
	w.Header().Add("Cache-Control", "max-age:2592000, static, must-revalidate, proxy-revalidate")
	h.homeTemplate.Execute(w, vm)
}
