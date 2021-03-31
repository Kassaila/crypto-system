function preloading() {
  const preloader = document.querySelector('[data-preloader');

  if (!preloader) return;

  setTimeout(() => {
    preloader.classList.add('cs--preloader--fade');
    setTimeout(() => {
      preloader.setAttribute('hidden', true);
    }, 500);
  }, 500);
}

export default preloading;
