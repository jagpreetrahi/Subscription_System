


// let switchPage = document.getElementsByClassName('container').addEventListener('submit' , function(event){
//     event.preventDefault() // prevent default form submission

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

    

//     if(username  && password )
//     {
//         window.location.href = 'dashboard.html';
//     }

//     else{
//         alert('Invalid email & password');
//     }

// });

  // Handle login
  document.addEventListener('DOMContentLoaded' ,function(){


    let front =  document.querySelector('.containerFront');
    let back =  document.querySelector('.containerBack');
    
    let newUser = document.querySelector('.newUser');
    let existingUser = document.querySelector('.existingUser');
    
    newUser.addEventListener('click' , function(){
        front.style.zIndex = "1"
        back.style.zIndex = "2"
        front.style.transform = "rotateY(180deg)"
        back.style.transform = "rotateY(0deg)"
    })
    
    existingUser.addEventListener('click' , function(){
        back.style.zIndex = "1"
        front.style.zIndex = "2"
        back.style.transform = "rotateY(180deg)"
        front.style.transform = "rotateY(0deg)"
    })
    
     const loginForm = document.querySelector('.containerFront form');
     const registerForm = document.querySelector('.containerBack form');
   
     // Simulate a user login by checking if inputs are filled (for demo purposes)
     loginForm.addEventListener('submit', function(e) {
         e.preventDefault(); // Prevent form submission
  
          const username = document.querySelector('.input').value;
          const password = document.querySelector('.input1').value;
  
          if (username && password) {
              // Simple check for demo purposes, can be replaced by an actual validation process.
              console.log('Login successful');
              window.location.href = 'dashboard.html'; // Redirect to dashboard
           } else {
                alert('Please enter both username and password.');
            }
    });
  
    // Handle registration
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission
  
        const name = document.querySelector('.containerBack input[type="text"]').value;
        const email = document.querySelector('.containerBack input[type="email"]').value;
        const password = document.querySelector('.containerBack input[type="password"]').value;
  
        if (name && email && password) {
            // Simple check for demo purposes, can be replaced by an actual registration process.
            console.log('Registration successful');
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        } else {
            alert('Please fill in all fields.');
        }
    });
  });
 

