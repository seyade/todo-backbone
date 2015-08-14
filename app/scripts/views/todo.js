/*global define*/

/**
 * Todo View
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'models/todo',
    'text!templates/todo.html'
], function ($, _, Backbone, TodoModel, TodoTemplate) {
    'use strict';

    var TodoView = Backbone.View.extend({

        template: _.template(TodoTemplate),
        tagName: 'li',
        className: 'list-group-item',

        events: {
            'click .todo-edit': 'edit'
        },

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },

        edit: function(e) {
            e.preventDefault();

            console.log('Edit...');

            this.$todoeditfield = this.$el.find('.todo-edit-field');

            if (this.$todoeditfield.hasClass('hidden')) {
                this.$todoeditfield.removeClass('hidden');
            } else {
                this.$todoeditfield.addClass('hidden');
            }
        }
    });

    return TodoView;
});
