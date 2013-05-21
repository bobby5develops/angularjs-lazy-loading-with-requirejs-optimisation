define(function()
{
    var isFirstRun = true;

    return function routeDependencyResolverFor(route)
    {
        return {resolver:['$q','$rootScope', function($q, $rootScope)
        {
            var deferred = $q.defer();

            if(isFirstRun)
            {
                require([route.routeDependencyId], function()
                {
                    $rootScope.$apply(function()
                    {
                        isFirstRun = false;

                        deferred.resolve();
                    });
                });
            }
            else
            {
                require(route.lazyDependencies, function()
                {
                    $rootScope.$apply(function()
                    {
                        deferred.resolve();
                    });
                });
            }

            return deferred.promise;
        }]};
    }
});