function initNavbarAutoClose() {
  const navbarMenu = document.getElementById("navbarMenu");
  const navLinks = navbarMenu ? navbarMenu.querySelectorAll(".nav-link") : [];

  if (!navbarMenu) return;

  const bsCollapse = new bootstrap.Collapse(navbarMenu, { toggle: false });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarMenu.classList.contains("show")) {
        bsCollapse.hide();
      }
    });
  });
}

function initNavbarScrollspy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  if (!sections.length || !navLinks.length) {
    console.warn("initNavbarScrollspy: sections or nav links not found", {
      sections: sections.length,
      navLinks: navLinks.length,
    });
    return;
  }

  let ticking = false;

  function activateNavLink() {
    const scrollY = window.scrollY;
    const navHeight = document.querySelector(".navbar")?.offsetHeight || 90;
    const scrollBottom = scrollY + window.innerHeight;
    const pageBottom = document.documentElement.scrollHeight;

    let currentSection = sections[0].getAttribute("id");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navHeight - 20;
      if (scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    if (scrollBottom >= pageBottom - 2) {
      currentSection = sections[sections.length - 1].getAttribute("id");
    }

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${currentSection}`,
      );
    });
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        activateNavLink();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll);
  activateNavLink();
  console.log("Navbar scrollspy initialized:", sections.length, "sections");
}
