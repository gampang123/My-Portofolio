// buatan sendiri/router.js
import Header from '../layouts/header.js';
import Footer from '../layouts/footer.js';
import Home from '../pages/home.js';
import About from '../pages/about.js';
import Skills from '../pages/skills.js';
import Contact from '../pages/contact.js';
import Project from '../pages/project.js';

function Router() {
    const rootElement = document.getElementById('root');

    // Clear the current content
    rootElement.innerHTML = '';

    // Append Header
    rootElement.appendChild(Header());

    // Simple routing based on the current hash
    const path = window.location.hash;

    switch (path) {
        case '#about':
            rootElement.appendChild(About());
            break;
        case '#skills':
            rootElement.appendChild(Skills());
            break;
        case '#project':
            rootElement.appendChild(Project());
            break;
        case '#contact':
            rootElement.appendChild(Contact());
            break;
        default:
            rootElement.appendChild(Home());
    }

    // Append Footer
    rootElement.appendChild(Footer());
}

// Listen for hash changes (e.g., #home, #about)
window.addEventListener('hashchange', Router);

// Load the initial page
Router();
