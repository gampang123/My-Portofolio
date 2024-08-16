// pages/skills.js
function Project() {
    const projectElement = document.createElement('section');
    projectElement.classList.add('project-container');

    projectElement.innerHTML = `
       <div class="project-content">
            <h1>Project</h1>
            <div class="card-container">
                <div class="card" onclick="window.location.href='https://msib-6-sewa-lapangan-dan-gym-app-04.educalab.id/';">
                    <img src="/assets/porto1.png" alt="Image 1">
                    <p>Project Gym App | Gamelab Indonesia</p>
                </div>
                <div class="card" onclick="window.location.href='https://agrio.ronirahmadi.com/';">
                    <img src="/assets/porto2.png" alt="Image 2">
                    <p>Agrio Pestisida Organik</p>
                </div>
            </div>
        </div>
    `;
    return projectElement;
}

export default Project;
