function getInputValue(className){
    const inputField = document.getElementById(className);
    const getValue = inputField.value 
    inputField.value=''
    return getValue;  
}
// function getBalance(){
//      // income field
//      const income =getInputValue('monthly-income');
//      //    Expenses field
//      // food cost
//      const foodCost = getInputValue('food-cost');
//      // rent cost
//      const rentCost = getInputValue('rent-cost');
//      // clothes cost 
//      const clothesCost = getInputValue('clothes-cost');
//      // total expenses
//      const totalExpenses = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
//          console.log(totalExpenses)
     
//      // update total expenses
//         const expenses = document.getElementById('total-expenses');
//         expenses.innerText =totalExpenses;
//      // //    update blance
//      const updateBalance = parseFloat(income) - totalExpenses;
//     //   const balance = document.getElementById('balance');
//     //   balance.innerText=updateBalance  
//     //   return updateBalance 
// }
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

// document.getElementById('save-btn').addEventListener('click', function(){
// //   const save=  getInputValue('save')
// //   console.log(save)
//   const balance = getBalance()
//   console.log(balance)

// })
 