// Image filter (advanced)
const images = document.querySelectorAll('img');

images.forEach(image => {
  image.classList.add('sepia')
  image.addEventListener('click', function() {
      images.forEach(image => {
        image.classList.add('sepia')
      })
    image.classList.remove('sepia');
  });
});
