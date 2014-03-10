App.controller('Cube', ['$scope', function ($scope) {
    $scope.cube_count = [0];
    $scope.addCube = function() {
        $scope.cube_count.push($scope.cube_count.length);
    }
}
]);