app.factory('location', ['$http', function($http) {	
	o = {
		location: "",
		db: ""
	};
	
	// Success function
	var onSuccess = function(position) {
	    return $http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&result_type=locality&key=AIzaSyB19RbpY_MDENXQgby3ik_BsoaGuZEaZ3c").success(function(data) {
	    	o.location = data.results[0].formatted_address;
	    	o.db = o.location; // Save the location to the databinding
	    });
	};

	// Log on error
	function onError(error) {
	    
	}

	navigator.geolocation.getCurrentPosition(onSuccess, onError);

	o.reset = function() {
		o.db = o.location; // Save the location to the databinding
	};

	return o;
}]);

