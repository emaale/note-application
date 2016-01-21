app.controller('NavCtrl', ['$scope', 'notes', '$state', 'search', 'sort', '$stateParams', 'settings', 'toast', function($scope, notes, $state, search, sort, $stateParams, settings, toast) {
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

	// Deletes the note specififed by stateParams
	$scope.deleteNote = function() {
		// Get all the notes
		$scope.notes = notes.getAll();

		// Hides the clicked note
		$scope.notes[$scope.id].deleted = true;

		// If set in our settings, notify the user with a toast
		if(settings.enableToasts) {
			// Give user a toast, with the option to undo the actions
			toast.setActionCb(function() {
				$scope.notes[$scope.id].deleted = false;
			});

			toast.phrase = "Deleted";
			toast.actionPhrase = "UNDO";

			toast.show();
		}

		// Redirect user to list page after toast has been set, otherwise we can't control it
		$state.go("sortNotes");
	};
}]);