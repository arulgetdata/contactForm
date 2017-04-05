angular.module('contactForm').controller('mainController',['$scope','formActions' ,function($scope,formActions){

$scope.submitForm = function(){

        formActions.submit($scope.query.name,$scope.query.email,$scope.query.msg).then(function(data){


        })
}

}]);

