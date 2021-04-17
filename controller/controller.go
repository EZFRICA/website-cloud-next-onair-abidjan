package controller

import (
	"html/template"
	"net/http"
)

var (
	homeController home
)

func Debut(templates map[string]*template.Template) {
	homeController.homeTemplate = templates["home.html"]
	homeController.registerRoutes()

	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	http.Handle("/manifest.webmanifest", http.FileServer(http.Dir("./")))
	http.Handle("/firebase-messaging-sw.js", http.FileServer(http.Dir("./")))
	http.Handle("/robots.txt", http.FileServer(http.Dir("./")))
}
