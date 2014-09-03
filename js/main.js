function MainController($scope) {

  $scope.todoItems = [];

  $scope.addItem = function(todo){
    $scope.todoItems.unshift(todo);
    $scope.newItem = {name: "", active: true};
    console.log(todo);
  };

  $scope.remove = function(todo) {
    var index = $scope.todoItems.indexOf(todo);
    $scope.todoItems.splice(index, 1);
  };

  $scope.update = function(todo, newTodo) {
    var index = $scope.todoItems.indexOf(todo);
    $scope.todoItems.splice(index, 1, newTodo);
  };

  $scope.updateActive = function(todo) {
    var index = $scope.todoItems.indexOf(todo);
    $scope.todoItems[index].active = false;

    console.log(todo);
  };

  $scope.removeCompleted = function(todoItems) {
    var doneItem;
    for(var i = 0; i<todoItems.length;i++){
      if(todoItems[i].active === false){
        var doneItem = $scope.todoItems.indexOf(todoItems[i]);
      }
      $scope.remove(doneItem);
    }
  };

  $scope.counter = function() {
    var done = 0;
    angular.forEach($scope.todoItems, function(todo){
      done += todo.active === false;
    });
    return done;
  };

}
