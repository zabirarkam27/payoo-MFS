

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('login button clicked');

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    if(phoneNumber === '5' && pinNumber === '1234'){
        document.getElementById('phone-number').value = '';
        document.getElementById('pin-number').value = '';

        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            // For local environment, navigate to home.html directly
            window.location.href = '../home.html';
        } else {
            // For GitHub Pages, use relative path from the root
            window.location.href = '/home.html';
        }
    }
    else{
        alert('Check your phone Number or pin ')
    }
})
