angularjs-lazy-loading-with-requirejs-optimisation
===============

A demonstration of lazy loading in AngularJS using [RequireJS](http://requirejs.org/) with [r.js optimisation](http://requirejs.org/docs/optimization.html).

## About r.js optimisation
r.js optimisation is done via grunt using the [grunt-contrib-requirejs](https://npmjs.org/package/grunt-contrib-requirejs) plugin

## How to run the demo

* Install node.js
* Run `npm install` from within the root project directory to install relevant dependencies
* Run `grunt dev` from within the root project directory to build the app into the `app/dist` folder. This is the folder that is served by the web server.
* Run `node server.js` from within the root project directory to start the app