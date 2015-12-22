angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('NamSuVuiCtrl', function($scope) {
  $scope.su = [
    { thu: 'Thứ nhất thì ngắm: ', ngam: 'Thiên thần truyền tin cho Đức Bà chịu thai. Ta hãy xin cho được ở khiêm nhường.', id: 11 },
    { thu: 'Thứ hai thì ngắm: ', ngam: 'Đức Đà đi viếng Bà Thánh Isave. Ta hãy xin cho được lòng yêu người.', id: 12 },
    { thu: 'Thứ ba thì ngắm: ', ngam: 'Đức Bà sinh Đức Chúa Giêsu trong hang đá. Ta hãy xin cho được lòng khó khăn.', id: 13 },
    { thu: 'Thứ tư thì ngắm: ', ngam: 'Đức Bà dâng Đức Chúa Giêsu trong đền Thánh. Ta hãy xin cho được vâng lời chịu lụy.', id: 14 },
    { thu: 'Thứ năm thì ngắm: ', ngam: 'Đức Bà tìm được Đức Chúa Giêsu trong Đền thánh. Ta hãy xin cho đươc giữ nghĩa cùng Chúa luôn.', id: 15 }
  ];
});
