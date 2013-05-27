The `client/src/app` Directory
===============

The `client/src/app` directory contains the actual client side application code. The main `index.html` will link to the `app.bootstrap.js`
file, which will in turn load everything else before bootstrapping the application. The folders in this directory are as follows:

* `dependencies`: This folder contains what I call dependency definitions. I.e., AMD modules whose sole purpose is for loading other dependencies.
I have used them to seperate dependencies into logical groups. The aim is that these files will be automaticaly generated, though the auto generation
has not been implemented yet.
* `states`: This app uses [ui-router](https://github.com/angular-ui/ui-router) which maps states to urls and so the various states / routes
of the application map to folders within the `states` folder.
* `styles`: This will contain either less or sass files. Note that only less or sass file that are suffixed with '.styles' will be compiled. So `app.styles.less`
will be compiled but not `common.less`. Instead, `app.styles.less` will `@import common.less`.
* `system`: This folder contains the core logic of the application. The various state controllers will use the services found in this folder.