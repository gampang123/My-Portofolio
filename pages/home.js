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

    return homeElement;
}

export default Home;
