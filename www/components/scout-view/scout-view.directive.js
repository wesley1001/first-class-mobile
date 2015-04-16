(function () {

  angular.module('firstClassMobile')
    .directive('scoutView', scoutView);

  scoutView.$inject = [];

  function scoutView () {

    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'components/scout-view/scout-view.template.html',
      controller: 'ScoutViewController',
      controllerAs: 'vm'
    };

  }

})();
