function initProductTabs() {
  const tabs = document.querySelectorAll(".product-tab");
  const panels = document.querySelectorAll(".product-panel");

  if (!tabs.length || !panels.length) {
    console.warn("initProductTabs: tabs or panels not found");
    return;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      panels.forEach((panel) => {
        panel.classList.remove("active");
        if (panel.getAttribute("data-panel") === target) {
          panel.classList.add("active");
        }
      });
    });
  });

  console.log("Product tabs initialized:", tabs.length, "tabs");
}
