define
({
    routeDependencyId:'app/states/home/home.dependencies',
    optimize:false,
    lazyDependencies: [
        'app/states/home/home.controller',
        'app/system/blog/services/getBlogEntryIdsByPage',
        'app/system/blog/services/getBlogEntrySummaryById',
        'components/ify-date/ify-date'
    ]
});