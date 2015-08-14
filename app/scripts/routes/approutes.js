/*global define*/

define([
    'jquery',
    'backbone',
    'collections/users',
    'collections/todos',
    'views/todos',
    'views/todospanel',
    'views/app',
    'views/register',
    'views/login',
    'broadcast'
], function ($, Backbone, Users, Todos, TodosView, TodosPanelView, AppView, RegisterView, LoginView, Broadcast) {
    'use strict';

    var AppRouter = Backbone.Router.extend({

        routes: {
        	'': 'index',
            '#': 'index',
        	'todos': 'showAllTodo',
            'login': 'login',
            'register': 'register'
        },

        initialize: function() {
            this.users = new Users;
        	this.todos = new Todos;
        },

        index: function() {

            var appview = new AppView({ collection: this.todos });
            appview.render().el;
        	
        	//this.switchView(appview);
        },

        showAllTodo: function() {

        	var todospanelview = new TodosPanelView({ collection: this.todos });
            todospanelview.render().el;

        	//this.switchView(todospanelview);
        },

        login: function() {

            var loginview = new LoginView;
            loginview.render().el;
        },

        register: function() {

            var registerview = new RegisterView({ collection: this.users });
            registerview.render().el;
        },

        switchView: function(view) {

            console.log('View switched...', view);

            if(this.currentView) {
                if (this.currentView === view) {
                    return;
                }

                this.currentView.remove();
            }

            view.render().el;
            this.currentView = view;

        	/*if (this.currentView) {
        		this.currentView.remove();
        	}

        	//$('.app-main').html(view.render().el);

        	$(this.el).append(view.render().el);
        	this.currentView = view;*/
        }

    });

    return AppRouter;
});
