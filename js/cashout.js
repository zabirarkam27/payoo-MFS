document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutPin = document.getElementById('pin-number-cash-out').value;
    if(cashOutPin === "1234"){
        const cashOutAmount = parseFloat(document.getElementById('input-cash-out').value);
        const balanceAmount = parseFloat(document.getElementById('current-value').innerText);

        const newBalance = balanceAmount - cashOutAmount;

        document.getElementById('current-value').innerText = newBalance;

        document.getElementById('input-cash-out').value = '';
        document.getElementById('pin-number-cash-out').value = '';
    }
    else{
        alert('Cash Withdrawal Denied');
    }
})