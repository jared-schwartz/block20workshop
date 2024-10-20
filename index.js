const addNumberBtn = document.getElementById("add-num-btn");
const numberInput = document.getElementById("number-input");
const numberBankOutput = document.querySelector("#numberBank > output");
const sortOneBtn = document.getElementById("sortOneBtn");
const sortAllBtn = document.getElementById("sortAllBtn");
const oddsOutput = document.querySelector("#odds > output");
const evensOutput = document.querySelector("#evens > output");

let numberBank = [];

addNumberBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const number = numberInput.value;
    if (!isNaN(number)) {  
        numberBank.push(number);  
        numberBankOutput.textContent = numberBank.join(", ");  
        numberInput.value = "";  
    }
});

sortOneBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    const lastNumber = numberBank.pop();
    if (lastNumber !== undefined) {
    sortNumber(lastNumber);
    updateNumberBankDisplay();
    }
});

sortAllBtn.addEventListener("click", (event) => {
    event.preventDefault();
    oddsOutput.textContent = "";
    evensOutput.textContent = "";
    while (numberBank.length > 0) {
        const number = numberBank.pop();  
        sortNumber(number);  
    }
    updateNumberBankDisplay();
});

function updateNumberBankDisplay() {
    numberBankOutput.textContent = numberBank.join(", ");
};

function sortNumber(number) {
    if (number % 2 === 0) {
        evensOutput.textContent += number + " ";  
    } else {
        oddsOutput.textContent += number + " ";  
    }
};


