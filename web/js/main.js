(function () {
  'use strict';

  var DEMO_TEXT = 'For demonstration and testing purposes only';

  // 返回顶部
  var btn = document.getElementById('backToTop');
  if (btn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 280) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 隐藏 EdgeOne 注入的测试提示栏（CSS 无法命中时用 JS 兜底）
  function hideDemoBanner() {
    var nodes = document.querySelectorAll('body > div, body > footer, body > section');
    nodes.forEach(function (el) {
      if (el.classList.contains('article-wrap') || el.classList.contains('site-footer')) {
        return;
      }
      var text = el.textContent || '';
      if (text.indexOf(DEMO_TEXT) === -1) {
        return;
      }
      el.style.setProperty('display', 'none', 'important');
      el.style.setProperty('visibility', 'hidden', 'important');
      el.style.setProperty('opacity', '0', 'important');
      el.style.setProperty('pointer-events', 'none', 'important');
      el.style.setProperty('height', '0', 'important');
      el.style.setProperty('overflow', 'hidden', 'important');
    });
  }

  hideDemoBanner();

  if (document.body) {
    new MutationObserver(hideDemoBanner).observe(document.body, {
      childList: true,
      subtree: true
    });
  }
})();
