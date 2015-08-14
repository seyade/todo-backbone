/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'models/user',
    'routes/approutes',
    'text!templates/register.html'
], function ($, _, Backbone, User, AppRoutes, RegisterTemplate) {
    'use strict';

    var RegisterView = Backbone.View.extend({

        template: _.template(RegisterTemplate),

        el: '.app',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        signup: function() {
            var user = {
                username: 'admin',
                password: 'admin123',
                email: 'admin@company.com'
            };

            var newuser = {
                username: this.$el.find('.username'),
                password: this.$el.find('.password'),
                email: this.$el.find('.email')
            };

            var user = new User(newuser);

            var approutes = new AppRoutes;

            user.save(this, {
                success: function(res) {
                    console.log('New user added!');
                    approutes.navigate('', { trigger: true });
                }
            });

            //this.collection.create(newuser);

            console.log('Last code-line in signup()!');
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });

    return RegisterView;
});
