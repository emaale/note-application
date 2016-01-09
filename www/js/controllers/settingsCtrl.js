app.controller('SettingsCtrl', ['$scope', 'settings', function($scope, settings) {
	$scope.settings = settings;

	// Changes the setting
	$scope.changeSetting = function(key, value) {
		// Change the setting
		console.log(settings);
		$scope.settings.changeSetting(key, value);
		
	};
}]);