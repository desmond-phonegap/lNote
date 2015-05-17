angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope, $ionicPlatform) {
    //$ionicPlatform.ready( function() {
        console.log("device $cordovaLocalNotification");
       //  $cordovaLocalNotification.add({ message: "Hello Pinka"});
    //});
    
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

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
