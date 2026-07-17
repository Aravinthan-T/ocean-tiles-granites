function initOpeningModal() {
  const modalElement = document.getElementById("openingModal");

  const openingModal = new bootstrap.Modal(modalElement);

  // Remove stuck backdrop after closing

  modalElement.addEventListener("hidden.bs.modal", () => {
    document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());

    document.body.classList.remove("modal-open");
  });

  // Show modal

  setTimeout(() => {
    openingModal.show();

    setTimeout(() => {
      startFireworks();
    }, 500);
  }, 1500);

  // Grand opening time

  const openingDate = new Date("2026-07-19T10:00:00+05:30").getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();

    const distance = openingDate - now;

    // After opening

    if (distance <= 0) {
      clearInterval(timer);

      document.querySelector(".opening-date").innerHTML = "🎉 WE ARE OPEN 🎉";

      document.querySelector(".opening-modal p:nth-of-type(2)").innerHTML =
        "Celebration Started";

      // Show 00 timer

      setZeroTimer();

      startBigCelebration();

      return;
    }

    // Countdown

    document.getElementById("days").innerHTML = String(
      Math.floor(distance / (1000 * 60 * 60 * 24)),
    ).padStart(2, "0");

    document.getElementById("hours").innerHTML = String(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    ).padStart(2, "0");

    document.getElementById("minutes").innerHTML = String(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    ).padStart(2, "0");

    document.getElementById("seconds").innerHTML = String(
      Math.floor((distance % (1000 * 60)) / 1000),
    ).padStart(2, "0");
  }, 1000);
}

// Set timer boxes to 00

function setZeroTimer() {
  document.getElementById("days").innerHTML = "00";

  document.getElementById("hours").innerHTML = "00";

  document.getElementById("minutes").innerHTML = "00";

  document.getElementById("seconds").innerHTML = "00";

  document.querySelectorAll("#countdown div").forEach((box) => {
    box.classList.add("celebrate-timer");
  });
}

// Small crackers when modal opens

function startFireworks() {
  const fire = createConfettiCanvas();

  const end = Date.now() + 3000;

  (function frame() {
    fire({
      particleCount: 5,

      spread: 70,

      origin: {
        x: 0.1,
        y: 0.5,
      },
    });

    fire({
      particleCount: 5,

      spread: 70,

      origin: {
        x: 0.9,
        y: 0.5,
      },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// Big celebration after opening

function startBigCelebration() {
  const fire = createConfettiCanvas();

  fire({
    particleCount: 300,

    spread: 180,

    origin: {
      x: 0.5,
      y: 0.5,
    },
  });
}

// Create canvas only inside modal

function createConfettiCanvas() {
  const container = document.getElementById("modal-fireworks");

  container.innerHTML = "";

  const canvas = document.createElement("canvas");

  canvas.style.position = "absolute";

  canvas.style.inset = "0";

  canvas.style.width = "100%";

  canvas.style.height = "100%";

  container.appendChild(canvas);

  return confetti.create(canvas, {
    resize: true,
  });
}
