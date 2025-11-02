let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  // Esconde todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Avança para o próximo slide
  slideIndex++;
  
  // Volta para o primeiro slide se chegou ao final
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Mostra o slide atual
  if (slides[slideIndex-1]) {
    slides[slideIndex-1].style.display = "block";
  }
  
  // Muda a cada 4 segundos
  setTimeout(showSlides, 4000);
}
