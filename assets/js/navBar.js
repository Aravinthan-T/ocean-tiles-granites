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

  function activateNavLink() {
    const scrollY = window.scrollY;
    const navHeight = document.querySelector(".navbar")?.offsetHeight || 90;
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navHeight - 20;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${currentSection}`,
      );
    });
  }

  window.addEventListener("scroll", activateNavLink);
  activateNavLink();
  console.log("Navbar scrollspy initialized:", sections.length, "sections");
}
