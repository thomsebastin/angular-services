angular.module('CalculatorService', [])
		.service('Calculator', Calculator)

function Calculator() {
	var vm = this;
	vm.toSquare = toSquare;

	function toSquare (a) {
		return a * a;
	}
}