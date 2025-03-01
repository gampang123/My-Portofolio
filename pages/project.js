// pages/skills.js
function Project() {
    const projectElement = document.createElement('section');
    projectElement.classList.add('project-container');

    projectElement.innerHTML = `
       <div class="project-content">
            <h1>Project</h1>
            <div class="card-container">
                <div class="card" onclick="window.open('https://msib-6-sewa-lapangan-dan-gym-app-04.educalab.id/', '_blank');">
                    <img src="/assets/porto1.png" alt="Image 1">
                    <h3>Gym App | Project Gamelab Indonesia</h3>
                    <p>Sistem manajemen penyewaan GYM yang sudah terintrgrasi pembayaran online menggunakan midtrans</p>
                </div>
                <div class="card" onclick="window.open('https://gadesain.com/', '_blank');">
                    <img src="/assets/gadesain.png" alt="Image 2">
                    <h3>Gadesain | Undangan Pernikahan Digital</h3>
                    <p>Pembuatan website undangan pernikahan digital menggunakan wordpress</p>
                </div>
                <div class="card" onclick="window.open('#', '_blank');">
                    <img src="/assets/karsaprawira.png" alt="Image 3">
                    <h3>Cv. Karsa Prawira | Company Profile </h3>
                    <p>Website company profile yang dapat CRUD portofolio ke dalam website dengan menggunakan laravel</p>
                </div>
                <div class="card" onclick="window.open('https://iconhub.co.id/', '_blank');">
                    <img src="/assets/iconhub.png" alt="Image 4">
                    <h3>Icon Hub | Manajemen Booking</h3>
                    <p>Website managemen booking room menggunakan laravel</p>
                </div>
            </div>
        </div>
    `;
    return projectElement;
}

export default Project;

// Tambahkan gaya CSS di dalam file CSS terkait
const style = document.createElement('style');
style.innerHTML = `
    .project-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
    .project-content {
        max-width: 1000px;
        width: 100%;
    }
    .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }
    .card {
        background: ;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 20px;
        text-align: center;
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    .card:hover {
        transform: translateY(-5px);
    }
    .card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
    }
    @media (max-width: 768px) {
        .card-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 480px) {
        .card-container {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;
document.head.appendChild(style);