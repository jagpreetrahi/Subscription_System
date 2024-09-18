document.addEventListener('DOMContentLoaded' , function (){

    function upgradePlan() {
        document.getElementById('upgrade-form').style.display = 'block';
    }
    
    // Function to hide the upgrade form
    function hideUpgradeForm() {
        document.getElementById('upgrade-form').style.display = 'none';

    }

    function handleUpgradeSubmit(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        // Here you can add code to handle the form submission (e.g., sending data to a server)
        // Hide the form after submission
        hideUpgradeForm();
    }

    window.upgradePlan = upgradePlan;
    window.hideUpgradeForm = hideUpgradeForm;
    window.handleUpgradeSubmit = handleUpgradeSubmit;
    
});



  