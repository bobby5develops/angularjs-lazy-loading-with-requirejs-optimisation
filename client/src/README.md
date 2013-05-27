The `client/src` Directory
===============

The `client/src` directory contains all the client side code used in the application. Everything in this folder will be compiled with grunt into
the 'client/dist' directory when the `grunt dev` or 'grunt' command is invoked. The client side code files are divided into the following folders:

* `app`: All client side code for the actual application
* `components`: AngularJS modules that are not specific to the application (i.e., they can be used in any application)
* `vendor`: Third party libraries that are not angularjs modules. This includes AngularJS

This folder also contains the `index.html` file which is the main HTML document of the single-page application.