'use strict';

document.getElementById('year').textContent = new Date().getFullYear();

const heroDownload = document.getElementById('hero-download');
const mobileDownload = document.querySelector('.mobile-download');
const closingDownload = document.querySelector('.closing-button');
const narrowScreen = window.matchMedia('(max-width: 980px)');
let pastHeroButton = false;
let closingButtonVisible = false;

function measureDownloadBar() {
  if (!mobileDownload.hidden) {
    document.body.style.setProperty('--download-bar-height', `${mobileDownload.getBoundingClientRect().height}px`);
  }
}

function updateDownloadBar() {
  const show = narrowScreen.matches && pastHeroButton && !closingButtonVisible;
  mobileDownload.hidden = !show;
  document.body.classList.toggle('has-mobile-download', show);
  measureDownloadBar();
}

// Native links remain usable when JavaScript or IntersectionObserver is unavailable.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === heroDownload) {
        pastHeroButton = !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
      } else if (entry.target === closingDownload) {
        closingButtonVisible = entry.isIntersecting;
      }
    }
    updateDownloadBar();
  });
  observer.observe(heroDownload);
  observer.observe(closingDownload);
  narrowScreen.addEventListener('change', updateDownloadBar);

  // Reserve the actual bar height, including larger text and phone safe areas.
  if ('ResizeObserver' in window) {
    new ResizeObserver(measureDownloadBar).observe(mobileDownload);
  }
}
