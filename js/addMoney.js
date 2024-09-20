document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    // console.log('add money button click');

    // getInputFieldValueById();
    // const addMoney = getInputFieldValueById;
    // console.log('Add Money value', addMoney);
    
    // const addMoney = document.getElementById('input-add-money').value;
    // const addMoneyNumbers = parseFloat(addMoney);
    
    
    
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    

    //beginner level to verify .do nt try it at this serious website
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;
        
    }
    else{
        alert('Failed to add the money')
    }
    


})
