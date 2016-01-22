app.controller('NoteCtrl', ['$scope', 'notes', '$state', '$stateParams', 'search', 'sort', 'toast', 'location', 'settings', function($scope, notes, $state, $stateParams, search, sort, toast, location, settings) {
	// Get all notes
	$scope.notes = notes.getAll();

	// Used for searching all the posts from the search bar
	$scope.search = search;

	// Used for sorting all the posts
	$scope.sort = sort;

	// Used to store the note entered by the form
	$scope.note = {};

	// Add the settings service to the scope so we can use it from the UI
	$scope.settings = settings;

	// If we are requesting a specific note
	if($stateParams.id) $scope.note = notes.get($stateParams.id);

	// If location is enabled in settings
	if(settings.enableLocation) {
		// Get the location so we can use it for later when we create new notes, but only if our settings tell us to
		$scope.location = location;

		// Reset the location databinding to the locations original value, so we don't have to make an additional http request (since the user will presumably not change location throughout the course of opening the app)
		location.reset();
	}

	// Updates a specific note
	$scope.updateNote = function() {
		console.log($scope.updatedNote.title);
		// Make sure title and body is filled in 
		if($scope.updatedNote.title != "" && $scope.updatedNote.body != "") {
			// Update note
			notes.update($stateParams.id, {
				"title": $scope.updatedNote.title,
				"body": $scope.updatedNote.body,
				"added_at": Date(),
				"id": $stateParams.id
			});

			// Go to that specific note
			$state.go("note", { id: $stateParams.id });
		} else {
			// Set error
			$scope.error = "Fill in all fields corrrectly.";
		}
	};

	// Deletes a specific note
	$scope.deleteNote = function(id) {
		// Hides the clicked note
		$scope.notes[id].deleted = true;

		// If set in our settings, notify the user with a toast
		if(settings.enableToasts) {
			// Give user a toast, with the option to undo the actions
			toast.setActionCb(function() {
				$scope.notes[id].deleted = false;
			});

			toast.phrase = "Deleted";
			toast.actionPhrase = "UNDO";

			toast.show();
		}
	};

	// Creates a new note
	$scope.createNote = function() {
		// Validate fields
		if($scope.note.title != "" && $scope.note.body != "") {
			// If using location, we want to use that input instead
			if(settings.enableLocation) $scope.note.title = $scope.location.db;

			// Create a new note
			var note = notes.post({
				"title": $scope.note.title,
				"body": $scope.note.body,
				"added_at": new Date()
			});

			// Go to that specific note
			$state.go("note", { id: note.id });
		} else {
			// Set error
			$scope.error = "Fill in all fields corrrectly.";
		}
	};

}]);