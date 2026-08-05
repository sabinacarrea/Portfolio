document.addEventListener('DOMContentLoaded', () => {

  /* --- 1. FILTRAGGIO PROGETTI --- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedFilter = button.textContent.trim().toLowerCase();

        projectCards.forEach(card => {
          const tags = Array.from(card.querySelectorAll('.tag'))
                            .map(tag => tag.textContent.trim().toLowerCase());

          if (selectedFilter === 'tutti' || tags.includes(selectedFilter)) {
            card.style.display = 'flex';
            setTimeout(() => { card.style.opacity = '1'; }, 10);
          } else {
            card.style.opacity = '0';
            setTimeout(() => { card.style.display = 'none'; }, 300);
          }
        });

      });
    });
  }

  /* --- 2. NAVBAR HAMBURGER MENU (MOBILE) --- */
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  if (menuToggle && navLinks) {
    
    // Toggle menu
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Chiudi al click su un link
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    // Chiudi al click fuori dal menu
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });

  }

});