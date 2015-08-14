/*global define*/

define([
    'underscore',
    'backbone',
    'localstorage'
], function (_, Backbone) {
    'use strict';

    var User = Backbone.Model.extend({

        defaults: function() {
            return {
                username: '',
                password: '',
                email: ''
            }
        },

        //localStorage: new Backbone.LocalStorage('user'),

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return User;
});
