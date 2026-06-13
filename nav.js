(function () {
  var nav = document.querySelector('nav');
  var lastY = window.scrollY;

  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (y > lastY && y > 80) {
      nav.style.opacity = '0';
      nav.style.pointerEvents = 'none';
    } else {
      nav.style.opacity = '1';
      nav.style.pointerEvents = '';
    }
    lastY = y;
  }, { passive: true });
})();
