// pages/contact.js
function Contact() {
    const contactElement = document.createElement('section');
    contactElement.innerHTML = `
        <h1>Contact Me</h1>
        <p>You can reach me via email at: yourname@example.com</p>
    `;
    return contactElement;
}

export default Contact;

