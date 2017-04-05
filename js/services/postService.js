angular.module('contactForm').factory('formActions',['$http',function($http){
    return{
        submit: function(name,email,msg){
            return $http.post('submitQuery.php',{name:name,email:email,message:msg})
        }
    }
}])