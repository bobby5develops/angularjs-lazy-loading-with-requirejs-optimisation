module.exports = function(grunt)
{
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.initConfig
    ({
        srcDir: 'app/src',
        distDir: 'app/dist',
        tempDir: 'app/temp',
        sass:{
            dist:{
                options:{
                    debugInfo: true,
                    style: 'compressed'
                },
                expand:true,
                cwd:'<%= srcDir %>',
                src: ['app/**/*.styles.scss'],
                dest: '<%= distDir %>',
                ext:'.styles.css'
            }
        },
        less:{
            dist:{
                options:{
                    compress: true
                },
                expand:true,
                cwd:'<%= srcDir %>',
                src: ['app/**/*.styles.less'],
                dest: '<%= distDir %>',
                ext:'.styles.css'
            }
        },
        cssmin: {
            twitter_bootstrap: {
                options:{
                    keepSpecialComments:0
                },
                src: [
                    '<%= srcDir %>/vendor/bootstrap/css/bootstrap.css',
                    '<%= srcDir %>/vendor/bootstrap/css/bootstrap-responsive.css'
                ],
                dest: '<%= distDir %>/vendor/bootstrap/css/bootstrap.css'
            }
        },
        htmlmin:{
            dist: {
                options:{
                    removeComments: true,
                    collapseWhitespace: true
                },
                expand:true,
                cwd:'<%= srcDir %>',
                src: ['**/*.html'],
                dest: '<%= distDir %>'
            }
        },
        pngOptimizationLevel: 7,
        imagemin: {
            png: {
                options: {
                    optimizationLevel: '<%= pngOptimizationLevel %>'
                },
                expand:true,
                cwd:'<%= srcDir %>',
                src: ['**/*.png'],
                dest: '<%= distDir %>'
            },
            jpg: {
                expand:true,
                cwd:'<%= srcDir %>',
                src: ['**/*.jpg'],
                dest: '<%= distDir %>'
            }
        },
        copy: {
            vendor_to_temp: {
                expand:true,
                cwd:'<%= srcDir %>',
                src: ['vendor/**/*'],
                dest: '<%= tempDir %>'
            },
            scripts_to_temp: {
                expand:true,
                cwd:'<%= srcDir %>',
                src: ['**/*.js'],
                dest: '<%= tempDir %>'
            }
        },
        clean: {
            on_start: ['<%= distDir %>'],
            on_finish: [
                '<%= tempDir %>',
                '<%= distDir %>/jQuery.js',
                '<%= distDir %>/twitter-bootstrap.js'
            ]
        },
        ngmin: {
            scripts: {
                expand:true,
                cwd:'<%= tempDir %>',
                src: ['app/**/*.js','components/**/*.js','vendor/mustard/*.js'],
                dest: '<%= tempDir %>'
            }
        },
        replace: {
            dist_build_time: {
                options:{
                    variables:{
                        "build-time": (new Date()).getTime().toString()
                    },
                    prefix:'@@'
                },
                expand:true,
                cwd:'<%= distDir %>',
                src: ['**/*.*'],
                dest: '<%= distDir %>'
            }
        },
        requireJSOptimise: 'uglify2',
        requirejs: {
            compile: {
                options: {
                    keepBuildDir: true,
                    generateSourceMaps:false,
                    optimize: '<%= requireJSOptimise %>',
                    uglify2: {
                        mangle:true
                    },
                    preserveLicenseComments: false,
                    baseUrl: "<%= tempDir %>",
                    dir:'<%= distDir %>',
                    paths:{
                        'mustard': 'vendor/mustard',
                        'jQuery': 'vendor/jquery/jquery',
                        'twitter-bootstrap': 'vendor/bootstrap/js/bootstrap',
                        'angular': 'vendor/angular/angular',
                        'angular-ui-states': 'vendor/angular/angular-ui-states',
                        'vendor.dependencies':'app/dependencies/vendor.dependencies',
                        'module.dependencies':'app/dependencies/module.dependencies',
                        'state.dependencies':'app/dependencies/state.dependencies',
                        'common.dependencies':'app/dependencies/common.dependencies',
                        'app.module': 'app/app.module',
                        'app.settings': 'app/app.settings'
                    },
                    shim:{
                        jQuery: {
                            exports:'jQuery'
                        },
                        'twitter-bootstrap': {
                            deps: ['jQuery'],
                            exports: '$.fn.popover'
                        },
                        angular: {
                            deps: ['jQuery'],
                            exports: 'angular'
                        },
                        'angular-ui-states': {
                            deps: ['angular']
                        },
                        'common.dependencies': {
                            deps: ['module.dependencies']
                        },
                        'module.dependencies': {
                            deps: ['vendor.dependencies']
                        },
                        'vendor.dependencies': {
                            deps: ['app.module']
                        },
                        'common.dependencies': {
                            deps: ['app.module']
                        }
                    },
                    modules: [
                        {
                            name: 'app/app.bootstrap'
                        },
                        {
                            name: 'app/states/about/about.dependencies',
                            exclude: [
                                'app/app.module',
                                'app/app.settings',
                                'mustard/routeDependencyResolverFor'
                            ]
                        },
                        {
                            name: 'app/states/contact/contact.dependencies',
                            exclude: [
                                'app/app.module',
                                'app/app.settings',
                                'mustard/routeDependencyResolverFor'
                            ]
                        },
                        {
                            name: 'app/states/entry/entry.dependencies',
                            exclude: [
                                'app/app.module',
                                'app/app.settings',
                                'mustard/routeDependencyResolverFor'
                            ]
                        },
                        {
                            name: 'app/states/home/home.dependencies',
                            exclude: [
                                'app/app.module',
                                'app/app.settings',
                                'mustard/routeDependencyResolverFor'
                            ]
                        }
                    ]
                }
            }
        },
        watch: {
            gruntFile: {
                files: ['Gruntfile.js'],
                tasks: ['watch'],
                options: {
                    nospawn: false
                }
            },
            sass: {
                files: ['<%= srcDir %>/**/*.scss'],
                tasks: ['sass'],
                options: {
                    nospawn: false
                }
            },
            less: {
                files: ['<%= srcDir %>/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: false
                }
            },
            scripts: {
                files: ['<%= srcDir %>/**/*.js'],
                tasks: ['setup-dev','scripts','replace:dist_build_time'],
                options: {
                    nospawn: false
                }
            },
            html: {
                files: ['<%= srcDir %>/**/*.html'],
                tasks: ['htmlmin','replace:dist_build_time'],
                options: {
                    nospawn: false
                }
            },
            png_images: {
                files: ['<%= srcDir %>/**/*.png'],
                tasks: ['setup-dev','imagemin:png'],
                options: {
                    nospawn: false
                }
            },
            jpg_images: {
                files: ['<%= srcDir %>/**/*.png'],
                tasks: ['imagemin:jpg'],
                options: {
                    nospawn: false
                }
            }
        }
    });

    grunt.registerTask('setup-dev', 'Development related settings', function()
    {
        grunt.config.set('pngOptimizationLevel', 0);
        grunt.config.set('requireJSOptimise', 'none');
    });

    grunt.registerTask('scripts', ['copy:scripts_to_temp','ngmin','requirejs']);
    grunt.registerTask('styles' , ['cssmin:twitter_bootstrap','less']);
    grunt.registerTask('images' , ['imagemin']);
    grunt.registerTask('default', ['clean:on_start','scripts','styles','htmlmin','images','replace:dist_build_time','clean:on_finish']);
    grunt.registerTask('dev'    , ['setup-dev','default']);
};