//Andy Montes 

angular.module('starter.controllers', ["firebase"])


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


.controller('PostCtrl', ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    //Code here
    var ref = new Firebase("https://burning-inferno-4373.firebaseio.com");
    $scope.messages = $firebaseArray(ref).data;
  }
])

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
