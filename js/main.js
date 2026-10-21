/**
 * ==========================================================================
 * PORTFOLIO CELINE YANINA - JAVASCRIPT NATIF
 * Développé sans dépendances pour une vitesse maximale et compatibilité totale
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initReadingProgress();
  initNavigation();
  initProjectFilters();
  initCopyEmail();
  initBackToTop();
  initPhotoFallback();
});

/**
 * 1. Gestion du mode clair / sombre (Theme Switcher)
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const root = document.documentElement;
  
  // 1. Détection de la préférence enregistrée ou du système
  const savedTheme = localStorage.getItem('cy-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');
  applyTheme(currentTheme);
  
  // 2. Événement clic sur le bouton
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(activeTheme);
      localStorage.setItem('cy-theme', activeTheme);
    });
  }
  
  // 3. Écoute du changement de préférence système si aucun choix manuel n'a été fixé
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('cy-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
  
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre');
    }
  }
}

/**
 * 2. Barre de progression de lecture au défilement
 */
function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  const header = document.querySelector('.site-header');
  
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    
    if (progressBar) {
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
    
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, { passive: true });
}

/**
 * 3. Navigation responsive et défilement fluide
 */
function initNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  // Bascule du menu mobile
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    
    // Fermer le menu en cliquant en dehors
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuBtn.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  // Fermer le menu lors du clic sur un lien
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
  
  // Highlight actif des sections au défilement
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });
}

/**
 * 4. Filtre interactif des projets
 */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (!filterBtns.length || !projectCards.length) return;
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Retirer la classe active des autres boutons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        const catArray = categories.split(' ').map(c => c.trim().toLowerCase());
        
        if (filterValue === 'all' || catArray.includes(filterValue.toLowerCase())) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 5. Copie en 1 clic de l'adresse e-mail avec confirmation Toast
 */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast-notice');
  const emailToCopy = 'yaninaceline@gmail.com';
  
  if (!copyBtn) return;
  
  copyBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        // Fallback ancien navigateur
        const textArea = document.createElement('textarea');
        textArea.value = emailToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      showToast('Adresse e-mail copiée dans le presse-papiers !');
    } catch (err) {
      console.warn('Erreur lors de la copie :', err);
      showToast('yaninaceline@gmail.com');
    }
  });
  
  function showToast(message) {
    if (!toast) return;
    const toastText = toast.querySelector('.toast-text');
    if (toastText) toastText.textContent = message;
    
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/**
 * 6. Bouton Retour en haut de page
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (!backToTopBtn) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 7. Gestion propre du fallback de la photo si le fichier est déplacé ou manquant
 */
function initPhotoFallback() {
  const photoImg = document.getElementById('profile-img');
  const fallbackBox = document.getElementById('profile-fallback');
  
  if (photoImg && fallbackBox) {
    photoImg.addEventListener('error', () => {
      photoImg.style.display = 'none';
      fallbackBox.style.display = 'flex';
    });
  }
}
