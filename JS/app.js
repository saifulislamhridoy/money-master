function getInputValue(className){
    const inputField = document.getElementById(className);
    const getValue = inputField.value 
    inputField.value=''
    return getValue;  
}
document.getElementById('calc-btn').addEventListener('click', function(){
    // income field
  const income =getInputValue('monthly-income');
//    Expenses field
// food cost
const foodCost = getInputValue('food-cost');
// rent cost
const rentCost = getInputValue('rent-cost');
// clothes cost 
const clothesCost = getInputValue('clothes-cost');
// total expenses
const totalExpenses = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
  

// update total expenses
   const expenses = document.getElementById('total-expenses');
   expenses.innerText =totalExpenses;
// //    update blance
const updateBalance = parseFloat(income) - totalExpenses;
const balance = document.getElementById('balance');
balance.innerText=updateBalance; 
 
})

document.getElementById('save-btn').addEventListener('click', function(){
    const save1 = getInputValue('save-input')
    const mone23 = document.getElementById('balance').innerText
    const result = parseFloat(mone23) * parseFloat(save1) /100
    console.log(result)
})
 