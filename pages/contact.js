// pages/contact.js
function Contact() {
    const contactElement = document.createElement('section');
    contactElement.innerHTML = `
        <div class="contact-content">
            <h1>Contact Me</h1>
            <a href="https://github.com/gampang123" target="_blank">
                <i class="fa fa-github" style="font-size:48px;color:white"></i>
            </a>
            <a href="https://www.linkedin.com/in/gampang-rozaki-007253279/" target="_blank">
                <i class="fa fa-linkedin" style="font-size:48px;color:white"></i>
            </a>
            <a href="https://www.instagram.com/grzakii_/" target="_blank">
                <i class="fa fa-instagram" style="font-size:48px;color:white"></i>
            </a>
            <a href="https://wa.me/6281946656058/" target="_blank">
                <i class="fa fa-whatsapp" style="font-size:48px;color:white"></i>
            </a>
            <p>Contact Me in Email: gampangrozaki@gmail.com</p>
        </div>

    `;
    return contactElement;
}

export default Contact;

