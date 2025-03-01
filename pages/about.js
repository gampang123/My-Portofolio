// pages/about.js
function About() {
    const aboutElement = document.createElement('section');
    aboutElement.classList.add('about-container');

    aboutElement.innerHTML = `
        <div class="about-content">
            <h1 class="fade-up">About Me</h1>
            <p class="fade-up">
                My name is Gampang Rozaki, a student at Amikom Yogyakarta majoring in Informatics Engineering. 
                I possess a positive personality, with a strong sense of responsibility and a cheerful demeanor. 
                I have skills in full-stack web development, and I am proficient in several programming languages, 
                including HTML, CSS, JavaScript, PHP, and Laravel.
            </p>
            </br>
            <h1 class="fade-up">Education</h1>
            <ul>
                <li class="fade-up">
                    <h3>MA Pondok Pabelan</h3>
                    <table>
                        <tr>
                            <td class="educa">IPA</td>
                            <td>2018-2021</td>
                        </tr>
                    </table>
                </li>
            </ul>
            <hr class="fade-up">
            <ul>
                <li class="fade-up">
                    <h3>Amikom University Yogyakarta</h3>
                    <table>
                        <tr>
                            <td class="educa">Informatics Engineering</td>
                            <td>2022-Present</td>
                        </tr>
                    </table>
                </li>
            </ul>
            <hr class="fade-up">
            </br>
            <h1 class="fade-up">Work Experience</h1>
            <ul>
                <li class="fade-up">
                    <h3>Freelance</h3>
                    <table>
                        <tr>
                            <td class="work">Wordpress Web Developer</td>
                            <td>November-Desember 2023</td>
                        </tr>
                    </table>
                </li>
                <li class="fade-up">
                    <h3>Internship</h3>
                    <table>
                        <tr>
                            <td class="work">Wordpress Web Developer</td>
                            <td>September-Januari 2025</td>
                        </tr>
                    </table>
                </li>
            </ul>
            <hr class="fade-up">
            </br>
            <h1 class="fade-up">Organization</h1>
            <ul>
                <li class="fade-up">
                    <h3>Staff Secretary Pondok Pabelan</h3>
                    <table>
                        <tr>
                            <td class="work">Staff Secretary</td>
                            <td>2021-2022</td>
                        </tr>
                    </table>
                </li>
            </ul>
            <hr class="fade-up">
            <ul>
                <li class="fade-up">
                    <h3>Staff BEM Amikom University Yogyakarta</h3>
                    <table>
                        <tr>
                            <td class="work">Ministry of Internal Affairs</td>
                            <td>Juli - Desember 2022</td>
                        </tr>
                    </table>
                </li>
            </ul>
            <hr class="fade-up">
            </br>
        </div>
    `;

    // Function to handle scroll animation
    function handleScroll() {
        const fadeElements = document.querySelectorAll('.fade-up');
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
                el.classList.add('animated');
            } else {
                el.classList.remove('animated');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on load

    return aboutElement;
}

export default About;

// Add CSS for smooth fade effect
const style = document.createElement('style');
style.innerHTML = `
    .fade-up {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .fade-up.animated {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);