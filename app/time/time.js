var app = angular.module('leApp');

app.directive('theTime', function() {

    return {
        restrict: 'E',
        template: 'The current date & time is: {{time  | date:"MM/dd/yyyy @ h:mma"}}',
        link: function($scope, element, attr) {

            $scope.time = Date.now();
        }
    };

});
