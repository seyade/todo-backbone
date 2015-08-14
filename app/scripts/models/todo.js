/*global define*/

/**
 * Todo Model
 */

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var TodoModel = Backbone.Model.extend({

        defaults: function(){
            
            return {
                item: 'Sample todo item',
                priority: 0,
                done: false
            };
        },

        getId: function() {
            return this.id;
        },

        initialize: function() {},

        validate: function(attrs, options) {},

        parse: function(response, options)  {
            return response;
        }
    });

    return TodoModel;
});
