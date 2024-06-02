// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    alert('Thank you for your message! We will get back to you soon.');
    // You can add code here to submit the form data to a backend server
});