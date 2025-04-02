// pages/contact.js
function Contact() {
    const contactElement = document.createElement('section');
    contactElement.innerHTML = `
        <div class="contact-content">
            <h1>Contact Me</h1>
            <div class="contact-icons">
                <a href="https://github.com/gampang123" target="_blank" class="icon github">
                    <i class="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/gampang-rozaki-007253279/" target="_blank" class="icon linkedin">
                    <i class="fa fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/grzakii_/" target="_blank" class="icon instagram">
                    <i class="fa fa-instagram"></i>
                </a>
                <a href="https://wa.me/6281946656058/" target="_blank" class="icon whatsapp">
                    <i class="fa fa-whatsapp"></i>
                </a>
            </div>
            
            <div class="contact-details">
                <p>Email: <a href="mailto:gampangrozaki@gmail.com">gampangrozaki@gmail.com</a></p>
                <p>Phone: <a href="tel:+6281946656058">+62 819-4665-6058</a></p>
                <p>Location: Yogyakarta, Indonesia</p>
            </div>
        </div>

    `;
    return contactElement;
}

export default Contact;

