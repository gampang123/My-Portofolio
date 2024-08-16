// layouts/footer.js
function Footer() {
    const footerElement = document.createElement('footer');
    footerElement.innerHTML = `
        <p class="footer">&copy; 2024 Gampang Rozaki. All rights reserved.</p>
    `;
    return footerElement;
}

export default Footer;
