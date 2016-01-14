app.factory('notes', ['$localStorage', '$firebaseArray', 'notesFirebase', function($localStorage, $firebaseArray, notesFirebase) {	
	o = {
		notes: [],
	};

	o.get = function(id) {
		$localStorage.notes[id] = notesFirebase.get(id);

		return $localStorage.notes[id]; 
	};

	o.getAll = function() {
		// Fetch cloud data
		$localStorage.notes = notesFirebase.getAll();

		return $localStorage.notes;
	};

	o.post = function(post) {
		// Save to local storage
		if(!Array.isArray($localStorage.notes)) $localStorage.notes = []; // Make sure array exists before we push to it
		if(!Array.isArray(o.notes)) o.notes = []; // Make sure array exists before we push to it
		
		// Give the post an id
		post.id = $localStorage.notes.length;

		// Push to the array
		$localStorage.notes.push(post);

		// Add to the factorys notes
		o.notes.push(post);

		// Update the cloud
		notesFirebase.post(post);

		return post;
	};

	o.update = function(id, post) {
		$localStorage.notes[id] = post;
	};

	o.delete = function(id) {
		// Remove from localStorage
		$localStorage.notes[id].deleted = true;
	};

	return o;
}]);

