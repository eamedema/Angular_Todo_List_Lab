"use strict";

function TodoController() {  
  const vm = this;
  vm.todos = [
    'Walk the dog', 
    'Go to the store', 
    'Get gas',
    'Wash the car'
    ];

    vm.newTodo = "testing";

    vm.addText = function() {
      vm.todos.push(vm.newTodo);
    }
}



// familyMembers = [
//   {name: Andrew, relation: Brobeans, age: 25}
// ]

angular
  .module("App")
  .controller("TodoController", TodoController);