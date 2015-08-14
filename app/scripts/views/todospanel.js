/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/todos',
    'views/todos',
    'text!templates/todospanel.html',
    'broadcast'
], function ($, _, Backbone, Todos, TodosView, TodosPanelTemplate, Broadcast) {
    'use strict';

    var TodosPanelView = Backbone.View.extend({

        el: '.app-main',
        template: _.template(TodosPanelTemplate),

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.todos = new Todos;
            this.todosview = new TodosView({ collection: this.todos });

            this.todos.fetch({ reset: true });

            Broadcast.trigger('view:todospanel');
        },

        render: function () {
            this.$el.html(this.template());
            this.$el.find('.todos-panel').append(this.todosview.render().el);

            return this;
        }
    });

    return TodosPanelView;
});
