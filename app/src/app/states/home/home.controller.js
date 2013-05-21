angular.module('app').controller('home.controller', function($scope, getBlogEntryIdsByPage, getBlogEntrySummaryById)
{
    $scope.entryIds = getBlogEntryIdsByPage();
    $scope.getBlogEntrySummaryById = getBlogEntrySummaryById;
});