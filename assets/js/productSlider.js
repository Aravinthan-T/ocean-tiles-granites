function initProductImageSliders() {
  const panelImages = document.querySelectorAll(".panel-image");

  panelImages.forEach((container) => {
    const slides = container.querySelectorAll(".panel-slide");
    const dots = container.querySelectorAll(".panel-dot");
    const prevBtn = container.querySelector(".panel-prev");
    const nextBtn = container.querySelector(".panel-next");

    if (slides.length <= 1) {
      container.classList.add("single-slide");
      return; // nothing to navigate, leave the single image as-is
    }

    let current = 0;

    function goTo(index) {
      slides[current].classList.remove("active");
      dots[current]?.classList.remove("active");

      current = (index + slides.length) % slides.length; // wraps both directions safely

      slides[current].classList.add("active");
      dots[current]?.classList.add("active");
    }

    prevBtn?.addEventListener("click", () => goTo(current - 1));
    nextBtn?.addEventListener("click", () => goTo(current + 1));

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => goTo(i));
    });
  });

  console.log(
    "Product image sliders initialized (manual nav):",
    panelImages.length,
    "panels",
  );
}
