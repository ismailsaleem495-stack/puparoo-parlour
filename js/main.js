/* ============================================================
   PUPAROO PARLOUR — MAIN JS
   Phase 1: Navigation behaviour
   Phase 2: Hero animation sequence
   Phase 5: Reviews config + render
   ============================================================ */


/* ============================================================
   BOOKING CONFIG
   Change 'mode' to switch booking method per client.
   'call'      → displays phone number + call button
   'whatsapp'  → displays WhatsApp CTA button
   'calendly'  → embeds Calendly iframe
   ============================================================ */
const BOOKING_CONFIG = {
  mode:        'call',
  phone:       '07966 762604',
  phoneTel:    'tel:07966762604',
  whatsappNum: '447966762604',
  whatsappMsg: encodeURIComponent('Hi Ella, I\'d like to book a grooming appointment for my dog.'),
  calendlyUrl: 'https://calendly.com/puparoo-parlour',
};

(function renderBooking() {
  const wrap = document.getElementById('booking-cta');
  if (!wrap) return;

  if (BOOKING_CONFIG.mode === 'call') {
    wrap.innerHTML = `
      <a href="${BOOKING_CONFIG.phoneTel}" class="booking-phone-link" aria-label="Call Ella on ${BOOKING_CONFIG.phone}">
        <span class="booking-phone-num">${BOOKING_CONFIG.phone}</span>
        <span class="booking-phone-label">Tap to call</span>
      </a>
      <a href="${BOOKING_CONFIG.phoneTel}" class="booking-btn">
        <svg class="booking-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        Call Ella Now
      </a>
    `;
  }

  else if (BOOKING_CONFIG.mode === 'whatsapp') {
    wrap.innerHTML = `
      <a
        href="https://wa.me/${BOOKING_CONFIG.whatsappNum}?text=${BOOKING_CONFIG.whatsappMsg}"
        class="booking-btn booking-btn--wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Katie on WhatsApp"
      >
        <svg class="booking-btn-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Message on WhatsApp
      </a>
      <p class="booking-wa-note">Usually responds within the hour</p>
    `;
  }

  else if (BOOKING_CONFIG.mode === 'calendly') {
    wrap.innerHTML = `
      <div class="booking-calendly-wrap">
        <iframe
          class="booking-calendly-iframe"
          src="${BOOKING_CONFIG.calendlyUrl}"
          title="Book an appointment with Katie Mitchell"
          loading="lazy"
        ></iframe>
      </div>
    `;
  }
}());


/* ============================================================
   REVIEWS CONFIG
   Edit this array to update reviews for any client.
   Swap this block when deploying to a real client — no other
   changes needed. Max 5 reviews display well in the grid.
   ============================================================ */
const REVIEWS_DATA = [
  {
    name:     'Sophie Walters',
    location: 'Copthorne',
    date:     '2 weeks ago',
    rating:   5,
    text:     'Ella is absolutely wonderful with our Cockapoo. She\'s so calm and gentle and you can tell she genuinely loves dogs. He always comes home looking incredible and completely relaxed. We wouldn\'t go anywhere else — so grateful to have found her locally in Copthorne.',
  },
  {
    name:     'Daniel Marsh',
    location: 'Crawley',
    date:     '1 month ago',
    rating:   5,
    text:     'Took our Labrador to Ella for the first time and the difference compared to his previous groomer is night and day. The 1-to-1 attention, the care she takes, the results — everything is just brilliant. He was wagging his tail the whole time. Booked in for the next appointment already.',
  },
  {
    name:     'Claire Hutchinson',
    location: 'East Grinstead',
    date:     '3 weeks ago',
    rating:   5,
    text:     'Ella groomed our nervous rescue and was so patient with her. She took her time, didn\'t rush, and our dog came home happy and looking beautiful. As a City and Guilds qualified groomer she really knows her stuff. Couldn\'t recommend Puparoo Parlour highly enough.',
  },
  {
    name:     'Tom Bradley',
    location: 'Horley',
    date:     '5 weeks ago',
    rating:   5,
    text:     'Been coming to Ella for over a year now with our two Spaniels and she\'s been brilliant every single time. She remembers everything about them — their preferences, their quirks. The personal service you get here is something you just don\'t find at a busy salon. Highly recommend.',
  },
  {
    name:     'Priya Sharma',
    location: 'Copthorne',
    date:     '2 months ago',
    rating:   5,
    text:     'Our puppy\'s first groom with Ella was perfect. She was so patient, made it into a really positive experience and our puppy came home happy and fluffy! As a local business owner Ella is a real gem in the community. So pleased we found her.',
  },
];


/* ============================================================
   REVIEWS: Render cards from config
   Called once on page load. GSAP then animates the cards in.
   ============================================================ */
function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;

  REVIEWS_DATA.forEach((review) => {
    const stars = '★'.repeat(review.rating);
    const card  = document.createElement('article');
    card.className = 'review-card';
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <span class="review-quote" aria-hidden="true">&ldquo;</span>
      <div class="review-stars" aria-label="${review.rating} out of 5 stars" role="img">${stars}</div>
      <blockquote class="review-text"><p>${review.text}</p></blockquote>
      <footer class="review-footer">
        <span class="review-name">${review.name}</span>
        <span class="review-meta">${review.location} &middot; ${review.date}</span>
      </footer>
    `;
    grid.appendChild(card);
  });

  /* CTA card — 6th slot completes the 3-col grid */
  const cta = document.createElement('div');
  cta.className = 'review-card review-card--cta';
  cta.setAttribute('role', 'listitem');
  cta.innerHTML = `
    <span class="reviews-cta-stars" aria-hidden="true">★★★★★</span>
    <p class="reviews-cta-label">38 five-star reviews on</p>
    <p class="reviews-cta-platform">Google</p>
    <a href="#contact" class="reviews-cta-link">
      Book your appointment <span aria-hidden="true">→</span>
    </a>
  `;
  grid.appendChild(cta);
}

renderReviews();


/* ============================================================
   GSAP: Register ScrollTrigger plugin
   ============================================================ */
gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   HERO POSITION: JS fallback — reads real nav height from DOM
   and forces the hero section below the nav, overriding any
   CSS caching or margin-collapse edge cases.
   ============================================================ */
(function positionHero() {
  const nav  = document.getElementById('site-nav');
  const hero = document.getElementById('hero');
  if (!nav || !hero) return;
  const navH = nav.getBoundingClientRect().height;
  hero.style.marginTop = navH + 'px';
  hero.style.height    = 'calc(100vh - ' + navH + 'px)';
}());


/* ============================================================
   LENIS: Smooth scroll initialisation
   Critical: integrate with GSAP ticker EXACTLY as written here.
   This prevents Lenis and ScrollTrigger fighting over scroll
   position. All Phase 10 animations depend on this being correct.
   ============================================================ */
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


/* ============================================================
   NAV: Transparent → Frosted glass on scroll
   Uses rAF + a ticking flag so we only read scrollY once
   per frame. passive: true keeps scroll performance smooth.
   ============================================================ */
const siteNav = document.getElementById('site-nav');
const SCROLL_THRESHOLD = 80;

let ticking = false;
let lastScrollY = 0;

function updateNav() {
  if (lastScrollY > SCROLL_THRESHOLD) {
    siteNav.classList.add('is-scrolled');
  } else {
    siteNav.classList.remove('is-scrolled');
  }
  ticking = false;
}

window.addEventListener('scroll', () => {
  lastScrollY = window.scrollY;
  if (!ticking) {
    requestAnimationFrame(updateNav);
    ticking = true;
  }
}, { passive: true });


/* ============================================================
   HAMBURGER: Mobile menu open / close
   ============================================================ */
const hamburger     = document.getElementById('nav-hamburger');
const mobileOverlay = document.getElementById('nav-mobile-overlay');
const mobileLinks   = document.querySelectorAll('.mobile-nav-link');

function openMenu() {
  siteNav.classList.add('menu-open');
  mobileOverlay.classList.add('is-open');
  mobileOverlay.removeAttribute('aria-hidden');
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.setAttribute('aria-label', 'Close menu');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  siteNav.classList.remove('menu-open');
  mobileOverlay.classList.remove('is-open');
  mobileOverlay.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Open menu');
  document.body.classList.remove('menu-open');
}

hamburger.addEventListener('click', () => {
  const isOpen = siteNav.classList.contains('menu-open');
  isOpen ? closeMenu() : openMenu();
});

/* Close when a mobile link is tapped */
mobileLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

/* Close on Escape key — return focus to hamburger */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && siteNav.classList.contains('menu-open')) {
    closeMenu();
    hamburger.focus();
  }
});


/* ============================================================
   HERO: Load animation sequence
   Sequence per build plan:
     0ms    — hero-media fades in (1.2s, power1.inOut)
     1500ms — eyebrow + headline fade up (translateY 20→0, 0.9s, power2.out)
     1800ms — subheadline same treatment
     2100ms — CTA fades in with scale 0.96→1
   ============================================================ */

/* Set initial states before first paint so there's no flash */
gsap.set('.hero-media',         { opacity: 0 });
gsap.set('.hero-eyebrow',       { opacity: 0, y: 20 });
gsap.set('.hero-headline',      { opacity: 0, y: 20 });
gsap.set('.hero-subheadline',   { opacity: 0, y: 20 });
gsap.set('.hero-cta',           { opacity: 0, scale: 0.96 });
gsap.set('.hero-service-tags',  { opacity: 0 });

const heroTl = gsap.timeline();

/* 1. Video / poster background fades in */
heroTl.to('.hero-media', {
  opacity: 1,
  duration: 1.2,
  ease: 'power1.inOut',
});

/* 2. Eyebrow + headline fade up together at 1.5s */
heroTl.to('.hero-eyebrow', {
  opacity: 1,
  y: 0,
  duration: 0.7,
  ease: 'power2.out',
}, 1.5);

heroTl.to('.hero-headline', {
  opacity: 1,
  y: 0,
  duration: 0.9,
  ease: 'power2.out',
}, 1.5);

/* 3. Subheadline at 1.8s */
heroTl.to('.hero-subheadline', {
  opacity: 1,
  y: 0,
  duration: 0.9,
  ease: 'power2.out',
}, 1.8);

/* 4. CTA + service tags at 2.1s */
heroTl.to('.hero-cta', {
  opacity: 1,
  scale: 1,
  duration: 0.7,
  ease: 'power2.out',
  onComplete: () => gsap.set('.hero-cta', { clearProps: 'transform' }),
}, 2.1);

heroTl.to('.hero-service-tags', {
  opacity: 1,
  duration: 1.0,
  ease: 'power1.out',
}, 2.1);


/* ============================================================
   HERO: Scroll depth effect
   Scale hero-media 1.0 → 1.05 as the hero exits the viewport.
   Subtle parallax that adds depth without being gimmicky.
   ============================================================ */
gsap.to('.hero-media', {
  scale: 1.05,
  ease: 'none',
  scrollTrigger: {
    trigger: '.section-hero',
    start: 'top top',
    end:   'bottom top',
    scrub: 0.8,
  },
});

/* Fade out the scroll hint within the first 80px of scrolling */
gsap.to('.hero-scroll-hint', {
  opacity: 0,
  ease: 'none',
  scrollTrigger: {
    trigger: '.section-hero',
    start: 'top top',
    end:   '+=80',
    scrub: true,
  },
});


/* ============================================================
   SERVICES: Scroll-triggered animations
   Header children stagger in, then cards stagger in.
   Using fromTo so initial states are set immediately
   (elements below fold stay invisible until triggered).
   ============================================================ */

/* Section header — eyebrow, heading, intro stagger up */
gsap.fromTo(
  '.services-header > *',
  { opacity: 0, y: 28 },
  {
    opacity: 1,
    y: 0,
    stagger: 0.12,
    duration: 0.85,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.services-header',
      start: 'top 82%',
    },
  }
);

/* Cards stagger in with a small y-offset */
gsap.fromTo(
  '.service-card',
  { opacity: 0, y: 36 },
  {
    opacity: 1,
    y: 0,
    stagger: 0.08,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.services-grid',
      start: 'top 78%',
    },
  }
);

/* Pricing note fades in last */
gsap.fromTo(
  '.services-note',
  { opacity: 0 },
  {
    opacity: 0.8,
    duration: 0.8,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '.services-note',
      start: 'top 88%',
    },
  }
);


/* ============================================================
   ABOUT: Scroll-triggered animations
   Photo slides in from left, content staggers up from right.
   ============================================================ */

/* Photo column — slides in from left */
gsap.fromTo(
  '.about-photo-col',
  { opacity: 0, x: -40 },
  {
    opacity: 1,
    x: 0,
    duration: 1.0,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.about-grid',
      start: 'top 80%',
    },
  }
);

/* Credential badge — slight delay after photo */
gsap.fromTo(
  '.about-credential',
  { opacity: 0, y: 16, scale: 0.92 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.65,
    ease: 'back.out(1.4)',
    scrollTrigger: {
      trigger: '.about-grid',
      start: 'top 75%',
    },
    delay: 0.35,
  }
);

/* Content column — eyebrow, heading, body, stats, CTA stagger up */
gsap.fromTo(
  '.about-content > *',
  { opacity: 0, y: 28 },
  {
    opacity: 1,
    y: 0,
    stagger: 0.10,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 78%',
    },
  }
);

/* Stats — individual values pop in with a slight scale */
gsap.fromTo(
  '.about-stat',
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    stagger: 0.12,
    duration: 0.6,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.about-stats',
      start: 'top 85%',
    },
  }
);


/* ============================================================
   REVIEWS: Scroll-triggered animations
   Header fades in, then cards stagger up.
   Cards are rendered by renderReviews() before this runs.
   ============================================================ */

/* Reviews header — eyebrow + aggregate rating */
gsap.fromTo(
  '.reviews-header > *',
  { opacity: 0, y: 24 },
  {
    opacity: 1,
    y: 0,
    stagger: 0.14,
    duration: 0.85,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.reviews-header',
      start: 'top 82%',
    },
  }
);

/* Review cards stagger up with slight scale */
gsap.fromTo(
  '.review-card',
  { opacity: 0, y: 36 },
  {
    opacity: 1,
    y: 0,
    stagger: 0.08,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.reviews-grid',
      start: 'top 80%',
    },
  }
);


/* ============================================================
   BOOKING: Scroll-triggered animations
   Content children stagger up. Phone number gets a slight
   scale pop to draw the eye.
   ============================================================ */

gsap.fromTo(
  '.booking-content > *',
  { opacity: 0, y: 28 },
  {
    opacity: 1,
    y: 0,
    stagger: 0.12,
    duration: 0.85,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.booking-content',
      start: 'top 80%',
    },
  }
);


/* ============================================================
   CONTACT: Form submission + scroll animations
   ============================================================ */

/* Async form submit → Formspree (demo) or n8n (production) */
const contactForm   = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');
const submitBtn     = document.getElementById('form-submit-btn');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    try {
      const res = await fetch(contactForm.action, {
        method:  'POST',
        body:    new FormData(contactForm),
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        contactForm.hidden = true;
        contactSuccess.hidden = false;
      } else {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      }
    } catch {
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }
  });
}

/* Scroll animations — info col from left, form col from right */
gsap.fromTo(
  '.contact-info > *',
  { opacity: 0, y: 28 },
  {
    opacity: 1,
    y: 0,
    stagger: 0.10,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.contact-grid',
      start: 'top 80%',
    },
  }
);

gsap.fromTo(
  '.contact-form-col',
  { opacity: 0, y: 28 },
  {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.contact-grid',
      start: 'top 78%',
    },
    delay: 0.15,
  }
);


/* ============================================================
   FOOTER: Scroll-triggered animations — Phase 8
   Brand col slides up first, then nav + contact cols stagger.
   ============================================================ */

/* Footer grid columns stagger in */
gsap.fromTo(
  '.footer-grid > *',
  { opacity: 0, y: 32 },
  {
    opacity: 1,
    y: 0,
    stagger: 0.12,
    duration: 0.85,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.footer-grid',
      start: 'top 88%',
    },
  }
);

/* Bottom bar fades in after grid */
gsap.fromTo(
  '.footer-bottom',
  { opacity: 0 },
  {
    opacity: 1,
    duration: 0.8,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '.footer-bottom',
      start: 'top 95%',
    },
  }
);
