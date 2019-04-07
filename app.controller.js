"use strict";

function TodoController() {  
  const vm = this;
  // vm.todos = [
  //   'Walk the dog', 
  //   'Go to the store', 
  //   'Get gas',
  //   'Wash the car'
  //  ];

  vm.todos = [
    {task:"Walk the dog", completed: false}, 
    {task:"Go to the store", completed: false}, 
    {task:"Get gas", completed: false},
    {task:"Wash the car", completed: false}
    ];

    // vm.toggleSelect = function(todo) {
    //   todo.completed = !todo.completed;

    // },
    vm.removeTask = function(todo){
      let remove = vm.todos.indexOf(todo);
      vm.todos.splice(remove, 1)
    };

    vm.addTask = function(input) {
      vm.todos.push({task: input, completed: false});
    };

    vm.complete = function(todo) {
      todo.completed = true;
    }
};



angular
  .module("todoApp")
  .controller("TodoController", TodoController);