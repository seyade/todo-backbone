/*global define*/

/**
 * AddItemForm View
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/todos',
    'text!templates/additem.html',
    'broadcast'
], function ($, _, Backbone, Todos, AddItemFormTemplate, Broadcast) {
    'use strict';

    var AddItemFormView = Backbone.View.extend({

        tagName: 'div',
        className: '.add-item-panel',
        template: _.template(AddItemFormTemplate),

        events: {
            'keypress #item-title': 'addItem'
        },

        initialize: function () {

            this.todos = new Todos;
        },

        addItem: function(e) {

            var data = { item: this.$el.find('#item-title').val() };

            if (e.which === 13) {
                e.preventDefault();

                this.collection.create(data);

                Broadcast.trigger('item:added');

                this.$el.find('#item-title').val('');

                console.log('New item added!', Broadcast);
            }
        },

        render: function() {
            this.$el.append(this.template());
            return this;
        }
    });

    return AddItemFormView;
});
