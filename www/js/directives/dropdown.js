app.directive('dropdown', [function() {
   return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
         	$(elem).dropdown({
      			inDuration: 300,
		      	outDuration: 400,
		      	constrain_width: false, // Does not change width of dropdown to that of the activator
		      	hover: false, // Activate on hover
		      	gutter: 5, // Spacing from edge
		      	belowOrigin: false, // Displays dropdown below the button
		      	alignment: 'left' // Displays dropdown with edge aligned to the left of button
	    	});

         	$("#" + $(elem).attr("data-activates") + " li").click(function(e) {
         		$(this).parent().hide();
         	});
      }
   };
}]);