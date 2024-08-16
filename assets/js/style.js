const menuToggleBtn = document.querySelector(".menu-toggle-btn");
const navMenu = document.querySelector(".nav-menu");
const closeMenuBtn = document.querySelector(".mobile-menu-close");
gsap.registerPlugin(ScrollTrigger);

// console.log(menuToggleBtn);
// if (menuToggleBtn && navMenu) {
menuToggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  document.body.style.overflow = "hidden";
  //   document.body.style.overflow = "auto";
  closeMenuBtn.style.display = "block";
});

closeMenuBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
  navMenu.classList.add(".close-menu");
  document.body.style.overflow = "auto";
  menuToggleBtn.style.display = "block";
  closeMenuBtn.style.display = "none";
});

// -------------Effect---------------//

gsap.from("#img32", {
  y: 400,
  scrollTrigger: {
    trigger: "#img1",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});

gsap.from("#text1", {
  y: 400,
  scrollTrigger: {
    trigger: "#sec-1",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});

// -------------Effect-2---------------//



gsap.from("#light", {
  y: 400,
  scrollTrigger: {
    trigger: "#imglight",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});


gsap.from("#imglight1", {
  y: 400,
  scrollTrigger: {
    trigger: "#light1",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});

gsap.from("#text2", {
  y: 400,
  scrollTrigger: {
    trigger: "#sec-2",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});


// -------------Effect-3---------------//



gsap.from("#key2", {
  y: 400,
  scrollTrigger: {
    trigger: "#key1",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});


gsap.from("#bubble2", {
  y: 400,
  scrollTrigger: {
    trigger: "#bubble1",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});

gsap.from("#bubble23", {
  y: 400,
  scrollTrigger: {
    trigger: "#bubble21",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});

gsap.from("#bubble24", {
  y: 400,
  scrollTrigger: {
    trigger: "#bubble32",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});

gsap.from("#text3", {
  y: 400,
  scrollTrigger: {
    trigger: "#sec-3",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});

// -------------Effect-4---------------//



gsap.from("#brain2", {
  y: 400,
  scrollTrigger: {
    trigger: "#brain1",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});


gsap.from("#hand2", {
  y: 400,
  scrollTrigger: {
    trigger: "#hand1",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});


gsap.from("#model2", {
  y: 400,
  scrollTrigger: {
    trigger: "#model1",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});






// -------------Effect-5---------------//



gsap.from("#rocket2", {
  y: 400,
  scrollTrigger: {
    trigger: "#rocket1",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});


gsap.from("#world2", {
  y: 400,
  scrollTrigger: {
    trigger: "#world1",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});


gsap.from("#business2", {
  y: 400,
  scrollTrigger: {
    trigger: "#business1",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});
// -------------Effect-6---------------//



gsap.from("#lights2", {
  y: 400,
  scrollTrigger: {
    trigger: "#lights51",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});


gsap.from("#booot2", {
  y: 400,
  scrollTrigger: {
    trigger: "#booot1",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});


gsap.from("#Industry2", {
  y: 400,
  scrollTrigger: {
    trigger: "#Industry1",
    start: "0 95%",
    end: "50% 55%",
    scrub: true,
  },
});