(function () {

  angular.module('firstClassMobile')
    .directive('troopView', troopView);

  troopView.$inject = [];

  function troopView () {

    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'components/troop-view/troop-view.template.html',
      controller: 'TroopViewController',
      controllerAs: 'vm'
    };

  }

})();
