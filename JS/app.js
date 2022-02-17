function getInputValue(className){
    const inputField = document.getElementById(className);
    const getValue = inputField.value;
    // inputField.value='';
    return getValue;  
}
document.getElementById('calc-btn').addEventListener('click', function(){
    if(getInputValue('monthly-income')<0 || getInputValue('food-cost')<0 || getInputValue('rent-cost')<0 || getInputValue('clothes-cost')<0){
        alert('Please enter a positive amount')
    }
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
let updateBalance = parseFloat(income) - totalExpenses;
  if(isNaN(totalExpenses) ){
      
      updateBalance="0"
      totalExpenses="0"
  }
  if(updateBalance <0){
    alert('You have not enough money')
  }

// update total expenses
   const expenses = document.getElementById('total-expenses');
   expenses.innerText =totalExpenses;
// //    update blance

const balance = document.getElementById('balance');
balance.innerText=updateBalance; 
 
})

document.getElementById('save-btn').addEventListener('click', function(){
    const balance = document.getElementById('balance');
    const newBalance=parseFloat(balance.innerText)
// error part
    if(newBalance<0){
  alert('You have not enough money')
    }
    // main part
    const saveInput = getInputValue('save-input')
    const income = getInputValue('monthly-income')
    const totalSave = parseFloat(income) * parseFloat(saveInput) /100
     const priviousBalance = document.getElementById('balance').innerText
     const remainingBalance = parseFloat(priviousBalance) - totalSave
    //  error part
     if(isNaN(remainingBalance)){
        
         remainingBalance="0"
         totalSave="0"
      
     }
     if( remainingBalance<0){
        alert('You have not enough money')
     }
    //  main part
     document.getElementById('remaining-balance').innerText=remainingBalance
     document.getElementById('saving-amount').innerText =totalSave
})
 