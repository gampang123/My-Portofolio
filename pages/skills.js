// pages/skills.js
function Skills() {
    const skillsElement = document.createElement('section');
    skillsElement.classList.add('skills-container');

    skillsElement.innerHTML = `
       <div class="skills-content">
            <h1>Skills</h1>
            <div class="skills-grid">
                <div class="skill-item"><img src="/assets/html.png" alt="Skill 1"></div>
                <div class="skill-item"><img src="/assets/css.png" alt="Skill 2"></div>
                <div class="skill-item"><img src="/assets/js.png" alt="Skill 3"></div>
                <div class="skill-item"><img src="/assets/sass.png" alt="Skill 4"></div>
                <div class="skill-item"><img src="/assets/bootstrap.png" alt="Skill 5"></div>
                <div class="skill-item"><img src="/assets/tailwind.png" alt="Skill 6"></div>
            </div>
            <h1>Tools</h1>
            <div class="skills-grid">
                <div class="skill-item"><img src="/assets/vscode.png" alt="Skill 1"></div>
                <div class="skill-item"><img style="width:115%;" src="/assets/laravel.png" alt="Skill 2"></div>
                <div class="skill-item"><img src="/assets/git.png" alt="Skill 3"></div>
                <div class="skill-item"><img src="/assets/github.png" alt="Skill 4"></div>
                <div class="skill-item"><img style="width:90%;" src="/assets/figma.png" alt="Skill 5"></div>
                <div class="skill-item"><img src="/assets/npm.png" alt="Skill 6"></div>
            </div>
        </div>
    `;
    return skillsElement;
}

export default Skills;
