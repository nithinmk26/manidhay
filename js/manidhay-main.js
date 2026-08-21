/**
 * MANIDHAY BUSINESS SERVICES — CORE SCRIPT
 * Handles navigation, interactive filters, modal dialogs, lightbox, stats animation, and form feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initStatCounters();
  initProjectFilters();
  initConsultationModal();
  initContactForms();
  initSmoothScroll();
});

/* --- 1. STICKY HEADER --- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --- 2. MOBILE NAVIGATION DRAWER --- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) {
      closeDrawer();
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* --- 3. ANIMATED STAT COUNTERS --- */
function initStatCounters() {
  const counters = document.querySelectorAll('.counter-value');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const duration = 1600; // ms
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out expo
          const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentCount = Math.floor(easeOut * target);

          counter.textContent = currentCount;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };

        requestAnimationFrame(updateCounter);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.25 });

  counters.forEach(counter => observer.observe(counter));
}

/* --- 4. PROJECT CATEGORY FILTERING --- */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --- 5. CONSULTATION MODAL --- */
function initConsultationModal() {
  const openButtons = document.querySelectorAll('[data-open-modal="consultation"]');
  const modal = document.getElementById('consultationModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  const form = modal.querySelector('#consultationForm');

  const openModal = (e) => {
    if (e) e.preventDefault();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('modalName')?.value || '';
      const phone = document.getElementById('modalPhone')?.value || '';
      const email = document.getElementById('modalEmail')?.value || '';
      const serviceSelect = document.getElementById('modalService');
      const serviceText = serviceSelect?.options[serviceSelect.selectedIndex]?.text || '';
      const location = document.getElementById('modalLocation')?.value || '';
      const message = document.getElementById('modalMessage')?.value || '';

      // Build executive professional WhatsApp inquiry message
      const whatsappText = encodeURIComponent(
        `*CIVIL ENGINEERING INQUIRY & QUOTATION REQUEST*\n` +
        `*Manidhay Business Services*\n` +
        `─────────────────────────────\n\n` +
        `*CLIENT DETAILS*\n` +
        `• Full Name: ${name}\n` +
        `• Contact: ${phone}\n` +
        `• Email: ${email}\n` +
        `• Project Location: ${location || 'Not Specified'}\n\n` +
        `*SERVICE & REQUIREMENTS*\n` +
        `• Vertical: ${serviceText}\n` +
        `• Project Brief:\n` +
        `${message || 'Requesting engineering consultation, structural review, and budget estimation.'}\n\n` +
        `─────────────────────────────\n` +
        `_Sent from Manidhay Web Portal (www.manidhay.com)_`
      );

      const whatsappUrl = `https://api.whatsapp.com/send?phone=919986470846&text=${whatsappText}`;

      closeModal();
      form.reset();
      showToast('Opening WhatsApp to send your quotation request to +91 9986 470 846...');

      // Direct synchronous navigation prevents browser popup blockers
      const win = window.open(whatsappUrl, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = whatsappUrl;
      }
    });
  }
}

/* --- 6. CONTACT & INQUIRY FORMS --- */
function initContactForms() {
  const contactForms = document.querySelectorAll('.manidhay-form');

  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('#contactName')?.value || '';
      const phone = form.querySelector('#contactPhone')?.value || '';
      const email = form.querySelector('#contactEmail')?.value || '';
      const serviceSelect = form.querySelector('#contactService');
      const serviceText = serviceSelect?.options[serviceSelect.selectedIndex]?.text || '';
      const location = form.querySelector('#contactLocation')?.value || '';
      const message = form.querySelector('#contactMessage')?.value || '';

      // Build executive professional WhatsApp inquiry message
      const whatsappText = encodeURIComponent(
        `*PROJECT INQUIRY & CONSULTATION BRIEF*\n` +
        `*Manidhay Business Services*\n` +
        `─────────────────────────────\n\n` +
        `*CLIENT DETAILS*\n` +
        `• Full Name: ${name}\n` +
        `• Contact: ${phone}\n` +
        `• Email: ${email}\n` +
        `• Project Location: ${location || 'Not Specified'}\n\n` +
        `*SERVICE & REQUIREMENTS*\n` +
        `• Vertical: ${serviceText}\n` +
        `• Project Brief:\n` +
        `${message || 'Requesting technical consultation and quotation estimation.'}\n\n` +
        `─────────────────────────────\n` +
        `_Sent from Manidhay Web Portal (www.manidhay.com)_`
      );

      const whatsappUrl = `https://api.whatsapp.com/send?phone=919986470846&text=${whatsappText}`;

      form.reset();
      showToast('Opening WhatsApp to send your inquiry to +91 9986 470 846...');

      // Direct synchronous navigation prevents browser popup blockers
      const win = window.open(whatsappUrl, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = whatsappUrl;
      }
    });
  });
}

/* --- 7. TOAST NOTIFICATIONS --- */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A7C59" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4500);
}

/* --- 8. SMOOTH ANCHOR SCROLLING --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId.length <= 1) return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
