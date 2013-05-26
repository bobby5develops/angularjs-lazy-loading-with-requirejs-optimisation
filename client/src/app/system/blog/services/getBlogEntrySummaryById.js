angular.module('app').factory('getBlogEntrySummaryById', function($q, $timeout)
{
    return function getBlogEntrySummaryById(id)
    {
        var deferred = $q.defer();

        // TODO: Implement
        $timeout(function()
        {
            var listings =
            {
                1:{title: 'A Blog Title', publishedDate: 1367575980000, excerpt:'<p>A blog excerpt 1...</p>', slug:'a-blog-entry'},
                2:{title: 'Another Blog Title', publishedDate: 1363086780000, excerpt:'<p>A blog excerpt 2</p>', slug:'another-blog-entry'},
                3:{title: 'A Third Blog Title', publishedDate: 1357038780000, excerpt:'<p>A blog excerpt 3</p>', slug:'a-third-blog-title'}
            };

            listings[id].publishedDate = new Date(listings[id].publishedDate);

            deferred.resolve(listings[id]);
        });

        return deferred.promise;
    }
});