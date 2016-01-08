app.factory('location', ['$http', function($http) {	
	o = {
		location: ""
	};
	
	// Success function
	var onSuccess = function(position) {
	    return $http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&result_type=street_address&key=AIzaSyB19RbpY_MDENXQgby3ik_BsoaGuZEaZ3c").success(function(data) {
	    	o.location = data.results[0].formatted_address;
	    });
	};

	// Log on error
	function onError(error) {
	    
	}

	navigator.geolocation.getCurrentPosition(onSuccess, onError);

	return o;
}]);

