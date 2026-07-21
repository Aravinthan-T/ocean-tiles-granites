function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const indicators = document.querySelectorAll(".hero-indicator");

  if (!slides.length) {
    console.warn("initHeroSlider: no .hero-slide elements found");
    return;
  }

  let currentSlide = 0;
  const INTERVAL = 2800;
  let timer = null;

  function goToSlide(index) {
    slides[currentSlide].classList.remove("active");
    indicators[currentSlide]?.classList.remove("active");

    currentSlide = index;

    const nextImg = slides[currentSlide].querySelector("img");
    if (nextImg) {
      nextImg.style.transition = "none";
      nextImg.style.transform = "scale(1.08)";
      void nextImg.offsetWidth; // force reflow so the transition resets cleanly
      nextImg.style.transition = "";
    }

    slides[currentSlide].classList.add("active");
    indicators[currentSlide]?.classList.add("active");
  }

  function showNextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  function startAutoplay() {
    if (timer) clearInterval(timer);
    timer = setInterval(showNextSlide, INTERVAL);
  }

  indicators.forEach((ind, i) => {
    ind.addEventListener("click", () => {
      goToSlide(i);
      startAutoplay();
    });
  });

  startAutoplay();
  console.log("Hero slider initialized:", slides.length, "slides");
}
