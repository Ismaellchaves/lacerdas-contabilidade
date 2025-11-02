document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.mySlides');
  const totalSlides = slides.length;

  function showSlide() {
    // Esconde todos os slides
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
    
    // Mostra o slide atual
    slides[currentSlide].style.display = 'block';
    
    // Avança para o próximo slide
    currentSlide = (currentSlide + 1) % totalSlides;
  }

  // Inicia o slideshow
  showSlide();
  setInterval(showSlide, 4000);
});
