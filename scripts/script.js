// script.js
// JavaScript for form handling and interactivity

// Example function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload
    const formData = new FormData(event.target);
    console.log('Form Data:', Object.fromEntries(formData));
}

// Example function to initialize form
function initializeForm() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
}

// Initialize form handling on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initializeForm);