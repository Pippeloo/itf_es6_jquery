// Image gallery
const thumbnails = document.querySelectorAll('#thumbnails img');
const mainImage = document.getElementById('fullImage');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', event => {
      thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('border');
      });
    thumbnail.classList.add('border');
    mainImage.src = 'https://picsum.photos/id/' + thumbnail.dataset.id + '/600/400';
  });
});
