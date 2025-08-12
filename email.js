// Check if EmailJS SDK is loaded
console.log('Initializing EmailJS');
if (typeof emailjs === 'undefined') {
    console.error('EmailJS SDK not loaded');
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                showAlert('EmailJS SDK failed to load. Please check your internet connection or try again later.', 'danger');
            });
        }
    });
} else {
    emailjs.init('tZ817_bbpHCJa3-V_');

    // Function to show Bootstrap alert
    function showAlert(message, type) {
        console.log(`Showing alert: ${message}, Type: ${type}`);
        const alertContainer = document.getElementById('alert-container');
        if (alertContainer) {
            console.log('Alert container found');
            alertContainer.innerHTML = '';
            const alertDiv = document.createElement('div');
            alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
            alertDiv.role = 'alert';
            alertDiv.innerHTML = `
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            `;
            alertContainer.appendChild(alertDiv);
            setTimeout(() => {
                alertDiv.classList.remove('show');
                alertDiv.classList.add('fade');
                setTimeout(() => alertDiv.remove(), 200);
            }, 5000);
        } else {
            console.error('Alert container not found');
        }
    }

    // Contact form submission with EmailJS
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM loaded, searching for form');
        const form = document.getElementById('contact-form');
        if (form) {
            console.log('Form found, attaching submit event');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log('Form submitted, sending EmailJS request');
                const now = new Date();
                const timeString = now.toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                    timeZone: 'Asia/Bangkok'
                });
                emailjs.send('service_erbe1vh', 'template_s8ym3kk', {
                    name: form.querySelector('#name').value,
                    email: form.querySelector('#email').value,
                    message: form.querySelector('#message').value,
                    time: timeString
                }).then(() => {
                    console.log('EmailJS send successful');
                    showAlert('Your message has been sent successfully! Thank you for reaching out.', 'success');
                    form.reset();
                }, (error) => {
                    console.error('EmailJS error:', error);
                    showAlert('Failed to send your message. Please try again later or contact me directly at vannoynith12@gmail.com.', 'danger');
                });
            });
        } else {
            console.error('Form not found');
        }
    });
}