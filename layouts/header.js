// layouts/header.js
function Header() {
    const headerElement = document.createElement('header');
    headerElement.innerHTML = `
    <nav>
        <ul>
            <li>
                <a href="#home" class="logo-link">
                    <img src="/assets/simson.PNG" alt="simson" class="logo">
                </a>
            </li>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    `;
    return headerElement;
}

export default Header;
