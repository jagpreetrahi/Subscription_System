// function openSubscriptionForm(plan) {

//    var planSelect =  document.getElementById('plan').value = plan;

     
     

   

   

//     document.getElementById('subscription-form').style.display = 'block';
// }

// function closeSubscriptionForm() {
//     document.getElementById('subscription-form').style.display = 'none';
// }

// JavaScript code (plans.js)
document.addEventListener('DOMContentLoaded', function() {
    function openSubscriptionForm(plan) {
        // Get the plan select element by its ID
        var planSelect = document.getElementById('plan');

       
             // Clear existing options
        planSelect.innerHTML = '';

        // Create a new option for the selected plan
        var option = document.createElement('option');
        option.value = plan;
        option.text = plan;
        planSelect.appendChild(option);

      


        // Show the subscription form
        document.getElementById('subscription-form').style.display = 'block';
    }

    function closeSubscriptionForm() {
        // Hide the subscription form
        document.getElementById('subscription-form').style.display = 'none';
    }

    // Expose functions to global scope for inline event handlers
    window.openSubscriptionForm = openSubscriptionForm;
    window.closeSubscriptionForm = closeSubscriptionForm;
});

