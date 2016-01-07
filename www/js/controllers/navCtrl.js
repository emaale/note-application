app.controller('NavCtrl', ['$scope', 'notes', '$state', 'search', 'sort', function($scope, notes, $state, search, sort) {
	// Used for searching among the notes
	$scope.search = search;

	// Used for sorting the notes
	$scope.sort = sort;

	// Sets what to sort by
	$scope.sortNotes = function(sortBy) {
		$scope.sort.options = sortBy;
	};
}]);