app.controller('SettingsCtrl', ['$scope', 'settings', 'location', function($scope, settings, location) {
	// Connect the settings page with the settings service, so that the settings can be used on other pages
	$scope.settings = settings;

	// Runs when the location setting changes
	$scope.changeLocationSetting = function() {
		// If the setting was enabled, we want to start watching the location
		if($scope.settings.enableLocation) {
			location.startWatch();
		} else {
			location.stopWatch();
		}
	};
}]);