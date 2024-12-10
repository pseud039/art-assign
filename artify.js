// Toggle Switch Functionality
const toggleSwitch = document.getElementById('section-toggle');
const teenSection = document.getElementById('teen-section');
const kidsSection = document.getElementById('kids-section');

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        teenSection.classList.remove('active');
        kidsSection.classList.add('active');
    } else {
        teenSection.classList.add('active');
        kidsSection.classList.remove('active');
    }
});
const carousel = document.querySelector('.carousel');
let index = 0;

function nextSlide() {
    index = (index + 1) % 3; // Assuming 3 slides
    updateCarousel();
}

function prevSlide() {
    index = (index - 1 + 3) % 3; // Wrap around
    updateCarousel();
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Optional: Add buttons for manual control
document.querySelector('#next').addEventListener('click', nextSlide);
document.querySelector('#prev').addEventListener('click', prevSlide);
