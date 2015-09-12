angular.module('myApp', ['CalculatorService'])
	   .controller('CalculatorController', CalculatorController)

function CalculatorController (Calculator) {
	var vm = this;
	vm.findSquare = function () {
		vm.answer = Calculator.toSquare(vm.number);
	};
}
