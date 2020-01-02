let prevInput = '0';
let currInput = '0';
let calculationOperator = '';
let concatOperation = '' ;

const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
	number.addEventListener("click",(event)=>{
		inputNumber(event.target.value);
		//updateScreen(concatOperation);
		updateScreen(currInput);
	})
})

const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearButton = document.querySelector(".all-clear");

clearButton.addEventListener("click",(event)=>{
	clearAll();
	updateScreen(currInput);
})

equalSign.addEventListener("click",(event)=>{
	calculate();
	updateScreen(currInput);
})

operators.forEach((operator)=>{
	operator.addEventListener("click",(event)=>{
		inputOperator(event.target.value);
		//updateScreen(currInput);
	})
})


const calculatorScreen = document.querySelector('.calculator-screen');

const clearAll = () =>{
	prevInput = '0';
	currInput = '0';
	calculationOperator = '';
}

const updateScreen = (number) =>{
	calculatorScreen.value = number;
}

const inputNumber = (number) =>{
	currInput = number;
	//concatOperation += ' '+number;
}

const inputOperator = (operator)=>{
	prevInput = currInput;
	calculationOperator = operator;
	currInput = '0';
	concatOperation += ' '+operator;
	//updateScreen(concatOperation);
}

const calculate = () =>{
	let result = 0;
	switch(calculationOperator){
		case '+':
			result = parseInt(prevInput) + parseInt(currInput);
			break;
		case '-':
			result = parseInt(prevInput) - parseInt(currInput);
			break;
		case '/':
			result = parseInt(prevInput) / parseInt(currInput);
			break;
		case '*':
			result = parseInt(prevInput) * parseInt(currInput);
			break;
		default:
			return;
	}
	currInput = result.toString();
	//concatOperation = currInput;
	calculationOperator = '';
}