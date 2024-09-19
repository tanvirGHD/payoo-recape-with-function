document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    console.log('add money button click');

    // getInputFieldValueById();
    // const addMoney = getInputFieldValueById;
    // console.log('Add Money value', addMoney);
    
    // const addMoney = document.getElementById('input-add-money').value;
    // const addMoneyNumbers = parseFloat(addMoney);
    
    
    
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number')
    console.log('add money with parameter',addMoney,pinNumber);
    


})
