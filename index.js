const addNumberBtn = document.getElementById("add-num-btn");
const numberInput = document.getElementById("number-input");
const numberBank = document.getElementById("numberBank");
const numberBankOutput = document.querySelector("#numberBank > output");

addNumberBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const number = numberInput.value;
    numberBankOutput.textContent = number;
});



