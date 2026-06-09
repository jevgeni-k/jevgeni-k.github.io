(function () {
  var currentLang = localStorage.getItem('lang') || 'et';
  document.documentElement.lang = currentLang;

  function applyLang(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.style.display = el.getAttribute('data-lang') === lang ? '' : 'none';
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(currentLang);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(this.getAttribute('data-lang-btn'));
      });
    });
  });
})();
