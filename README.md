# Spotifind

## [Demo](http://labs.urre.me/spotifind/)

[Urban Sandén](http://urre.me) on [Kollegorna](http://kollegorna.se) PDD 12 feb 2015.

## What?

A simple Ember app where you can search for music from Spotify. Display info about artist, album, track and track time. Display in a visual way with images and (maybe) show graphs displaying metadata such as year/track time.

## Tools
+ EmberJS
+ Ember cli
+ Github Pages
+ Google Image Search API
+ Spotify Metadata API
+ Wikipedia API (maybe)
+ BASSCSS

## You'll need

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)

## Installation

+ Clone repo
+ `npm install` && `bower install`

## Running / Development

+ `ember s`
+ Fire up a browser and visit [http://localhost:4200](http://localhost:4200).

### Deploying

Information coming...

## Links
+ [Use Local Storage Adapter with Ember CLI](http://stackoverflow.com/questions/24327090/how-to-import-module-ember-localstorage-adapter-with-ember-cli)
+ [Ember.js](http://emberjs.com/)
+ [Ember-cli](http://www.ember-cli.com/)
+ [Ember Addons](http://www.emberaddons.com/)

## Todo

- [ ] Deploy on AWS
- [ ] Limit results
- [ ] Show artist images from Google Image Search
- [ ] Icons
- [ ] Clear results list
- [ ] Buy domain
- [ ] Don't show previous searches if there isn't any (local storage cleared)
- [ ] Sset environment.js baseURL differnt for production/development
- [ ] Link to Wikipedia, Discogs, All Music...
- [ ] Look into [Ember Charts](http://addepar.github.io/#/ember-charts/)
- [x] Output info in the browser, make templates
- [x] Allow Google Web fonts domain (environment.js -> contentSecurityPolicy)
- [x] Setup basic routes and controllers
- [x] Store searches in local storage
