// Toggle the menu visibility
// Toggle the menu visibility
function toggleMenu() {
    const menu = document.getElementById("menuOptions");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Show the selected page
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    const activePage = document.getElementById(pageId + "Page");
    if (activePage) {
        activePage.classList.add('active');
    }

    // Hide the menu after clicking an item
    document.getElementById("menuOptions").style.display = "none";
}

// Initialize EmailJS with your public key
emailjs.init('klYFLHcUlk_bv2N_p');  // Use your actual public key

// Handle form submission for the Hire Us section in About Page
document.getElementById('hireForm')?.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from actually submitting

    // Get form data
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const userResume = document.getElementById('resume').files[0].name;

    // Send email using EmailJS
    emailjs.send('service_di6wpzh', 'template_6mg7hzg', {
        user_name: userName,   // Dynamic user name
        user_email: userEmail, // Dynamic user email
        user_resume: userResume,  // Dynamic resume file name
        company_name: 'UBISOFT' // Static company name
    })
    .then(response => {
        console.log('Email sent successfully:', response);
        alert('Your message has been sent!');
    })
    .catch(error => {
        console.error('Error sending email:', error);
        alert('There was an error sending your message. Please try again.');
    });

    // Show confirmation message after form submission
    const confirmationMessage = document.getElementById('confirmationMessage');
    if (confirmationMessage) {
        confirmationMessage.style.display = 'block';
    }

    // Clear form fields after submission
    document.getElementById('hireForm').reset();
});
