app.factory('toast', function($timeout){
	var toast = {
		"cb": function() {},
		"hidden": true,
		"phrase": "",
		"actionPhrase": "",
		"duration": 3000
	};

	toast.setActionCb = function(cb) {
		toast.cb = cb;
	};

	toast.runActionCb = function() {
		// Run the callback
		toast.cb();

		// Hide the toast
		toast.hide();
	};

	toast.show = function() {
		toast.hidden = false;

		// Hide the toast after the toast duration is up
		$timeout(function(){
		   // Hide toast
		   toast.hide();
		}, toast.duration);
	};

	toast.hide = function() {
		toast.hidden = true;
	};

	return toast;
});