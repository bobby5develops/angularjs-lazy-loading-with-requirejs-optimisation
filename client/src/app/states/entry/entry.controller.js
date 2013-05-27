angular.module('app').controller('entry.controller', function($scope, $stateParams, $state, $location, getBlogEntryBySlug)
{
    $scope.entry = getBlogEntryBySlug($stateParams.slug);

    $scope.$state = $state;

    $scope.$location = $location;

});