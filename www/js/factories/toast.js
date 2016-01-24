app.factory('toast', function($timeout){
	var toast = {
		"cb": function() {},
		"hidden": true,
		"phrase": "",
		"actionPhrase": "",
		"duration": 3000
	};

	// Sets the callback after the right side "action" has been clicked
	toast.setActionCb = function(cb) {
		toast.cb = cb;
	};

	// Runs the action callback
	toast.runActionCb = function() {
		// Run the callback
		toast.cb();

		// Hide the toast
		toast.hide();
	};

	// Displays the toast
	toast.show = function() {
		toast.hidden = false;

		// Hide the toast after the toast duration is up
		$timeout(function(){
		   // Hide toast
		   toast.hide();
		}, toast.duration);
	};

	// Hides the toast
	toast.hide = function() {
		toast.hidden = true;
	};

	return toast;
});