angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway', gender:'Female', age:'20', height:'short'},
        {name:'Carl',country:'Sweden', gender:'Male', age:'23', height:'tall'},
        {name:'Margareth',country:'England', gender:'Female', age:'22', height:'short'},
        {name:'Hege',country:'Norway', gender:'Male', age:'14', height:'short'},
        {name:'Joe',country:'Denmark', gender:'Male', age:'45', height:'tall'},
        {name:'Gustav',country:'Sweden', gender:'Male', age:'530', height:'tall'},
        {name:'Birgit',country:'Denmark', gender:'Female', age:'20', height:'short'},
        {name:'Mary',country:'England', gender:'Female', age:'65', height:'tall'},
        {name:'Kai',country:'Norway', gender:'Male', age:'33', height:'short'}
        ];
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});