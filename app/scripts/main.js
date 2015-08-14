/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        localstorage: {
            deps: ['backbone'],
            exports: 'Backbone',
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/lodash/dist/lodash',
        backbone: '../bower_components/backbone/backbone',
        localstorage: '../bower_components/backbone-localstorage/backbone-localstorage',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        text: '../bower_components/requirejs-text/text'
    }
});

require([
    'backbone',
    'views/app',
    'models/todo',
    'collections/todos',
    'routes/approutes'
], function (Backbone, AppView, Todo, Todos, AppRoutes) {
    var approutes = new AppRoutes;
    
    Backbone.history.start();

    approutes.navigate('', { trigger: true });
    approutes.navigate('#', { trigger: true });
    approutes.navigate('/#todos', { trigger: true });
    approutes.navigate('/#register', { trigger: true });
    approutes.navigate('/#login', { trigger: true });
});
