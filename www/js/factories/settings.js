app.factory('settings', ['$localStorage', function($localStorage) {	
	o = {
		"enableLocation": true,
		"enableToasts": true,
	};

	// If previous settings have been saved to localStorage we want to fetch those instead, otherwise use defaults
	if($localStorage.settings != null) {
		o = $localStorage.settings;
	} else {
		// Save the defaults into localStorage
		$localStorage.settings = o;
	}

	return o;
}]);

