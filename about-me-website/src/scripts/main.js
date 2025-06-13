// This file contains JavaScript code for the "About Me" website.
// You can add interactive functionality or dynamic content updates here.

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-content');
    const contentSection = document.getElementById('content-section');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            contentSection.classList.toggle('hidden');
            toggleButton.textContent = contentSection.classList.contains('hidden') ? 'Show More' : 'Show Less';
        });
    }
});