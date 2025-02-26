// Toggle between Teen and Kids sections
const toggleSwitch = document.getElementById('toggleSwitch');
const sectionTitle = document.getElementById('sectionTitle');
const teenSection = document.getElementById('teenSection');
const kidsSection = document.getElementById('kidsSection');

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    sectionTitle.textContent = 'Kids Section';
    teenSection.classList.add('hidden');
    kidsSection.classList.remove('hidden');
  } else {
    sectionTitle.textContent = 'Teen Section';
    teenSection.classList.remove('hidden');
    kidsSection.classList.add('hidden');
  }
});

// Slideshow functionality
// Slideshow functionality
let slideIndex = 0;

function showSlides() {
  const slidesTeen = document.querySelectorAll('#teenSection .slide');
  const slidesKids = document.querySelectorAll('#kidsSection .slide');

  let currentSlides = !kidsSection.classList.contains('hidden') ? slidesKids : slidesTeen;

  currentSlides.forEach((slide) => (slide.classList.remove('active'))); // Remove active class from all images

  slideIndex++;
  if (slideIndex > currentSlides.length) {
    slideIndex = 1; // Reset to the first image when the end is reached
  }

  currentSlides[slideIndex - 1].classList.add('active'); // Add active class to current image

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();
