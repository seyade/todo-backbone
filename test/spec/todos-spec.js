define(function(require) {
	'use strict';

	describe('Todos Collection', function() {

		var Todos, Todo, self, data;

		beforeEach(function() {

			Todo = require('models/todo');
			
			Todos = require('collections/todos');

			data = [
				{ id: 1, item: 'Go to Bravissimo', priority: 3 },
				{ id: 2, item: 'Get my 1st wife a big bra', priority: 1 },
				{ id: 3, item: 'Get a bra for my 2nd wife', priority: 2 }
			];

			self = this;

			self.todos = new Todos;
		});

		it('should be defined', function() {
			
			expect(self.todos).toBeDefined();
		});

		it('should have \'Todo\' model as reference', function() {
			
			expect(self.todos.model).toBe(Todo);
		});

		it('checks that \'add\' is invoked', function() {
			
			spyOn(self.todos, 'add');

			self.todos.add(data);

			expect(self.todos.add).toHaveBeenCalled();
		});

		it('should have 3 todos items', function() {

			self.todos.add(data);
			
			expect(self.todos.length).toEqual(3);
		});
	});
});
