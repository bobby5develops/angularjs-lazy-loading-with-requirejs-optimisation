define([
    'app/states/about/about.state.config',
    'mustard/versionedUrlFor',
    'mustard/routeDependencyResolverFor'
],
function(stateConfig, versionedUrlFor, routeDependencyResolverFor)
{
    var module = angular.module('app');

    module.config(function($stateProvider)
    {
        $stateProvider.state('about', {
            url: '/about',
            templateUrl: versionedUrlFor('/app/states/about/about.html'),
            resolve: routeDependencyResolverFor(stateConfig)
        });
    });
});
