app.factory('location', ['$http', 'settings', 'toast', function($http, settings, toast) {	
	l = {
		location: "",
		db: "",
		watchID: null
	};
	
	// Success function
	l.success = function(position) {
	    console.log("Success");
	    return $http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&result_type=locality&key=AIzaSyB19RbpY_MDENXQgby3ik_BsoaGuZEaZ3c").success(function(data) {
	    	l.location = data.results[0].formatted_address;
	    	l.db = l.location; // Save the location to the databinding
	    });
	};

	// Error function
	l.error = function(error) {
		// Notify user that location isnt working, which is an indicator that it hasnt been enabled in the devices settings
    	navigator.notification.alert(
    		"Location disabled in the devices settings. To stop getting these messages, disable the location setting in the applications settings.",
    		function() {}
    	);
	};

	// Start watching location
	l.startWatch = function() {
		console.log("Started watching");
		l.watchID = navigator.geolocation.watchPosition(l.success, l.error, { maximumAge: 0, timeout: 1000, enableHighAccuracy: false });
	};

	// Stop watching location
	l.stopWatch = function() {
		console.log("Stopped watching");
		l.watchID = null;
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

