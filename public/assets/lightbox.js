(function () {
  function closeLightbox() {
    var overlay = document.querySelector('.lightbox-overlay');
    if (overlay) overlay.remove();
    document.removeEventListener('keydown', onKey);
  }
  function onKey(e) {
    if (e.key === 'Escape') closeLightbox();
  }
  function openLightbox(src, alt) {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    var img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    overlay.appendChild(img);
    overlay.addEventListener('click', closeLightbox);
    document.body.appendChild(overlay);
    document.addEventListener('keydown', onKey);
  }
  document.addEventListener('click', function (e) {
    var target = e.target.closest('img.zoomable');
    if (target) openLightbox(target.src, target.alt);
  });
})();
