define
([
    'app/system/blog/services/getBlogEntrySummaryById'
],
function()
{
    angular.module('app').factory('getBlogEntryBySlug', function($q, $timeout, getBlogEntrySummaryById)
    {
        return function getBlogEntryBySlug(slug)
        {
            var deferred = $q.defer();

            getBlogEntryIdBySlug(slug).then(function(id)
            {
                getBlogEntrySummaryById(id).then(function(entrySummary)
                {
                    getBlogEntryContentsById(id).then(function(contents)
                    {
                        var entry =
                        {
                            contents: contents
                        };

                        angular.extend(entry, entrySummary);

                        deferred.resolve(entry)
                    });   
                });
            });

            return deferred.promise;
        }
        
        function getBlogEntryIdBySlug(slug)
        {
            var deferred = $q.defer();

            // TODO: Implement
            $timeout(function()
            {
                var mapping = {
                    'a-blog-entry' : 1,
                    'another-blog-entry' : 2,
                    'a-third-blog-title': 3
                }

                deferred.resolve(mapping[slug])
            });

            return deferred.promise;
        }

        function getBlogEntryContentsById(id)
        {
            var deferred = $q.defer();

            // TODO: Implement
            $timeout(function()
            {
                deferred.resolve('Contents for listing ' + id);
            });

            return deferred.promise;
        }
    });
});