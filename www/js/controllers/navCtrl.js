app.controller('NavCtrl', ['$scope', 'notes', '$state', 'search', 'sort', '$stateParams', function($scope, notes, $state, search, sort, $stateParams) {
	// Used for searching among the notes
	$scope.search = search;

	// If we are requesting a specific note
	if($stateParams.id) $scope.id = $stateParams.id;

	// Used for sorting the notes
	$scope.sort = sort;

	// Sets what to sort by
	$scope.sortNotes = function(sortBy) {
		$scope.sort.options = sortBy;
	};
}]);