'use strict';

document.getElementById('year').textContent = new Date().getFullYear();

const heroDownload = document.getElementById('hero-download');
const mobileDownload = document.querySelector('.mobile-download');

// Native links remain usable when JavaScript or IntersectionObserver is unavailable.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(([entry]) => {
    const pastHeroButton = !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
    mobileDownload.hidden = !pastHeroButton;
    document.body.classList.toggle('has-mobile-download', pastHeroButton);
  });
  observer.observe(heroDownload);
}
