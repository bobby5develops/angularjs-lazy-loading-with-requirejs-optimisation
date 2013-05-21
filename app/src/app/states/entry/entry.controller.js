angular.module('app').controller('entry.controller', function($scope, $routeParams, $state, $location, getBlogEntryBySlug)
{
    $scope.entry = getBlogEntryBySlug($routeParams.slug);

    $scope.$state = $state;

    $scope.$location = $location;

});