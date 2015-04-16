(function () {

  angular.module('firstClassMobile')
    .controller('TroopViewController', TroopViewController);

  TroopViewController.$inject = [];

  function TroopViewController () {

    var vm = this;

    vm.title = 'TroopViewController';

    activate();

    function activate () {
      
    }

  }

})();
