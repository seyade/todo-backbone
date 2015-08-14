/*global define*/
/**
 * App View
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'models/todo',
    'collections/todos',
    'views/todos',
    'views/additem',
    'text!templates/app.html',
    'broadcast'
], function ($, _, Backbone, Todo, Todos, TodosView, AddItemView, AppTemplate, Broadcast) {
    'use strict';

    var AppView = Backbone.View.extend({

        apptemplate: _.template(AppTemplate),
        el: '.app-main',

        initialize: function () {

            console.log('AppiList started...');

            this.todos = new Todos;

            this.additemview = new AddItemView({ collection: this.todos });
            this.todosview = new TodosView({ collection: this.todos });

            this.todos.fetch({ reset: true });
            this.listenTo(this.collection, 'all', this.render);

            Broadcast.trigger('view:app');

            Broadcast.on('item:added', this.notification);
        },

        render: function () {
            
            this.$el.html(this.apptemplate());
            this.$el.prepend(this.additemview.render().el);
            this.$el.find('.todolist').append(this.todosview.render().el);

            return this;
        },

        notification: function() {
            var self = this;
            console.log('an item has been added', self.todos.length);
            //this.listenTo(this.todos, 'add', this.render);
        }
    });

    return AppView;
});
