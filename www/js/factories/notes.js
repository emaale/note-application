app.factory('notes', ['$localStorage', function($localStorage) {	
	o = {
		notes: []
	};
	//$localStorage.notes = []; // Clears the localstoragez`
	o.get = function(id) {
		return $localStorage.notes[id]; 
	};

	o.getAll = function() {
		return $localStorage.notes;
	};

	o.post = function(post) {
		// Save to local storage
		if(!Array.isArray($localStorage.notes)) $localStorage.notes = []; // Make sure array exists before we push to it

		// Give the post an id
		post.id = $localStorage.notes.length;

		// Push to the array
		$localStorage.notes.push(post);

		// Add to the factorys notes
		o.notes.push(post);

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

