define([
    'app/states/entry/entry.state.config',
    'mustard/versionedUrlFor',
    'mustard/stateDependencyResolverFor'
],
function(stateConfig, versionedUrlFor, stateDependencyResolverFor)
{
    var module = angular.module('app');

    module.config(function($stateProvider)
    {
        $stateProvider.state('entry', {
            url: '/entry/:slug',
            templateUrl: versionedUrlFor('/app/states/entry/entry.html'),
            resolve: stateDependencyResolverFor(stateConfig)
        });
    });
});