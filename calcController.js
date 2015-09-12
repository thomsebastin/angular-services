angular.module('myApp', ['CalculatorService'])
	   .controller('CalculatorController', Square)

function Square (Calculator) {
	var vm = this;
	vm.findSquare = function () {
		vm.answer = Calculator.square(vm.number);
	};
}
