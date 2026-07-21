function renderFaq() {
  const container = document.getElementById("faqContainer");
  if (!container) return;

  container.innerHTML = "";

  faqData.forEach((faq, index) => {
    const card = document.createElement("div");
    card.className = "faq-card";
    card.dataset.id = faq.id ?? index + 1;

    card.innerHTML = `
      <div class="faq-bg" style="background-image: url('${faq.image}')"></div>

      <div class="faq-content">
        <button class="faq-expand-btn" aria-label="Expand">
          <i class="bi bi-arrow-up-right"></i>
        </button>

        <span class="faq-number">0${index + 1}</span>

        <h3 class="faq-question">${faq.question}</h3>

        <div class="faq-answer">
          <p>${faq.answer}</p>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      const active = container.querySelector(".faq-card.active");
      if (active && active !== card) {
        active.classList.remove("active");
      }
      card.classList.toggle("active");
    });

    container.appendChild(card);
  });
}
