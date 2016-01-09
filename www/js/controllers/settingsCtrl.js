app.controller('SettingsCtrl', ['$scope', 'settings', function($scope, settings) {
	// Connect the settings page with the settings service, so that the settings can be used on other pages
	$scope.settings = settings;
}]);