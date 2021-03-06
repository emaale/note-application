app.factory('location', ['$http', 'settings', 'toast', function($http, settings, toast) {	
	l = {
		location: "",
		db: "",
		watchID: null
	};
	
	// Success function
	l.success = function(position) {
	    return $http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&result_type=locality&key=AIzaSyB19RbpY_MDENXQgby3ik_BsoaGuZEaZ3c").success(function(data) {
	    	l.location = data.results[0].formatted_address;
	    	l.db = l.location; // Save the location to the databinding
	    });
	};

	// Error function
	l.error = function(error) {
		// Make sure its a timeout error, which indicates location is turned off
		if(error.code == error.TIMEOUT) {
			// Notify user that location isnt working
	    	navigator.notification.alert(
	    		"Location disabled in the devices settings. To stop getting these messages, disable the location setting in the applications settings, or enable it in the devices settings.",
	    		function() {}
	    	);
		}
	};

	// Start watching location
	l.startWatch = function() {
		// Store the ID so we can clear it later
		l.watchID = navigator.geolocation.watchPosition(l.success, l.error, { maximumAge: 60000, timeout: 3000, enableHighAccuracy: false });
	};

	// Stop watching location
	l.stopWatch = function() {
		l.watchID = null; // Clear id, so watching stops
	};

	// Resets the databinding to the location
	l.reset = function() {
		l.db = l.location; // Save the location to the databinding
	};

	// If GPS is enabled in the settings, start watching the location
	if(settings.enableLocation) {
		l.startWatch();
	}

	return l;
}]);

