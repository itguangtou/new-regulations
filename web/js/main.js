(function () {
  'use strict';

  // 返回顶部按钮
  var backToTop = document.getElementById('backToTop');
  var scrollThreshold = 300;

  function toggleBackToTop() {
    if (window.scrollY > scrollThreshold) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleBackToTop, { passive: true });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 导航高亮（滚动时标记当前章节）
  var sections = document.querySelectorAll('.article-section[id]');
  var navLinks = document.querySelectorAll('.header-nav a');

  function highlightNav() {
    var scrollPos = window.scrollY + 100;
    var current = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.style.color = '';
      link.style.fontWeight = '';
      if (link.getAttribute('href') === '#' + current) {
        link.style.color = '#c8102e';
        link.style.fontWeight = '700';
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
})();
