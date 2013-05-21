define
({
    routeDependencyId:'app/states/home/home.dependencies',
    lazyDependencies: [
        'app/states/home/home.controller',
        'app/system/blog/services/getBlogEntryIdsByPage',
        'app/system/blog/services/getBlogEntrySummaryById',
        'components/ify-color/ify-change-color-on-click-to'
    ]
});