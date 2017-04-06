angular.module('contactForm').controller('mainController', ['$scope', 'formActions', function ($scope, formActions) {

        $scope.submitForm = function () {

                formActions.submit($scope.query.name, $scope.query.email, $scope.query.msg).then(function (data) {

                        if (data.data == "Done") {
                                $scope.formSubmitSuccess = true;
                        } else if(data.data == "Error"){
                                $scope.formSubmitError = true;
                        }


                })
        }

}]);

