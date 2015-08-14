/*global define*/

/**
 * Todos View
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'models/todo',
    'collections/todos',
    'views/todo'
], function ($, _, Backbone, Todo, Todos, TodoView) {
    'use strict';

    var TodosListView = Backbone.View.extend({

        tagName: 'ul',
        className: '.todo-list list-group list-unstyled',

        initialize: function() {
            console.log('Todos list is showing...');

            this.listenTo(this.collection, 'add', this.addOneTodo);

            this.collection.fetch({ reset: true });
        },

        render: function () {

            this.collection.each(this.addOneTodo, this);

            return this;
        },

        addOneTodo: function(todo) {
            var todoview = new TodoView({ model: todo });

            this.$el.append(todoview.render().el);
        }
    });

    return TodosListView;
});
