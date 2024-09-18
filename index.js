document.getElementById('login-form').addEventListener('submit' , function(event){
    event.preventDefault() // prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    

    if(username  && password )
    {
        window.location.href = 'dashboard.html';
    }

    else{
        alert('Invalid email & password');
    }

})

