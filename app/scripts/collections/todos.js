/*global define*/

/**
 * Todos Collection
 */

define([
    'underscore',
    'backbone',
    'models/todo',
    'localstorage'
], function (_, Backbone, Todo, Storage) {
    'use strict';

    var TodosCollection = Backbone.Collection.extend({
        model: Todo,
        localStorage: new Backbone.LocalStorage('todos'),

        comparator: function(todo) {
            return todo.get('priority');
        }
    });

    return TodosCollection;
});
