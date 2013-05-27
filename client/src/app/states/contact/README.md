The `client/src/app/states/home` Directory
===============

This directory is just an example of a directory that maps to the a state / route in the application. In this case, it maps to the 'contact' (/contact) route of the application.
All folders such as this, by convention, will contain at least the following files.

* `xxx.controller.js`: This is the state / route controller that will be used by `xxx.html`
* `xxx.html`: This is the html file that will be rendered when the user navigates to the route in question.
* `xxx.state.config.js`: This file is used to determine whether the lazy dependencies of this route should be loaded individually or whether a
single file containing the combined lazy dependencies should instead be loaded. See the comments in this file for more details.
* `xxx.dependencies.js`: This is what I call a dependency definition module. It just list all the lazy dependencies in an AMD module so that
the r.js optimiser can use it to combine the lazy dependencies for this route into one file. It exists solely for the r.js optimiser as all
dependencies need to be hardcoded in an AMD module before it can be found by the optimiser. Note also that this file is meant to be generated
from `xxx.state.config` as its lazy dependencies are also contained in the 'lazyDependencies' parameter in `xxx.state.config.js`.
This generation has not yet been implemented however.
* `xxx.state.js`: This file is responsible for registering the state with the module.