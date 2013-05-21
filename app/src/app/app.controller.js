define(['app.module'], function()
{
    angular.module('app').controller('app.controller',function($scope)
    {
        $scope.brand = 'Lazy Loading With RequireJS Optimization'
    });
});
