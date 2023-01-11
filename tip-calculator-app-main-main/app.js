let bill = document.querySelector("#bill");
let tipCustom = document.querySelector("#custom");
let numberOfPeople = document.querySelector("#people");
let tipOutput = document.querySelector("#tip-output");
let totalOutput = document.querySelector("#total-output");
let tipBtns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let errorMsg = document.querySelector(".error-msg")


let billValue = 0;
let tipValue = 0.15;
let peopleValue = 1;


bill.addEventListener('input', setBillValue);
tipBtns.forEach(btn => {
    btn.addEventListener('click', handleClick);
});
tipCustom.addEventListener('input', setTipCustomValue);
numberOfPeople.addEventListener('input', setPeopleValue);
resetBtn.addEventListener('click', reset);


function setBillValue() {

    billValue = parseFloat(bill.value);

    calculateTip();
}

function handleClick(event) {
    tipBtns.forEach(btn => {
        btn.classList.remove('active-btn');

        if (event.target.innerHTML == btn.innerHTML) {
            btn.classList.add('active-btn');
            tipValue = parseFloat(btn.innerHTML) / 100;
        }
    });

    tipCustom.value = '';
    calculateTip();
}

function setTipCustomValue() {

    tipValue = parseFloat(tipCustom.value / 100);

    tipBtns.forEach(btn => {
        btn.classList.remove('active-btn');
    })
    if (tipCustom.value !== '') {
        calculateTip();
    }
    calculateTip();
}

function setPeopleValue() {
    peopleValue = parseFloat(people.value);
    if (peopleValue <= 0) {
        errorMsg.classList.add('sh-error-msg');
        numberOfPeople.classList.add('error-outline');
        setTimeout(function() {
            errorMsg.classList.remove('sh-error-msg');
            numberOfPeople.classList.remove('error-outline');
            people.value = 1;
        }, 1000)

    }
    calculateTip();
}

function calculateTip() {
    if (peopleValue >= 1) {
        let tipAmount = billValue * tipValue / peopleValue;
        let total = billValue * (tipValue + 1) / peopleValue;
        tipOutput.textContent = '$' + tipAmount.toFixed(2);
        totalOutput.textContent = '$' + total.toFixed(2);

    }
}

function reset() {
    billValue = 0;
    tipValue = 0.15;
    peopleValue = 1;
    bill.value = 0;
    people.value = '1';
    tipOutput.textContent = '$' + '0.00';
    totalOutput.textContent = '$' + '0.00';

}