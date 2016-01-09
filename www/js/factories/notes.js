app.factory('notes', ['$localStorage', '$firebaseArray', function($localStorage, $firebaseArray) {	
	o = {
		notes: [],
		firebaseArray: "",
	};
	
	// Get notes from firebase and start 3-way binding
	/*var ref = new Firebase("https://sizzling-heat-7045.firebaseio.com/notes");
	o.firebaseArray = $firebaseArray(ref);*/

	o.get = function(id) {
		return $localStorage.notes[id]; 
	};

	o.getAll = function() {
		return $localStorage.notes;
	};

	o.post = function(post) {
		// Save to local storage
		if(!Array.isArray($localStorage.notes)) $localStorage.notes = []; // Make sure array exists before we push to it
		if(!Array.isArray(o.notes)) o.notes = []; // Make sure array exists before we push to it
		console.log("sdfsdfsd");
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

