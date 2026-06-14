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

  // Hamburger
  var burger = document.getElementById('nav-burger');
  var navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close menu when clicking a non-dropdown link
    navLinks.querySelectorAll('a:not(.dropdown > a)').forEach(function (a) {
      a.addEventListener('click', function () {
        burger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });

    // Mobile dropdown toggle (Services)
    var dropdownToggle = navLinks.querySelector('.dropdown > a');
    if (dropdownToggle) {
      dropdownToggle.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          this.closest('.dropdown').classList.toggle('mob-open');
        }
      });
    }
  }
})();
