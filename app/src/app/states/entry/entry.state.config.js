define
({
    routeDependencyId:'app/states/entry/entry.dependencies',
    optimize:false,
    lazyDependencies: [
        'app/states/entry/entry.controller',
        'app/system/blog/services/getBlogEntryBySlug'
    ]
});