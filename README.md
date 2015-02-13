# Spotifind

[Urban Sandén](http://urre.me) on Kollegorna PDD 12 feb 2015

## What

A simple site were you can search for music from Spotify. Display info about artist, album, track and track time. Display in a visual way with images and (maybe) show graphs displaying metadata such as year/track time.

## Goals

### Primary:
+ Learn more EmberJS.
+ Learn about how to make simple but powerful Ember sites using ember-cli

### Secondary:
+ Host the site on Github Pages using the [Ember CLI for Github Pages](https://github.com/poetic/ember-cli-github-pages)
+ Show info from Wikipedia
+ Fetch images from Google Image Search API

### Future plans
+ Store favorites in local storage using Ember
+ Share unique links to every track/album/artist (AND/OR)

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

+ Run: `ember server`
+ Fire up a browser and visit [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Information coming...

## Links
+ [Your First Ember App](http://www.toptal.com/javascript/a-step-by-step-guide-to-building-your-first-ember-js-app)
+ [Wiki-search](https://github.com/rbezemer/wiki-search/)
+ [Use Local Storage Adapter with Ember CLI](http://stackoverflow.com/questions/24327090/how-to-import-module-ember-localstorage-adapter-with-ember-cli)
+ [Ember.js](http://emberjs.com/)
+ [Ember-cli](http://www.ember-cli.com/)
+ [Ember Addons](http://www.emberaddons.com/)

## Todo

- [ ]: Limit results
- [ ]: Show artist images from Google Image Search
- [ ]: Icons
- [ ]: Clear results list
- [ ]: Buy domain
- [ ]: Don't show previous searches if there isn't any (local storage cleared)
- [ ]: Find out how to set environment.js baseURL differnt for production/development
- [ ]: Link to Wikipedia, Discogs, All Music...
- [ ]: Look into [Ember Charts](http://addepar.github.io/#/ember-charts/)
- [x]: Output info in the browser, make templates
- [x]: Allow Google Web fonts domain (environment.js -> contentSecurityPolicy)
- [x]: Setup basic routes and controllers
- [x]: Store searches in local storage
