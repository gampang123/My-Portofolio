// pages/skills.js
function Skills() {
    const skillsElement = document.createElement('section');
    skillsElement.innerHTML = `
        <h1>My Skills</h1>
        <ul>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>React</li>
            <li>Node.js</li>
        </ul>
    `;
    return skillsElement;
}

export default Skills;
