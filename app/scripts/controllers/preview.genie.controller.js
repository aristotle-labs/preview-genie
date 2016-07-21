angular.module('umbraco').controller('PreviewGenieController', [
    "$scope",
    "$timeout",
    function ($scope, $timeout) {
        $scope.getElementByScopeId = function getElementByScopeId(id) {
            var element;

            $('.ng-scope').each(function () {
                var angularScope = angular.element(this).scope(),
                    angualrScopeId = angularScope.$id;

                if (angualrScopeId === id) {
                    element = this;
                    return false;
                }
            });

            return element;
        };

        $timeout(function () {
            //remove hidden class so the preview button will display
            var previewButtons = $('.umb-button[action="preview(content)"]');
            previewButtons.each(function () { $(this).attr('style', 'display: inline-block;'); });

            //hide the entire property element in the UI
            var element = $scope.getElementByScopeId($scope.$id);
            var $umbProperty = $(element).closest('.umb-property');
            $umbProperty.hide();
        });
    }
]);

