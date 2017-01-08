// Creates a new module called 'calculatorApp'
angular.module('calculatorApp', []);

(function(){
// Registers a controller to our module 'calculatorApp'.
angular
	.module('calculatorApp')
	.controller('CalculatorController', CalculatorController);

	CalculatorController.$inject = []
	function CalculatorController() {
	    vm = this;	   	
		vm.z = 0;
		vm.sum = function() {
			vm.z = vm.x + vm.y;
		};
		
	};
		
})();

/* Test Code */
describe('calculator', function () {
    
      beforeEach(module('calculatorApp'));
      var $controller;
      beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
      }));
      describe('sum', function () {
        it('1 + 1 should equal 2', function () {
          var $scope = {};
          var controller = $controller('CalculatorController', { $scope: $scope });
          controller.x = 1;
          controller.y = 2;
          controller.sum();
          expect(controller.z).toBe(3);
        }); 
      });
    });