// â”€â”€ CUSTOM CURSOR
    const cur = document.getElementById('cur'), curR = document.getElementById('curR');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px'; });
    (function a() { rx += (mx - rx) * .12; ry += (my - ry) * .12; curR.style.left = rx + 'px'; curR.style.top = ry + 'px'; requestAnimationFrame(a); })();
    document.querySelectorAll('a,button,.case,.cert,.svc,.sk').forEach(el => {
      el.addEventListener('mouseenter', () => { cur.style.width = '18px'; cur.style.height = '18px'; curR.style.width = '54px'; curR.style.height = '54px'; });
      el.addEventListener('mouseleave', () => { cur.style.width = '10px'; cur.style.height = '10px'; curR.style.width = '36px'; curR.style.height = '36px'; });
    });

    // â”€â”€ PARTICLE NETWORK
    const cv = document.getElementById('cv'), ctx = cv.getContext('2d');
    function rsz() { cv.width = innerWidth; cv.height = innerHeight; } rsz(); window.addEventListener('resize', rsz);
    const pts = Array.from({ length: 100 }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      vx: (Math.random() - .5) * .32, vy: (Math.random() - .5) * .32,
      r: Math.random() * 1.4 + .3, a: Math.random() * .4 + .07
    }));
    let mox = innerWidth / 2, moy = innerHeight / 2;
    document.addEventListener('mousemove', e => { mox = e.clientX; moy = e.clientY; });
    (function draw() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      pts.forEach(p => {
        const dx = mox - p.x, dy = moy - p.y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 220) { p.vx += dx / d * .014; p.vy += dy / d * .014; }
        const sp = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (sp > .78) { p.vx *= .78 / sp; p.vy *= .78 / sp; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = cv.width; if (p.x > cv.width) p.x = 0;
        if (p.y < 0) p.y = cv.height; if (p.y > cv.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,245,196,${p.a})`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++)for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 125) { ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.strokeStyle = `rgba(0,245,196,${.065 * (1 - d / 125)})`; ctx.lineWidth = .5; ctx.stroke(); }
      }
      requestAnimationFrame(draw);
    })();

    // â”€â”€ SCROLL REVEAL
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }), { threshold: .1 });
    document.querySelectorAll('.stat,.about-left,.about-right,.svc,.sk,.case,.proc-step,.ugc-card,.exp,.cert').forEach(el => obs.observe(el));

    // â”€â”€ STATS COUNT-UP
    function cnt(el, t, sfx = '') { let c = 0; const s = t / 55; const tm = setInterval(() => { c += s; if (c >= t) { c = t; clearInterval(tm); } el.textContent = Math.floor(c).toLocaleString('en-IN') + sfx; }, 24); }
    const sbo = new IntersectionObserver(e => { if (e[0].isIntersecting) { cnt(document.getElementById('s1'), 3); cnt(document.getElementById('s2'), 800, '+'); cnt(document.getElementById('s3'), 50000); cnt(document.getElementById('s4'), 4); sbo.disconnect(); } }, { threshold: .5 });
    sbo.observe(document.getElementById('sb'));

    // â”€â”€ CASE TOGGLE
    function tog(c) { const o = c.classList.contains('open'); document.querySelectorAll('.case').forEach(x => x.classList.remove('open')); if (!o) c.classList.add('open'); }

    // â”€â”€ PAGE LOADER
    window.addEventListener('load', () => {
      const ldr = document.getElementById('loader');
      if (ldr) {
        ldr.style.opacity = '0';
        setTimeout(() => ldr.remove(), 600);
      }
    });

    // â”€â”€ ACTIVE NAV & HAMBURGER
    const nav = document.getElementById('navbar'), hm = document.getElementById('hm'), nl = document.getElementById('nl');
    hm.addEventListener('click', () => { 
      hm.classList.toggle('act'); 
      nl.classList.toggle('sho'); 
      document.body.style.overflow = nl.classList.contains('sho') ? 'hidden' : ''; 
    });
    document.querySelectorAll('#nl a').forEach(l => l.addEventListener('click', () => { 
      hm.classList.remove('act'); 
      nl.classList.remove('sho'); 
      document.body.style.overflow = ''; 
    }));

    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const sects = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');

      let cur = '';
      sects.forEach(s => { if (window.scrollY >= s.offsetTop - 150) cur = s.id; });
      navLinks.forEach(a => { 
        if(a.getAttribute('href') === '#' + cur) a.classList.add('active');
        else a.classList.remove('active');
      });
    }, { passive: true });
