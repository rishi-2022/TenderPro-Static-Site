// 1. Sticky Navigation Functionality
const navbar = document.querySelector('nav');
const sticky = navbar.offsetTop;

function handleScroll() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = handleScroll;

// 2. Custom Form Submission Success Message
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

        // Hide the form and show a success message (Simulated success)
        form.style.display = 'none';

        const successMessage = document.createElement('p');
        successMessage.innerHTML = '<strong>Thank You!</strong> Your demo request has been sent successfully. We will contact you shortly.';

        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(successMessage);
            successMessage.style.backgroundColor = '#d4edda'; 
            successMessage.style.color = '#155724'; 
            successMessage.style.padding = '20px';
            successMessage.style.borderRadius = '8px';
            successMessage.style.boxShadow = 'none'; 
        }

    });
}

// 3. Scroll Reveal (Movable/Amazing Elements)
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1 /* Element appears when 10% is visible */
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      /* Add the visible class to trigger CSS animation */
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); /* Stop observing after animation */
    }
  });
}, observerOptions);

/* Target all elements that have the data-animate attribute */
document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});