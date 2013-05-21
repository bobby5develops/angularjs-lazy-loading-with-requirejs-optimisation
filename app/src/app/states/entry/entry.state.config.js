define
({
    routeDependencyId:'app/states/entry/entry.dependencies',
    lazyDependencies: [
        'app/states/entry/entry.controller',
        'app/system/blog/services/getBlogEntryBySlug'
    ]
});