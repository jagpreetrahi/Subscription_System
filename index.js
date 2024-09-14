document.getElementById('login-form').addEventListener('submit' , function(event){
    event.preventDefault() // prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username && password)
    {
        window.location.href = 'dashboard.html';
    }

    else{
        alert('Please enter both username and password.');
    }

})

document.getElementById('to-register').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.flip-container').classList.add('flip');
});

document.getElementById('to-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.flip-container').classList.remove('flip');
});