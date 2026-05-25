'use strict';

// ハンバーガー

const openBtn = document.querySelector('.header__btn02');
const closeBtn = document.querySelector('.closeBtn');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.spMenu__overlay');

if (openBtn && closeBtn && nav && overlay) {
  openBtn.addEventListener('click', () => {
    nav.classList.add('is-open');
    overlay.classList.add('is-open');
  });

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('is-open');
    overlay.classList.remove('is-open');
  });

  overlay.addEventListener('click', () => {
    nav.classList.remove('is-open');
    overlay.classList.remove('is-open');
  });
}


// Q&A アコーディオン

const accordions = document.querySelectorAll('.accordionItem');

accordions.forEach(item => {
  item.addEventListener('toggle', () => {
	if (item.open) {
	  accordions.forEach(other => {
		if (other !== item) {
		  other.open = false;
		}
	  });
	}
  });
});
