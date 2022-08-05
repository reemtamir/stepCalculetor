'use-strict';
// 1. create two inputs for numbers and a third input for a "step" number
// 2. with each click of a button show the user all the numbers starting with the "from" input untill the "to" input with each step being a jump according to "step" input (edited)
// [11:43 AM]
// ==============
const div = document.createElement('div');
div.classList.add('row', 'm-auto', 'text-center');
document.body.appendChild(div);
const firstNumLabel = document.createElement('label');
firstNumLabel.innerHTML = 'First number';
const firstNumInput = document.createElement('input');
firstNumInput.classList.add('w-25', 'm-auto');
firstNumInput.type = 'number';

const secondNumLabel = document.createElement('label');
secondNumLabel.innerHTML = 'Second number';
const secondNumInput = document.createElement('input');
secondNumInput.classList.add('w-25', 'm-auto');
secondNumInput.type = 'number';

const stepLabel = document.createElement('label');
stepLabel.innerHTML = 'Step';
const stepInput = document.createElement('input');
stepInput.classList.add('w-25', 'm-auto');
stepInput.type = 'number';

const resultLabel = document.createElement('label');
resultLabel.innerHTML = 'Result';

const resultInput = document.createElement('input');
resultInput.type = 'text';
resultInput.classList.add('no-outline', 'text-center', 'fs-4');

const button = document.createElement('button');
button.classList.add('btn', 'btn-primary', 'mt-4', 'w-25', 'm-auto');
button.innerHTML = 'Show numbers in steps';
button.setAttribute('onclick', 'showNums()');
div.append(
  ...[
    firstNumLabel,
    firstNumInput,
    secondNumLabel,
    secondNumInput,
    stepLabel,
    stepInput,
    resultLabel,
    resultInput,
    button,
  ]
);

function showNums() {
  let numbers = [];
  let firstIndex = Number(firstNumInput.value);
  let lastIndex = Number(secondNumInput.value);
  let jump = Number(stepInput.value);

  for (let i = firstIndex; i <= lastIndex; i += jump) {
    numbers.push(i);
  }
  resultInput.placeholder = numbers;
}
