// pages/home.js
function Home() {
    const homeElement = document.createElement('section');
    homeElement.classList.add('home-container');

    homeElement.innerHTML = `
        <div class="home-content">
            <div class="text-content">
                <h1 class="intro-text">Hello,👋 My name is</h1>
                <h1 class="rainbow-text intro-text">Gampang Rozaki</h1>
                <h1 class="intro-text">I'm a Full Stack Web Developer</h1>
                <h1 class="intro-text tech-stack" id="tech-stack">Laravel</h1>
            </div>
            <div class="image-content">
                <img src="/assets/gam.JPG" alt="Gampang Rozaki" class="profile-image intro-image">
            </div>
        </div>
    `;

    // Trigger animation when home is displayed
    setTimeout(() => {
        homeElement.classList.add('animate-home');
    }, 100);

    // Smooth text transition
    setTimeout(() => {
        let techStack = homeElement.querySelector("#tech-stack");
        let techs = ["Laravel", "WordPress"];
        let index = 0;
        
        setInterval(() => {
            techStack.style.opacity = "0";
            setTimeout(() => {
                index = (index + 1) % techs.length;
                techStack.textContent = techs[index];
                techStack.style.opacity = "1";
            }, 500); // Delay sebelum teks berubah
        }, 3000); // Ganti setiap 3 detik
    }, 200);

    return homeElement;
}

export default Home;

// Tambahkan efek transisi ke CSS
const style = document.createElement('style');
style.innerHTML = `
    .tech-stack {
        transition: opacity 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);
