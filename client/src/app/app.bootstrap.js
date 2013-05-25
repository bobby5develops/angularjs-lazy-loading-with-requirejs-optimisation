require
(
    [
        'app.module',
        'vendor.dependencies',
        'module.dependencies',
        'state.dependencies',
        'common.dependencies'
    ],
    function()
    {
        angular.bootstrap(document, ['app']);
    }
);
