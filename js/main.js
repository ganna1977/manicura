// Esperar a que el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
  // ---------- FORMULARIO "PEDIR CITA" ----------
  const formCita = document.getElementById('form-cita');

  if (formCita) {
    formCita.addEventListener('submit', function (event) {
      event.preventDefault(); // para que no recargue la página

      const datos = new FormData(formCita);
      const nombre = datos.get('nombre');
      const servicio = datos.get('servicio');
      const fecha = datos.get('fecha');
      const hora = datos.get('hora');

      alert(`Gracias, ${nombre}. ¡Has pedido una cita para ${servicio} el ${fecha} a las ${hora}!`);

      formCita.reset();
    });
  }

  // ---------- CARRUSEL GALERÍA ----------
  const track = document.querySelector('.carousel-track');
  if (!track) return; // si no hay carrusel, salimos

  const slides = track.querySelectorAll('img');
  const btnPrev = document.querySelector('.carousel-btn.prev');
  const btnNext = document.querySelector('.carousel-btn.next');

  let currentIndex = 0;

  function updateCarousel() {
    if (slides.length === 0) return;
    const width = slides[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * width}px)`;
  }

  if (btnPrev && btnNext && slides.length > 0) {
    btnPrev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    btnNext.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
  }
});

