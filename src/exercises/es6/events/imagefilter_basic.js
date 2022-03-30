// Image filter (basic)
const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.classList.add('grayscale');
  });
  image.addEventListener('mouseleave', () => {
      image.classList.remove('grayscale');
  });
});
