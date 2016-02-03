var appTodo = angular.module('appTodo', []);

function mainController($scope, $http) {
  $scope.formData = {};

  $http.get('/api/task/all')
    .success(function(data) {
      $scope.tasks = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.createTask = function() {
    $http.post('api/task', $scope.formData)
      .success(function(data) {
        $scope.formData= {};
        $scope.tasks = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.deleteTask = function(id) {
    $http.delete('/api/task/' + id)
      .success(function(data) {
        $scope.tasks = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

}
