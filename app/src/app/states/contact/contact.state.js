define([
    'app/states/contact/contact.state.config',
    'mustard/versionedUrlFor',
    'mustard/stateDependencyResolverFor'
],
function(stateConfig, versionedUrlFor, stateDependencyResolverFor)
{
    var module = angular.module('app');

    module.config(function($stateProvider)
    {
        $stateProvider.state('contact', {
            url: '/contact',
            templateUrl: versionedUrlFor('/app/states/contact/contact.html'),
            resolve: stateDependencyResolverFor(stateConfig)
        });
    });
});