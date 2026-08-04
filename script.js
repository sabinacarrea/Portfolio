document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 1. Gestione stato "active" sui bottoni dei filtri
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // 2. Recupero il nome del filtro selezionato (in minuscolo)
      const selectedFilter = button.textContent.trim().toLowerCase();

      // 3. Filtraggio delle card
      projectCards.forEach(card => {
        // Estraiamo tutti i tag presenti dentro la singola card
        const tags = Array.from(card.querySelectorAll('.tag'))
                          .map(tag => tag.textContent.trim().toLowerCase());

        if (selectedFilter === 'tutti' || tags.includes(selectedFilter)) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; }, 10);
        } else {
          card.style.opacity = '0';
          card.style.display = 'none';
        }
      });
    });
  });
});

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".carousel-card");
    let currentIndex = 0;

    function updateCarousel() {
      cards.forEach((card, index) => {
        // Rimuove tutte le classi di stato
        card.classList.remove("active", "next", "prev");

        // Calcola l'indice precedente (a destra) e successivo (a sinistra)
        const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
        const nextIndex = (currentIndex + 1) % cards.length;

        if (index === currentIndex) {
          card.classList.add("active"); // Immagine corrente al centro (grande)
        } else if (index === nextIndex) {
          card.classList.add("next");   // Prossima immagine a sinistra
        } else if (index === prevIndex) {
          card.classList.add("prev");   // Immagine passata a destra
        }
      });

      // Avanza all'immagine successiva
      currentIndex = (currentIndex + 1) % cards.length;
    }

    // Inizializza il carosello
    updateCarousel();

    // Cambia immagine automaticamente ogni 3 secondi (3000ms)
    setInterval(updateCarousel, 3000);
  });
