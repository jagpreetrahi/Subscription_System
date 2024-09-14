document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animated-text');
    const text = textElement.textContent;
    textElement.textContent = ''; // Clear the text content

    // Create a span element for each letter and append it to the textElement
    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.className = 'letter';
        span.style.animationDelay = `${index * 0.1}s`; // Delay for each letter
        textElement.appendChild(span);
    });
});

