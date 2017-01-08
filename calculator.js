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