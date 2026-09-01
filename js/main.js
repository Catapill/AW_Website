  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    document.body.classList.toggle('menu-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      document.body.classList.remove('menu-open');
      navToggle.setAttribute('aria-expanded', false);
    });
  });

  // scroll reveal
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');
  if (prefersReduced) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // projects: show first 3, reveal the rest on click
  const workGrid = document.getElementById('workGrid');
  const workToggle = document.getElementById('workToggle');
  if (workGrid && workToggle) {
    const extraCards = workGrid.querySelectorAll('.work-card.is-extra');
    const hiddenCount = extraCards.length;
    const labelMore = `Show ${hiddenCount} more project${hiddenCount === 1 ? '' : 's'}`;
    const labelFewer = 'Show fewer projects';
    workToggle.textContent = labelMore;

    workToggle.addEventListener('click', () => {
      const expanding = !workGrid.classList.contains('is-expanded');
      workToggle.setAttribute('aria-expanded', String(expanding));
      workToggle.textContent = expanding ? labelFewer : labelMore;

      if (expanding) {
        workGrid.classList.add('is-expanded');
        // let the display:none -> block change paint before animating opacity/transform in,
        // otherwise the browser has no prior frame to transition from
        requestAnimationFrame(() => {
          requestAnimationFrame(() => extraCards.forEach(card => card.classList.add('is-visible')));
        });
      } else {
        extraCards.forEach(card => card.classList.remove('is-visible'));
        // wait for the fade-out to finish before removing the cards from layout
        setTimeout(() => workGrid.classList.remove('is-expanded'), prefersReduced ? 0 : 600);
      }
    });
  }

  // ---- dark mode toggle ----
  (function initThemeToggle(){
    const docEl = document.documentElement;
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    function updateLabel(){
      const isDark = docEl.getAttribute('data-theme-mode') === 'dark';
      btn.setAttribute('aria-pressed', String(isDark));
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    btn.addEventListener('click', () => {
      const next = docEl.getAttribute('data-theme-mode') === 'dark' ? 'light' : 'dark';
      docEl.setAttribute('data-theme-mode', next);
      updateLabel();
      // Persisting the choice across visits only makes sense once this file is
      // hosted for real — Claude's in-chat preview sandboxes localStorage, so
      // it's intentionally left out here. Once deployed, this is all it takes:
      //   localStorage.setItem('site-theme-mode', next);
      // ...and reading it back in the head script above instead of matchMedia.
    });

    updateLabel();
  })();
