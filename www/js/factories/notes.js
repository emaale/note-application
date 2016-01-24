app.factory('notes', ['$localStorage', function($localStorage) {	
	o = {
		notes: [],
		firebaseArray: "",
	};

	// Gets a single note
	o.get = function(id) {
		return $localStorage.notes[id]; 
	};

	// Gets all notes
	o.getAll = function() {
		return $localStorage.notes;
	};
	
	// Creates a new note
	o.post = function(post) {
		// Save to local storage
		if(!Array.isArray($localStorage.notes)) $localStorage.notes = []; // Make sure array exists before we push to it
		if(!Array.isArray(o.notes)) o.notes = []; // Make sure array exists before we push to it
		
		// Give the post an id
		post.id = $localStorage.notes.length;

		post.deleted = false;

		// Push to the array
		$localStorage.notes.push(post);

		// Add to the factorys notes
		o.notes.push(post);

		return post;
	};

	// Updates a note
	o.update = function(id, post) {
		$localStorage.notes[id] = post;
	};

	// Deletes a note
	o.delete = function(id) {
		// Remove from localStorage
		$localStorage.notes[id].deleted = true;
	};

	return o;
}]);

