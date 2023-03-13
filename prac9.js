
// slider auto logic
var counter =0;
setInterval(function(){
    document.getElementById('radio' + (counter%3+1)).checked = true;
    counter++;
}, 4000);

var x = 0
function loginform(){
    if(x == 1){
      document.getElementById("inlog").style.display = "none";
      x=0;
    }
    else{
      document.getElementById("inlog").style.display = "block";
      x=1;
    }
}
// angular 
var app = angular.module('app', [])
app.controller('PostsCtrl', function ($scope) {
    $scope.card1 = false;
    $scope.card2 = false;
    $scope.card3 = false;
    $scope.card4 = false;
    $scope.card5 = false;
    $scope.card1show = function(){
        $scope.card1 = !$scope.card1;
    }
    $scope.card2show = function(){
        $scope.card2 = !$scope.card2;
    }
    $scope.card3show = function(){
        $scope.card3 = !$scope.card3;
    }
    $scope.card4show = function(){
        $scope.card4 = !$scope.card4;
    }
    $scope.card5show = function(){
        $scope.card5 = !$scope.card5;
    }
    $scope.notlogged  = true;
    $scope.login = function(){
        for(u in $scope.users){
            console.log($scope.users[u].username);
            if($scope.users[u].username == $scope.username && $scope.users[u].password==$scope.password){
                $scope.notlogged = false;
                return
            }
        }
        $scope.message = "incorrect password or username"
    }
    $scope.logout = function(){
        $scope.notlogged = true;
        $scope.username = null;
        $scope.password = null;
        $scope.message = null;
    }
    $scope.register = function(){
        for(u in $scope.users){
            if($scope.users[u].username == $scope.username){
                $scope.message = "username already taken"
                return
            }
        }
        if($scope.username == " " || $scope.username== null){
            $scope.message = "username cannot be empty"
            return
        }
        if($scope.password == " " || $scope.password== null){
            $scope.message = "password cannot be empty"
            return
        }
        $scope.users.unshift({
            username:$scope.username,
            password:$scope.password
        })
        $scope.username = null;
        $scope.password = null;
        $scope.message = "registered"
    }
    $scope.users = [
        {
            username:'Nisarg',
            password:'Hello2'
        }
    ]
    $scope.m = false;
    $scope.messageshow = function(){
       $scope.m = true;
       $scope.email = null;
       $scope.message = null;
       $scope.occation = null;
       $scope.date = null;
    }
})
