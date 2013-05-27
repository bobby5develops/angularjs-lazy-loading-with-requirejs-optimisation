angularjs-lazy-loading-with-requirejs-optimisation
===============

A demonstration of lazy loading in AngularJS using [RequireJS](http://requirejs.org/) with [r.js optimisation](http://requirejs.org/docs/optimization.html).

## How to run the demo

* Install node.js
* Run `npm install` from within the root project directory to install relevant dependencies
* Run `grunt dev` from within the root project directory to build the app into the `app/dist` folder. This is the folder that is served by the web server.
* Run `node server.js` from within the root project directory to start the app
* Navigate to `http://localhost:3000/` in your browser

## About r.js optimisation
r.js optimisation is done via grunt using the [grunt-contrib-requirejs](https://npmjs.org/package/grunt-contrib-requirejs) plugin. In this setup,
all script files will be combined / optimized into two script files that are named as follows:

* `app.bootstrap.js`: This will contain all vendor dependencies as well as any other code that is not specific to a given route.
* `xxx.dependencies.js`: This will contain the dependencies for a given route, where 'xxx' is the name of the route.

When the app is initially accessed at a particular route, it is these two script files that will be delivered to the
browser. As the user then navigates to other routes, the lazy dependencies for the subsequent routes will either be delivered
in individual downloads or as a single combined 'xxx.dependencies.js' file, depending on the 'optimize' flag found in
`xxx.state.config.js` of each route, where 'xxx' is the route / state. Allowing lazy dependencies to be delivered individually for
subsequent (i.e., not the initial) route access ensures that dependencies that are shared amongst routes are not delivered
to the browser multiple times. This ensures that bandwidth is not wasted. If no lazy dependencies are being
shared between routes, or if loading a single optimized file will provide a significant improvement in speed regardless
of some wasted bandwidth, then the 'opimize' flag of the route config can be set to 'true' to ensure that only a single
file containing the combined dependencies is delivered to the browser when the user navigates to the route in question.