angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('MainCtrl', function($scope) {
  $scope.toc = [
    { title: 'Cách Lần Hạt Mân Côi', link: 'catlanchuoi', id: 1 },
    { title: 'Mầu Nhiệm năm Sự Vui', link: 'namsu/vui', id: 2 },
    { title: 'Mầu Nhiệm năm Sự Thương', link: 'namsu/thuong', id: 3 },
    { title: 'Mầu Nhiệm năm Sự Mừng', link: 'namsu/mung', id: 4 },
    { title: 'Mầu Nhiệm năm Sự Sáng', link: 'namsu/sang', id: 5 }
  ];
})

.controller('CatLanChuoiCtrl', function($scope, $stateParams) {
})


.controller('NamSuCtrl', function($scope, $stateParams) {

  $scope.title = $stateParams.namsu;
  console.log($scope.title);

if ($stateParams.namsu == "vui"){
  $scope.title = "Vui";
  $scope.su = [
    { thu: 'Thứ nhất thì ngắm: ',
      ngam: 'Thiên thần truyền tin cho Đức Bà chịu thai. Ta hãy xin cho được ở khiêm nhường.',
      icon: 'vui1_icon.jpg',
      id: 11 },
    { thu: 'Thứ hai thì ngắm: ',
      ngam: 'Đức Đà đi viếng Bà Thánh Isave. Ta hãy xin cho được lòng yêu người.',
      icon: 'vui2_icon.jpg',
      id: 12 },
    { thu: 'Thứ ba thì ngắm: ',
      ngam: 'Đức Bà sinh Đức Chúa Giêsu trong hang đá. Ta hãy xin cho được lòng khó khăn.',
      icon: 'vui3_icon.jpg',
      id: 13 },
    { thu: 'Thứ tư thì ngắm: ',
      ngam: 'Đức Bà dâng Đức Chúa Giêsu trong đền Thánh. Ta hãy xin cho được vâng lời chịu lụy.',
      icon: 'vui4_icon.jpg',
      id: 14 },
    { thu: 'Thứ năm thì ngắm: ',
      ngam: 'Đức Bà tìm được Đức Chúa Giêsu trong Đền thánh. Ta hãy xin cho đươc giữ nghĩa cùng Chúa luôn.',
      icon: 'vui5_icon.jpg',
      id: 15 }
  ];

} else if ($stateParams.namsu == "thuong") {
  $scope.title = "Thương";
  $scope.su = [
    { thu: 'Thứ nhất thì ngắm: ', ngam: 'Đức Chúa Giêsu lo buồn đổ mồ hôi máu. Ta hãy xin cho được ăn năn tội nên.', icon: 'thuong1_icon.jpg', id: 21 },
    { thu: 'Thứ hai thì ngắm: ', ngam: 'Đức Chúa Giêsu chịu đánh đòn. Ta hãy xin cho được hãm mình chịu khó bằng lòng.', icon: 'thuong2_icon.jpg', id: 22 },
    { thu: 'Thứ ba thì ngắm: ', ngam: 'Đức Chúa Giêsu chịu đội mão gai. Ta hãy xin cho được chịu mọi sự sỉ nhục bằng lòng.', icon: 'thuong3_icon.jpg', id: 23 },
    { thu: 'Thứ tư thì ngắm: ', ngam: 'Đức Chúa Giêsu vác Thánh Giá. Ta hãy xin cho được vác Thánh Giá theo chân Chúa.', icon: 'thuong4_icon.jpg', id: 24 },
    { thu: 'Thứ năm thì ngắm: ', ngam: 'Đức Chúa Giêsu chịu chết trên cây Thánh Giá. Ta hãy xin đóng đanh tính xác thịt vào Thánh Giá Chúa.', icon: 'thuong5_icon.jpg', id: 25 }
  ];

} else if ($stateParams.namsu == "mung") {
  $scope.title = "Mừng";
  $scope.su = [
    { thu: 'Thứ nhất thì ngắm: ', ngam: 'Đức Chúa Giêsu sống lại. Ta hãy xin cho được sống lại thật về phần linh hồn.', icon: 'mung1_icon.jpg', id: 31 },
    { thu: 'Thứ hai thì ngắm: ', ngam: 'Đức Chúa Giêsu lên trời. Ta hãy xin cho được ái mộ những sự trên trời.', icon: 'mung2_icon.jpg', id: 32 },
    { thu: 'Thứ ba thì ngắm: ', ngam: 'Đức Chúa Thánh Thần hiện xuống. Ta hãy xin cho được lòng đầy dẫy mọi ơn Đức Chúa Thánh Thần.', icon: 'mung3_icon.jpg', id: 33 },
    { thu: 'Thứ tư thì ngắm: ', ngam: 'Đức Chúa Trời cho Đức Bà lên trời. Ta hãy xin ơn chết lành trong tay Đức Mẹ.', icon: 'mung4_icon.jpg', id: 34 },
    { thu: 'Thứ năm thì ngắm: ', ngam: 'Đức Chúa Trời thưởng Đức Mẹ trên trời. Ta hãy xin Đức Mẹ phù hộ cho ta được thưởng cùng Đức Mẹ trên nước thiên đàng.', icon: 'mung5_icon.jpg', id: 35 }
  ];
} else {
  $scope.title = "Sáng";
  $scope.su = [
    { thu: 'Thứ nhất thì ngắm: ', ngam: 'Đức Chúa Giêsu chịu phép Rửa tại sông Giođan. Ta hãy xin cho được sống xứng đáng là con cái Chúa.', icon: 'sang1_icon.jpg', id: 41 },
    { thu: 'Thứ hai thì ngắm: ', ngam: 'Đức Chúa Giêsu dự tiệc cưới Cana. Ta hãy xin cho được vững tin vào quyền năng của Ngài.', icon: 'sang2_icon.jpg', id: 42 },
    { thu: 'Thứ ba thì ngắm: ', ngam: 'Đức Chúa Giêsu rao giảng Nước Trời và kêu gọi sám hối. Ta hãy xin cho được hoán cải và đón nhận Tin Mừng.', icon: 'sang3_icon.jpg', id: 43 },
    { thu: 'Thứ tư thì ngắm: ', ngam: 'Đức Chúa Giêsu biến hình trên núi. Ta hãy xin cho được lắng nghe và thực hành lời Chúa.', icon: 'sang4_icon.jpg', id: 44 },
    { thu: 'Thứ năm thì ngắm: ', ngam: 'Đức Chúa Giêsu lập bí tích Thánh Thể. Ta hãy xin cho được năng kết hiệp cùng Chúa Giêsu Thánh Thể.', icon: 'sang5_icon.jpg', id: 45 }
  ];
}
});
