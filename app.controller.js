"use strict";

function TodoController() {  
  const vm = this;


  vm.todos = [
    {task:"Walk the dog", completed: false}, 
    {task:"Go to the store", completed: false}, 
    {task:"Get gas", completed: false},
    {task:"Wash the car", completed: false}
    ];

  
    vm.removeTask = function(todo){
      let removeTodo = vm.todos.indexOf(todo);
      vm.todos.splice(removeTodo, 1);
    };

    vm.addTask = function(input) {
      vm.todos.push({task: input, completed: false});
    };

    vm.completeButton = function(todo) {
      todo.completed = true;
    };

    vm.editTask = function(todoEdit, todo) {
      todo.task = todoEdit;
    };
};



angular
  .module("todoApp")
  .controller("TodoController", TodoController);