app.factory('settings', ['$localStorage', function($localStorage) {	
	o = {
		"enableLocation": true,
		"enableToasts": true,
	};
	
	// Sets a setting
	o.changeSetting = function(key, value) {
		// Update localstorage and o
		$localStorage.settings[key] = value;
		o[key] = value;
	};

	// Read the data from localStorage
	o = $localStorage.settings;

	return o;
}]);

