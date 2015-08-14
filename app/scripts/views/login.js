/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'routes/approutes',
    'text!templates/login.html'
], function ($, _, Backbone, AppRoutes, LoginTemplate) {
    'use strict';

    var LoginView = Backbone.View.extend({

        template: _.template(LoginTemplate),

        el: '.app',

        events: {
            'click .signin-btn': 'signin'
        },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        signin: function (e) {

            console.log('Login btn clicked!');

            console.log('AppRoutes: ', AppRoutes);

            e.preventDefault();

            var $username = this.$el.find('.username'), 
                $password = this.$el.find('.password'),
                //approutes = new AppRoutes,
                user = {
                    username: 'admin',
                    password: 'admin123',
                    email: 'admin@company.com'
                };            

            /*if ($username.val() === user.username && $password.val() === user.password) {
                this.approutes.navigate('', { trigger: true });
            } else {
                alert('Login not accepted');
            }*/
        }
    });

    return LoginView;
});
