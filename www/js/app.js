(function() {

	var app = angular.module('RedditFeedReader', ['ionic']);

	app.controller('RedditFeedReaderCtrl', ['$scope', '$http', function($scope, $http){
		$scope.stories = [];

		$http.get('https://www.reddit.com/r/android/new/.json')
			.success(function(response){
				angular.forEach(response.data.children, function(child){
					$scope.stories.push(child.data);
				});
			});
	}]);

	app.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			if (window.cordova && window.cordova.plugins.Keyboard) {
				// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
				// for form inputs)
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

				// Don't remove this line unless you know what you are doing. It stops the viewport
				// from snapping when text inputs are focused. Ionic handles this internally for
				// a much nicer keyboard experience.
				cordova.plugins.Keyboard.disableScroll(true);
			}
			if (window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
	});

}());
