app.controller('NoteCtrl', ['$scope', 'notes', '$state', '$stateParams', 'search', 'sort', 'toast', 'location', function($scope, notes, $state, $stateParams, search, sort, toast, location) {
	// Get all notes
	$scope.notes = notes.getAll();

	// Used for searching all the posts from the search bar
	$scope.search = search;

	// Used for sorting all the posts
	$scope.sort = sort;

	// Get the location so we can use it for later when we create new notes
	$scope.location = location;

	// If we are requesting a specific note
	if($stateParams.id) $scope.note = notes.get($stateParams.id);

	// Updates a specific note
	$scope.updateNote = function(id) {
		// Update note
		notes.update(id, {
			"title": $scope.note.title,
			"body": $scope.note.body,
			"added_at": Date(),
			"id": $stateParams.id
		});

		// Go to that specific note
		$state.go("note", { id: $stateParams.id });
	};

	// Deletes a specific note
	$scope.deleteNote = function(id) {
		// Hides the clicked note
		$scope.notes[id].deleted = true;

		// Give user a toast, with the option to undo the actions
		toast.setActionCb(function() {
			$scope.notes[id].deleted = false;
		});

		toast.phrase = "Deleted";
		toast.actionPhrase = "UNDO";

		toast.show();
	};

	// Creates a new note
	$scope.createNote = function() {
		// Validate fields
		if($scope.location.location && $scope.note.body != "") {
			// Create a new note
			var note = notes.post({
				"title": $scope.location.location,
				"body": $scope.note.body,
				"added_at": new Date()
			});

			// Go to that specific note
			$state.go("note", { id: note.id });
		}
	};

}]);