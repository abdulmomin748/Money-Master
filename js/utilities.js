function expensesFieldInput() {
    let msExpensesField1 = getInputValue('ms-expenses-field1');
    let msExpensesField2 = getInputValue('ms-expenses-field2');
    let msExpensesField3 = getInputValue('ms-expenses-field3');
    const totalExpenses = msExpensesField1 + msExpensesField2 + msExpensesField3;
    const totalExpensesNumber = parseFloat(totalExpenses);
    return totalExpensesNumber;
}
function balance(){
    let totalExpenses = expensesFieldInput();
    let incomeField = getInputValue('ms-income-field');
    const afterExpensesBalance = incomeField - totalExpenses;
    return afterExpensesBalance;
}
function getInputValue(getElementId) {
    let getElement = document.getElementById(getElementId);
    let getElementString = getElement.value;
    let getElementNumber = parseInt(getElementString);
    return getElementNumber;
}
function setElementValue(elementId, value) {
    let setElement = document.getElementById(elementId);
    setElement.innerText = value;
}
function saveBalance(number, discoutPercentage){
    const incomeToSave = number * (discoutPercentage / 100);
    const saveFixedNumbber = incomeToSave.toFixed(2);
    return saveFixedNumbber;
}