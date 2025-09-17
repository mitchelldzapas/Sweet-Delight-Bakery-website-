document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Get input values
            const name = contactForm.elements[0].value; 
            const email = contactForm.elements[1].value; 
            const phonenumber = contactForm.elements[2].value; 
            const message = contactForm.elements[3].value; 

            // Send the email using EmailJS
            emailjs.send("service_qsqrt6d", "template_h8b2hra", {
                name: name,
                email: email,
                phonenumber: phonenumber,
                message: message
            })
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                contactForm.reset(); // Reset the form
            }, function(error) {
                console.log('FAILED...', error);
                alert('Error sending message. Please try again later.');
            });
        });
    }
});
