angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'Nice App Bro!',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Rigo Espinioza',
    profilename: 'The Big Rig',
    lastText: 'what are you doing this weekend?',
    face: 'https://pbs.twimg.com/profile_images/513143333955600384/NrfErpOw_400x400.jpeg'
  },{
    id: 2,
    name: 'Linda Espinioza',
    profilename: 'Charlene',
    lastText: 'Hiiiiiiii',
    face: 'https://pbs.twimg.com/profile_images/513144597909082112/jzE5gj3i_400x400.jpeg'
  }, {
    id: 3,
    name: 'Jannell Rivera',
    profilename: 'MoonLightSonota',
    lastText: 'Lets go on Vacation!',
    face: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xtf1/v/t1.0-1/p160x160/11112940_922150654492781_7434334122259606335_n.jpg?oh=1863eec9dd5565e7f1fd3d2ab99a532e&oe=55FE5836&__gda__=1442142019_3588b0da2708d95ef1fb4bc7975945ef'
  }];

  var users = [{
    id: 0,
    name: 'Andy Montes',
    profilename: 'Amp0240',
    face: 'https://lh3.googleusercontent.com/-2ObZ-QODvKk/AAAAAAAAAAI/AAAAAAAAAFc/51VbbVYN8lI/s120-c/photo.jpg'
  }, {
    id: 1,
    name: 'Rigo Espinioza',
    profilename: 'The Big Rig',
    face: 'https://pbs.twimg.com/profile_images/513143333955600384/NrfErpOw_400x400.jpeg'
  },{
    id: 2,
    name: 'Linda Espinioza',
    profilename: 'Charlene',
    face: 'https://pbs.twimg.com/profile_images/513144597909082112/jzE5gj3i_400x400.jpeg'
  }, {
    id: 3,
    name: 'Jannell Rivera',
    profilename: 'MoonLightSonota',
    face: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xtf1/v/t1.0-1/p160x160/11112940_922150654492781_7434334122259606335_n.jpg?oh=1863eec9dd5565e7f1fd3d2ab99a532e&oe=55FE5836&__gda__=1442142019_3588b0da2708d95ef1fb4bc7975945ef'
  }];

  return {
    all: function() {
      return chats;
    },
    getAllUsers: function() {
      return users;
    },
    getUser: function(friendId) {
      for (var j = 0; j < users.length; j++) {
        if (users[j].id === parseInt(friendId)) {
          return users[j];
        }
      }
      return null;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
