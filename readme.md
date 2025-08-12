Nith Vannoy's Portfolio Website
Overview
This is a personal portfolio website developed by Nith Vannoy, a Bachelor’s degree student in Information Technology at the National University of Management, Cambodia. The website showcases my education, work experience, technical and soft skills, and provides a contact form for potential employers or collaborators to reach out. The project is built using modern web technologies to demonstrate my proficiency in web development and create a professional online presence.
Features

Responsive Design: Fully responsive layout using Bootstrap 5.3.3, ensuring compatibility across desktops, tablets, and mobile devices.
Interactive Navigation: Smooth scrolling navigation with a fixed navbar and mobile-friendly toggle menu.
About Page: Details my educational background (Bachelor’s in IT, 2020–2025), work experience (e.g., Computer Teacher at CITO Computer Center), and skills.
Skills Section: Highlights hard skills (e.g., Java, Flutter, Adobe Suite) with animated progress bars and soft skills (e.g., teamwork, problem-solving).
Contact Form: A functional contact form powered by EmailJS, sending messages directly to my email (vannoynith12@gmail.com) with a styled Bootstrap alert for user feedback.
Animations: Uses AOS (Animate on Scroll) for engaging fade and zoom effects on page elements.
Professional UI: Modern design with a clean aesthetic, using the Inter font and a cohesive color scheme.

Technologies Used

Frontend:
HTML5, CSS3, JavaScript
Bootstrap 5.3.3 for responsive layout and components
AOS 2.3.4 for scroll animations
Google Fonts (Inter) for typography


Form Handling:
EmailJS for sending form submissions to vannoynith12@gmail.com


Dependencies:
Bootstrap CSS and JS (CDN)
AOS library (CDN)
EmailJS SDK (CDN)



Project Structure
portfolio/
├── about.html         # About page with education, work, and skills
├── contact.html       # Contact form page with EmailJS integration
├── index.html        # Home page (landing page)
├── projects.html     # Projects page (showcase of IT projects)
├── assets/           # Images and other static assets
│   └── me.jpg
├── styles.css        # Custom CSS styles
├── script.js         # JavaScript for navigation, AOS, and skills animation
└── email.js          # JavaScript for EmailJS form handling

Installation and Setup

Clone or Download the Repository:

Clone the repository or download the project files to your local machine.

git clone <repository-url>


Ensure File Structure:

Place all files (about.html, contact.html, index.html, projects.html, styles.css, script.js, email.js, and assets/) in the same directory or maintain the structure above.


Set Up EmailJS (for Contact Form):

Log in to EmailJS with your account (vannoynith12@gmail.com).
Verify the following:
Service ID: service_erbe1vh (linked to your Gmail).
Template ID: template_s8ym3kk (configured with name, email, message, time fields).
Public Key: NMXXpdxVHVp_VyEyC (in email.js).


Update the template in EmailJS if needed (see emailjs_template.txt in project discussions).


Host the Website:

Local Testing:
Use a local server like Live Server in VS Code or run:python -m http.server 8000


Open http://localhost:8000 in a browser.


Public Deployment:
Deploy to platforms like Netlify, Vercel, or GitHub Pages:
Netlify: Drag and drop the project folder into the Netlify dashboard.
Vercel: Connect your GitHub repository or upload files.
GitHub Pages: Push to a GitHub repository and enable Pages in settings.


Ensure an internet connection for EmailJS to work.




Test the Contact Form:

Navigate to contact.html, fill out the form, and submit.
Verify a Bootstrap success alert appears (“Your message has been sent successfully! Thank you for reaching out.”).
Check your email (vannoynith12@gmail.com) for the message, formatted per the EmailJS template.



Usage

Navigation: Use the navbar to access Home, About, Projects, and Contact pages.
About Page: View my education, work experience, and skills, with animated progress bars for technical skills.
Contact Form: Submit inquiries via the contact form, which sends an email to vannoynith12@gmail.com with the sender’s name, email, message, and timestamp.
Skills Animation: On the About page, skills animate on scroll, showing proficiency levels for software and coding skills.

Future Enhancements

Add a Projects page with detailed descriptions and screenshots of IT projects (e.g., Flutter apps, AI models).
Integrate a backend (e.g., Firebase or Flask) for dynamic content or user authentication.
Enhance the contact form with additional fields (e.g., subject) or advanced validation.
Add a blog section to share insights on web development and IT trends.

About the Developer
Nith Vannoy is a final-year Information Technology student at the National University of Management, Cambodia. With experience as a Computer Teacher at CITO Computer Center and proficiency in languages like Java, Flutter, and Python, I am passionate about building innovative IT solutions. This portfolio demonstrates my skills in web development and serves as a platform to connect with potential employers and collaborators.
Contact

Email: vannoynith12@gmail.com
Phone: +855 96 37 30 734
Location: Street Lom, Sangkat Krang Thnong, Khan Sen Sok, Phnom Penh, Cambodia


© 2025 Nith Vannoy. All rights reserved.