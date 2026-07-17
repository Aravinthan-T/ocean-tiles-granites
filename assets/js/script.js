window.addEventListener("load", () => {
  const openingModal = new bootstrap.Modal(
    document.getElementById("openingModal"),
  );

  setTimeout(() => {
    openingModal.show();
  }, 1500);
});
