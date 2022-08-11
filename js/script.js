function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2; 
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculate(num1, num2, operatorParam) {
  if (operatorParam === "add") {
    return add(num1, num2);
  } else if (operatorParam === "subtract") {
    return subtract(num1, num2);
  } else if (operatorParam === "multiply") {
    return multiply(num1, num2);
  } else if (operatorParam === "divide") {
    return divide(num1, num2);
  }
}

function handleCalculation(event) {
  event.preventDefault();
  const number1 = parseInt(document.querySelector("input#input2").value);
  const number2 = parseInt(document.querySelector("input#input2").value);
  const operator = document.querySelector("input[name='operator']:checked").value;
    let result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }

function handleSubmission(event) {
   event.preventDefault();
   const number1 = parseInt(document.querySelector("input1#input2").value);
   const number2 = parseInt(document.querySelector("input1#input2").value);
   const operator = document.querySelector("input[name='operator']:checked").value;

   let result = calculate(number1, number2, operator);
}

    document.getElementById("output").innerText = result; 
}

window.addEventListener("load", function() {
  const form = document.getElementById("calc");
  form.addEventListener("submit", handleCalculation);
});