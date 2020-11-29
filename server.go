package main

import (
	"html/template"
	"net/http"
)

type entete struct {
	Title string
}

var templates = template.Must(template.ParseFiles("index.html"))

/*var staticAssetsDir = os.Getenv("static/")

// neuteredFileSystem is used to prevent directory listing of static assets
type neuteredFileSystem struct {
	fs http.FileSystem
}

func (nfs neuteredFileSystem) Open(path string) (http.File, error) {
	// Check if path exists
	f, err := nfs.fs.Open(path)
	if err != nil {
		return nil, err
	}

	// If path exists, check if is a file or a directory.
	// If is a directory, stop here with an error saying that file
	// does not exist. So user will get a 404 error code for a file/directory
	// that does not exist, and for directories that exist.
	s, err := f.Stat()
	if err != nil {
		return nil, err
	}
	if s.IsDir() {
		return nil, os.ErrNotExist
	}

	// If file exists and the path is not a directory, let's return the file
	return f, nil
}*/

func homeHandler(w http.ResponseWriter, r *http.Request) {
	p := entete{Title: "[ Cloud Next OnAir Abidjan ] - GDG Cloud Abidjan"}
	err := templates.ExecuteTemplate(w, "index.html", p)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func main() {

	http.HandleFunc("/", homeHandler)

	/*mux := http.NewServeMux()
	fs := http.FileServer(neuteredFileSystem{http.Dir(staticAssetsDir)})
	mux.Handle("/", fs)*/
	fs := http.FileServer(http.Dir("static/"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.ListenAndServe(":8280", nil)

}
