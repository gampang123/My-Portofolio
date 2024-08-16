// pages/about.js
function About() {
    const aboutElement = document.createElement('section');
    aboutElement.innerHTML = `
        <div class="about-content">
            <h1>
                About Me
            </h1>
            <p>
                My name is Gampang Rozaki, a student at Amikom Yogyakarta majoring in Informatics Engineering. 
                I possess a positive personality, with a strong sense of responsibility and a cheerful demeanor. 
                I have skills in full-stack web development, and I am proficient in several programming languages, 
                including HTML, CSS, JavaScript, PHP, and Laravel.
            </p>
            </br>
            <h1>
                Education
            </h1>
                <ul>
                    <li>
                        <h3>MA Pondok Pabelan</h3>
                        <table>
                            <tr>
                                <td class="educa">IPA</td>
                                <td>2018-2021</td>
                            </tr>
                        </table>
                    </li>
                    <hr>
                    <li>
                        <h3>Amikom University Yogyakarta</h3>
                        <table>
                            <tr>
                                <td class="educa">Informatics Engineering</td>
                                <td>2022-Present</td>
                            </tr>
                        </table>
                    </li>
                    <hr>
                </ul>
            </br>
            <h1>
                Work Experience
            </h1>
                <ul>
                    <li>
                        <h3>Freelance</h3>
                        <table>
                            <tr>
                                <td class="work">Wordpress Web Developper</td>
                                <td>November-Desember 2023</td>
                            </tr>
                        </table>
                    </li>
                </ul>
            </br>
            <h1>
                Organization
            </h1>
                <ul>
                    <li>
                        <h3>Staff Secretary Pondok Pabelan</h3>
                        <table>
                            <tr>
                                <td class="work">Staff Secretary</td>
                                <td>2021-2022</td>
                            </tr>
                        </table>
                    </li>
                </ul>
                </br>
                <ul>
                    <li>
                        <h3> Staff BEM Amikom University  Yoyakarta</h3>
                        <table>
                            <tr>
                                <td class="work">Ministry of Internal Affairs</td>
                                <td>Juli - Desember 2022</td>
                            </tr>
                        </table>
                    </li>
                </ul>
                </br>
        </div>
    `;
    return aboutElement;
}

export default About;