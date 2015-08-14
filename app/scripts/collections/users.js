/*global define*/

define([
    'underscore',
    'backbone',
    'models/user'
], function (_, Backbone, User) {
    'use strict';

    var Users = Backbone.Collection.extend({
    	
        model: User,

        localStorage: new Backbone.LocalStorage('users'),
    });

    return Users;
});
