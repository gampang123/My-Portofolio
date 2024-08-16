// pages/skills.js
function Project() {
    const projectElement = document.createElement('section');
    projectElement.innerHTML = `
        <h1>Project</h1>
        <ul>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>React</li>
            <li>Node.js</li>
        </ul>
    `;
    return projectElement;
}

export default Project;
