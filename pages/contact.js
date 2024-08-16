// pages/contact.js
function Contact() {
    const contactElement = document.createElement('section');
    contactElement.innerHTML = `
        <div class="contact-content">
            <h1>Contact Me</h1>
            <p>Contact Me in Email: gampangrozaki@gmail.com</p>
        </div>
    `;
    return contactElement;
}

export default Contact;

