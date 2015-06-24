//Andy Montes 
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('FriendDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.user = Chats.getUser($stateParams.friendId);
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Chats) {
	$scope.users = Chats.getAllUsers();
  	$scope.remove = function(chat) {
    	Chats.remove(chat);
  }
})


.controller('PostCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
