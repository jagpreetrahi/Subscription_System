function toggleAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    
    // Toggle the display of the answer
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.textContent = '+';
    } else {
        // Hide other answers
        document.querySelectorAll('.faq-answer').forEach((el) => {
            el.style.display = 'none';
        });
        document.querySelectorAll('.faq-icon').forEach((el) => {
            el.textContent = '+';
        });

        // Show the selected answer
        answer.style.display = 'block';
        icon.textContent = '-';
    }
}
