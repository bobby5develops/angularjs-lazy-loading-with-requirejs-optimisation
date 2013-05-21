angular.module('app').factory('getBlogEntryIdsByPage', function($q, $timeout)
{
    return function getBlogEntryIdsByPage()
    {
        var deferred = $q.defer();

        $timeout(function()
        {
            deferred.resolve([1,2,3]);
        });
        
        return deferred.promise;
    }
});