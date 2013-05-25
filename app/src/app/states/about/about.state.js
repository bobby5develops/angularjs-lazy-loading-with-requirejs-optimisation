define([
    'app/states/about/about.state.config',
    'mustard/versionedUrlFor',
    'mustard/stateDependencyResolverFor'
],
function(stateConfig, versionedUrlFor, stateDependencyResolverFor)
{
    var module = angular.module('app');

    module.config(function($stateProvider)
    {
        $stateProvider.state('about', {
            url: '/about',
            templateUrl: versionedUrlFor('/app/states/about/about.html'),
            resolve: stateDependencyResolverFor(stateConfig)
        });
    });
});
