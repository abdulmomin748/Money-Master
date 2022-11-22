document.getElementById('btn-calculate').addEventListener('click', function(){
    
    let totalExpensesNumber = expensesFieldInput();
    console.log(totalExpensesNumber);
    
    let afterExpensesBalance = balance();
    let msExpensesField1 = getInputValue('ms-expenses-field1');
    let msExpensesField2 = getInputValue('ms-expenses-field2');
    let msExpensesField3 = getInputValue('ms-expenses-field3');

    let incomeField = getInputValue('ms-income-field');
    if (incomeField < 0 || isNaN(incomeField)) {
        if (incomeField < 0) {
            alert('Enter Your Valid Income');
            setElementValue('total-expenses-balance', '0');
            setElementValue('balance', '0');
            return;
        }
        else if (isNaN(incomeField)) {
            alert('Fill Your income Input First');
            setElementValue('total-expenses-balance', '0');
            setElementValue('balance', '0');
            return;
        }
    }
    else if (totalExpensesNumber > incomeField) {
        alert('Your expenses are more than your income');
        setElementValue('total-expenses-balance', '0');
        setElementValue('balance', '0');
        return;
    }
    else if (totalExpensesNumber > incomeField || isNaN(msExpensesField1) || isNaN(msExpensesField2) || isNaN(msExpensesField3)) {
        alert('Enter Your Expenses Number');
        setElementValue('total-expenses-balance', '0');
        setElementValue('balance', '0');
        return;
    }
    else if( msExpensesField1 < 0|| msExpensesField2 < 0 || msExpensesField3 < 0 || isNaN(incomeField)|| incomeField < 0 ) {
        alert('enter your valid number');
        return;
    } 
    setElementValue('total-expenses-balance',totalExpensesNumber);
    setElementValue('balance', afterExpensesBalance);
});
document.getElementById('btn-save').addEventListener('click', function(){
    let incomeField = getInputValue('ms-income-field');
    let saveInputField = getInputValue('save-input-field');
    let save = saveBalance(incomeField, saveInputField);
    console.log(saveInputField);
    if (incomeField.value < saveInputField) {
        alert('Not Allow Save amount is more than main balance')
    }
    else if (100 < saveInputField ||  isNaN(saveInputField) || saveInputField < 0) {
        alert('Wrong discount number')
        setElementValue('saving-amount', '0');  
        setElementValue('remaining-balance', '0');
        return;
    }
    setElementValue('saving-amount', save);
    let afterExpensesBalance = balance();
    let remaining = afterExpensesBalance - save;
    setElementValue('remaining-balance', remaining.toFixed(2));
})