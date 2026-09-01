(() => {
  const page = location.pathname.split('/').pop() || 'index.html';
  const nav = [
    ['index.html', 'Home'],
    ['services.html', 'Services'],
    ['maintenance.html', 'Maintenance'],
    ['emergency.html', 'Emergency'],
    ['about.html', 'About'],
    ['contact.html', 'Contact']
  ];

  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentMinutes = (hours * 60) + minutes;
  const isBusinessDay = day >= 1 && day <= 5;
  const isOpen = isBusinessDay && currentMinutes >= (8 * 60) && currentMinutes < (17 * 60);

  document.body.insertAdjacentHTML('afterbegin', `
    <div class="topbar">
      <div class="container topbar-inner">
        <div class="topbar-left">
          <span class="topbar-dot ${isOpen ? 'is-open' : 'is-closed'}"></span>
          <span>${isOpen ? 'OPEN NOW' : 'CLOSED NOW'}</span>
        </div>
        <div class="topbar-middle">Mon - Fri: 8:00 AM - 5:00 PM | Sat - Sun: Closed</div>
      </div>
    </div>
    <nav class="navbar">
      <div class="container nav-inner">
        <a class="brand-wrap" href="index.html" aria-label="Total Comfort Air Home">
          <span class="brand-text">Total Comfort Air</span>
        </a>
        <button class="menu-btn" id="menuBtn" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-links" id="navLinks">
          ${nav.map(x => `<a href="${x[0]}" class="${page === x[0] ? 'active' : ''}">${x[1]}</a>`).join('')}
        </div>
        <div class="nav-actions">
          <a class="call-btn nav-call" href="tel:7326180268">📞 Call Us</a>
        </div>
      </div>
    </nav>
  `);

  document.body.insertAdjacentHTML('beforeend', `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-title">Total Comfort Air</div>
            <p>Professional HVAC repair, installation, and maintenance for homes and businesses across New Jersey.</p>
            <p style="margin-top:12px">📞 <a href="tel:7326180268">732-618-0268</a></p>
            <p>💬 <a href="sms:7326180268?body=Hi%20I%20need%20HVAC%20service.">Text Us</a></p>
            <p>📍 1238 NJ-34, Aberdeen Township, NJ 07747</p>
          </div>
          <div>
            <div class="footer-title">Explore</div>
            <div class="footer-links">
              ${nav.map(x => `<a href="${x[0]}">${x[1]}</a>`).join('')}
            </div>
          </div>
          <div>
            <div class="footer-title">Need Help?</div>
            <div class="footer-links">
              <a href="emergency.html">Emergency Service</a>
              <a href="contact.html">Request Service</a>
              <a href="tel:7326180268">Call Us</a>
              <a href="sms:7326180268?body=Hi%20I%20need%20HVAC%20service.">Text Us</a>
            </div>
          </div>
        </div>
        <div class="copyright">© ${new Date().getFullYear()} Total Comfort Air. All rights reserved.</div>
      </div>
    </footer>
  `);

  document.getElementById('menuBtn')?.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('show')),
    { threshold: 0.08 }
  );

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  document.querySelectorAll('[data-contact-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      if (status) {
        status.textContent = 'Your request has been received. For immediate help, call 732-618-0268 or text 732-618-0268.';
        status.style.display = 'block';
      }
      form.reset();
    });
  });
})();
