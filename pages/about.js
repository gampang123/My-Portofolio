// pages/about.js
function About() {
    const aboutElement = document.createElement('section');
    aboutElement.classList.add('about-container');

    aboutElement.innerHTML = `
        <div class="about-content">
            <h1 class="fade-up">
                About Me
            </h1>
            <p class="fade-up">
                My name is Gampang Rozaki, a student at Amikom Yogyakarta majoring in Informatics Engineering. 
                I possess a positive personality, with a strong sense of responsibility and a cheerful demeanor. 
                I have skills in full-stack web development, and I am proficient in several programming languages, 
                including HTML, CSS, JavaScript, PHP, and Laravel.
            </p>
            </br>
            <h1 class="fade-up">
                Education
            </h1>
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
            <h1 class="fade-up">
                Work Experience
            </h1>
            <ul>
                <li class="fade-up">
                    <h3>Freelance</h3>
                    <table>
                        <tr>
                            <td class="work">Wordpress Web Developper</td>
                            <td>November-Desember 2023</td>
                        </tr>
                    </table>
                </li>
            </ul>
            <hr class="fade-up">
            </br>
            <h1 class="fade-up">
                Organization
            </h1>
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
                    <h3>Staff BEM Amikom University  Yoyakarta</h3>
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

    // Trigger animation when about is displayed
    setTimeout(() => {
        const fadeElements = aboutElement.querySelectorAll('.fade-up');
        fadeElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animated');
            }, index * 100); // 1-second delay between each element
        });
    }, 100);

    return aboutElement;
}

export default About;
