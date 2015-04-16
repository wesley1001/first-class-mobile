(function () {

  angular.module('firstClassMobile')
    .controller('ScoutViewController', ScoutViewController);

  ScoutViewController.$inject = [];

  function ScoutViewController () {

    var vm = this;

    vm.title = 'ScoutViewController';

    activate();

    function activate () {
      
    }

  }

})();
