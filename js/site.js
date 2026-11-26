// Stickbeat: enlaces de tienda y aparición suave.
// Cuando la app esté publicada, pega aquí los enlaces de las tiendas.
(function () {
  var URLS = {
    ios: '',      // https://apps.apple.com/app/id0000000000
    android: ''   // https://play.google.com/store/apps/details?id=com.luiscaballero.stickbeat
  };

  var ua = navigator.userAgent || '';
  var isAndroid = /android/i.test(ua);
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var anyLive = false;

  document.querySelectorAll('[data-store]').forEach(function (a) {
    var url = URLS[a.dataset.store];
    if (url) {
      a.href = url; a.target = '_blank'; a.rel = 'noopener'; anyLive = true;
    } else {
      a.setAttribute('aria-disabled', 'true');
      a.removeAttribute('href');
    }
  });
  var soon = document.querySelector('[data-soon]');
  if (soon && anyLive) soon.hidden = true;

  // "Descargar" lleva directo a la tienda del teléfono.
  var mine = isIOS ? URLS.ios : isAndroid ? URLS.android : '';
  document.querySelectorAll('[data-smart-download]').forEach(function (btn) {
    if (mine) { btn.href = mine; btn.target = '_blank'; btn.rel = 'noopener'; }
  });

  // Aparición al entrar en pantalla (el CSS solo anima si no se pidió movimiento reducido).
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function (el) { io.observe(el); });
})();
