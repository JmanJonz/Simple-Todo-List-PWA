# Overview

I am interested in building apps professionally, and as I have looked into what I think is most interesting, and practicle in the App space PWA's (progressive web apps) have really caught my eye and I think they will become really popular as such this is part of my journey of learning how to create progressive web apps. 

As for this project I actually have two repositories this one and this one : Caching-Website-With-Service-Worker-So-It-s-Available-Offline
This repository is a simple todo list app using react and the other a a vanilla js simple app with two pages that is cached using a service worker and available after first visit even when offline. I didn't make it as far as I wanted yet on this project as the idea was to complete a full progressive web app todo list, however with my progress so far I still fulfilled the requirements of the module. To start the todo app run npm run dev and click on the link provided. For the accessible offline website use live server to open in your your browser.

Gain experience building a progressive web app.

[Software Demo Video](https://youtu.be/Sz6QYik2pv4)

# Web Pages

- React Todo App: This is a very simple todo list app that uses react. In the App component state is set for Todos using useState(). Everytime the user types in the input box and clicks enters a key press event is triggered and if the key was enter then it adds a todo item to the todo state which makes the component rerender. The todos are maped through on every rerender and listen out on the screen using jsx. 

- Offline Website: The whole website with two pages are loaded in and the service worker file is registerd which saves the website to cache and itercepts fetch requests made from that browser to that url if there is no iternet connection it serves the cached website instead. 

# Development Environment

I used vs code to build this project.

Both web apps I used javascript however for the todolist app I used vite to setup a react project and I used reacts jsx language to build out components. 

# Useful Websites

{Make a list of websites that you found helpful in this project}
* [YouTube](http://youtube.com)
* [Gemini](https://gemini.google.com/)

# Future Work

* In the future I need to get better at knowing when and how to share state accross components in a react application. 
* I plan on learning more about the importance of a manifest.json file in a PWA. 
* I also plan on finishing combining the two projects until I have completed my first downloadable progressive web app. 