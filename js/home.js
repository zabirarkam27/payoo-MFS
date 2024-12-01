document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const pinNumber = document.getElementById('pin-number').value;
    
    

    if (pinNumber === '1234') {
        const balance = parseFloat(document.getElementById('current-value').innerText);
        const addedMoney = parseFloat(document.getElementById('money-added-input').value);

        const newBalance = balance + addedMoney;

        document.getElementById('current-value').innerText = newBalance;

    } else {
        alert('Failed to Add Money.');
    }
})
