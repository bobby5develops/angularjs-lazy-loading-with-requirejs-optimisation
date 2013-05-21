define([
    'app/states/entry/entry.state.config',
    'mustard/versionedUrlFor',
    'mustard/routeDependencyResolverFor'
],
function(stateConfig, versionedUrlFor, routeDependencyResolverFor)
{
    var module = angular.module('app');

    module.config(function($stateProvider)
    {
        $stateProvider.state('entry', {
            url: '/entry/:slug',
            templateUrl: versionedUrlFor('/app/states/entry/entry.html'),
            resolve: routeDependencyResolverFor(stateConfig)
        });
    });
});