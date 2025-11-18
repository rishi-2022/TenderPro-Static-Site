// 1. Sticky Navigation Functionality
// Get the navigation bar element
const navbar = document.querySelector('nav');
// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Function to add the 'sticky' class when scrolling
function handleScroll() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Attach the function to the window's scroll event
window.onscroll = function() {
  handleScroll();
};


// 2. Custom Form Submission Success Message
// Select the form and listen for the submit event
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function(e) {
        // Prevent the default form submission (which reloads the page)
        e.preventDefault(); 
        
        // This is where the form data would be sent to the server/Forms-pree via fetch() in a real dynamic site.
        // For our static setup, we just simulate success after a delay.
        
        // Hide the form and show a success message
        form.style.display = 'none';

        const successMessage = document.createElement('p');
        successMessage.innerHTML = '<strong>Thank You!</strong> Your demo request has been sent successfully. We will contact you shortly.';
        
        // Find the container to append the message
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(successMessage);
            successMessage.style.backgroundColor = '#d4edda'; // Light green background for success
            successMessage.style.color = '#155724'; // Dark green text
            successMessage.style.padding = '20px';
            successMessage.style.borderRadius = '8px';
            successMessage.style.boxShadow = 'none'; 
        }

    });
}