app.directive('toast', [function() {
   return {
      restrict: 'A',
      templateUrl: 'partials/directives/toast.html',
      controller: function($scope, $attrs, toast) {
         $scope.toast = toast;

         $scope.runCb = function() { // Runs the callback
            $scope.toast.runActionCb();
         };
      }
   };
}]);