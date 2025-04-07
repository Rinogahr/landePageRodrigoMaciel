// CARROSSEL
const track = document.getElementById('carousel-track');
const images = Array.from(track.children);

// Duplicar imagens
images.forEach(img => {
  const clone = img.cloneNode(true);
  track.appendChild(clone);
});
// CARROSSEL FIM