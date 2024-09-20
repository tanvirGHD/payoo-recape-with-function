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
    
    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }

    //beginner level to verify .do nt try it at this serious website
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;
        

        //add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. Balance: ${newBalance}`;
        console.log(p);
        

        //should be a common function
        document.getElementById('transaction-container').appendChild(p)


    }
    else{
        alert('Failed to add the money')
    }
    


})
