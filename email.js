// Initialize EmailJS with your User ID
emailjs.init('NMXXpdxVHVp_VyEyC');

// Function to show Bootstrap alert
function showAlert(message, type) {
    const alertContainer = document.getElementById('alert-container');
    if (alertContainer) {
        // Remove any existing alerts
        alertContainer.innerHTML = '';
        // Create new alert
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.role = 'alert';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        alertContainer.appendChild(alertDiv);
        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            alertDiv.classList.remove('show');
            alertDiv.classList.add('fade');
            setTimeout(() => alertDiv.remove(), 200);
        }, 5000);
    }
}

// Contact form submission with EmailJS
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Get current date and time in a formatted string
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
                showAlert('Your message has been sent successfully! Thank you for reaching out.', 'success');
                form.reset();
            }, (error) => {
                console.error('EmailJS error:', error);
                showAlert('Failed to send your message. Please try again later or contact me directly at vannoynith12@gmail.com.', 'danger');
            });
        });
    }
});