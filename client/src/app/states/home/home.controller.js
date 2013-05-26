angular.module('app').controller('home.controller', function($scope, getBlogEntryIdsByPage, getBlogEntrySummaryById, settings)
{
    $scope.settings = settings;
    $scope.entryIds = getBlogEntryIdsByPage();
    $scope.getBlogEntrySummaryById = getBlogEntrySummaryById;
});