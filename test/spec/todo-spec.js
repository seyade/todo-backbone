define(function(require) {
    'use strict';

    describe('Todo Model', function() {
        
        var Todo = require('models/todo'),
            todo,
            self;

        beforeEach(function() {
            
            self = this;
            self.todo = new Todo;

            self.todo.set({ 
                id: 1, 
                item: 'Place a position in the market', 
                priority: 1,
                done: true
            });
        });

        it('should be defined', function() {
            
            expect(self.todo).toBeDefined();
        });

        it('should have properties called \'id\', \'item\', \'done\' and \'priority\'', function() {
            
            expect(self.todo.get('id')).toBeDefined();
            expect(self.todo.get('item')).toBeDefined();
            expect(self.todo.get('priority')).toBeDefined();
            expect(self.todo.get('done')).toBeDefined();
        });

        it('should have todo id set to 1', function() {
            
            expect(self.todo.get('id')).toEqual(1);
        });

        it('should have todo added and set with an action', function() {
            
            expect(self.todo.get('item')).toEqual('Place a position in the market');
        });

        it('should have todo priority set to 1', function() {
            
            expect(self.todo.get('priority')).toEqual(1);
        });


        it('should have todo done and dusted', function() {
            
            expect(self.todo.get('done')).toBeTruthy();
        });
    });

});
