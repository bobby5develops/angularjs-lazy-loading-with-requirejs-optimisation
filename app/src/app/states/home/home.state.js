define([
    'app/states/home/home.state.config',
    'mustard/versionedUrlFor',
    'mustard/routeDependencyResolverFor'
],
function(stateConfig, versionedUrlFor, routeDependencyResolverFor)
{
    var module = angular.module('app');

    module.config(function($stateProvider)
    {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: versionedUrlFor('/app/states/home/home.html'),
            resolve: routeDependencyResolverFor(stateConfig)
        });
    });
});