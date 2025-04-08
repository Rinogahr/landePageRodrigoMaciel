// CARROSSEL
    const track = document.getElementById('carouselTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let index = 0;

    nextBtn.addEventListener('click', () => {
      if (index < track.children.length - 3) {
        index++;
        updateCarousel();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (index > 0) {
        index--;
        updateCarousel();
      }
    });

    function updateCarousel() {
      const slideWidth = track.children[0].offsetWidth;
      track.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    window.addEventListener('resize', updateCarousel);
// CARROSSEL FIM