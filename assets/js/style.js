const menuToggleBtn = document.querySelector(".menu-toggle-btn");
const navMenu = document.querySelector(".nav-menu");
const closeMenuBtn = document.querySelector(".mobile-menu-close");
gsap.registerPlugin(ScrollTrigger);

menuToggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  document.body.style.overflow = "hidden";
  closeMenuBtn.style.display = "block";
});

closeMenuBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
  navMenu.classList.add(".close-menu");
  document.body.style.overflow = "auto";
  menuToggleBtn.style.display = "block";
  closeMenuBtn.style.display = "none";
});

// section 1
gsap.to("#sec-1 .parallax-bg", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#sec-1", // Trigger on the parent section
    start: "0% 100%", // When the top of the section hits the top of the viewport
    end: "20% 40%", // When the bottom of the section hits the top of the viewport
    scrub: true,
  },
});
gsap.fromTo(
  "#sec-1 .parallax-textbox",
  { opacity: 0, y: 800 }, // Start slightly below and invisible
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-1", // Trigger on the parent section
      start: "0% 100%",
      end: "40% 40%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);
gsap.fromTo(
  "#sec-1 .parallax-image img",
  { opacity: 0, y: 400 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-1",
      start: "0% 100%",
      end: "40% 30%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

// section 2
gsap.to("#sec-2 .parallax-bg", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#sec-2", // Trigger on the parent section
    start: "0% 100%", // When the top of the section hits the top of the viewport
    end: "20% 40%", // When the bottom of the section hits the top of the viewport
    scrub: true,
  },
});
gsap.fromTo(
  "#sec-2 .parallax-textbox2",
  { opacity: 0, y: 1000 }, // Start slightly below and invisible
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-2", // Trigger on the parent section
      start: "0% 100%",
      end: "70% 40%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);
gsap.fromTo(
  "#sec-2 .parallax-light img",
  { opacity: 0, y: 800 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-2",
      start: "0% 100%",
      end: "20% 50%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-2 .parallax-hand img",
  { opacity: 0, y: 400 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-2",
      start: "0% 100%",
      end: "60% 40%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

// section 3
gsap.to("#sec-3 .parallax-bg", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#sec-3", // Trigger on the parent section
    start: "0% 100%", // When the top of the section hits the top of the viewport
    end: "20% 40%", // When the bottom of the section hits the top of the viewport
    scrub: true,
  },
});
gsap.fromTo(
  "#sec-3 .parallax-textbox3",
  { opacity: 0, y: 1000 }, // Start slightly below and invisible
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-3", // Trigger on the parent section
      start: "0% 100%",
      end: "70% 40%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);
gsap.fromTo(
  "#sec-3 .parallax-key img",
  { opacity: 0, y: 800 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-3",
      start: "0% 100%",
      end: "20% 50%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-3 .parallax-bubble img",
  { opacity: 0, y: 600 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-3",
      start: "0% 100%",
      end: "60% 40%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-3 .parallax-bubble2 img",
  { opacity: 0, y: 500 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-3",
      start: "0% 100%",
      end: "40% 40%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);
gsap.fromTo(
  "#sec-3 .parallax-bubble3 img",
  { opacity: 0, y: 400 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-3",
      start: "0% 100%",
      end: "80% 40%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

// section 4
gsap.to("#sec-4 .parallax-bg", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#sec-4", // Trigger on the parent section
    start: "0% 100%", // When the top of the section hits the top of the viewport
    end: "20% 40%", // When the bottom of the section hits the top of the viewport
    scrub: true,
  },
});

gsap.fromTo(
  "#sec-4 .parallax-textbox4",
  { opacity: 0, y: 1000 }, // Start slightly below and invisible
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-4", // Trigger on the parent section
      start: "0% 100%",
      end: "70% 40%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);
gsap.fromTo(
  "#sec-4 .parallax-brain img",
  { opacity: 0, y: 700 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-4",
      start: "0% 100%",
      end: "60% 50%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-4 .parallax-hand-img img",
  { opacity: 0, y: 500 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-4",
      start: "0% 100%",
      end: "40% 60%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

// section 5
gsap.to("#sec-5 .parallax-bg", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#sec-5", // Trigger on the parent section
    start: "0% 100%", // When the top of the section hits the top of the viewport
    end: "20% 40%", // When the bottom of the section hits the top of the viewport
    scrub: true,
  },
});

gsap.fromTo(
  "#sec-5 .parallax-textbox5",
  { opacity: 0, y: 1000 }, // Start slightly below and invisible
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-5", // Trigger on the parent section
      start: "0% 100%",
      end: "70% 40%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);
gsap.fromTo(
  "#sec-5 .parallax-rocket img",
  { opacity: 0, y: 700 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-5",
      start: "0% 100%",
      end: "40% 60%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-5 .parallax-rocket img",
  { y: 0 },
  {
    y: -700,
    scrollTrigger: {
      trigger: "#sec-5",
      start: "50% 40%",
      end: "50% 0%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-5 .parallax-world img",
  { opacity: 0, y: 400 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-5",
      start: "0% 100%",
      end: "80% 60%",
      scrub: true,
      toggleActions: "play none none reverse",    
    },
  }
);
gsap.to("#sec-5 .parallax-world img", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#sec-6", // Trigger on the parent section
    start: "0% 100%", // When the top of the section hits the top of the viewport
    end: "20% 60%", // When the bottom of the section hits the top of the viewport
    scrub: true,
  },
});
// section 6

gsap.to("#sec-6 .parallax-bg", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#sec-6", // Trigger on the parent section
    start: "0% 100%", // When the top of the section hits the top of the viewport
    end: "20% 40%", // When the bottom of the section hits the top of the viewport
    scrub: true,
  },
});

gsap.fromTo(
  "#sec-6 .parallax-textbox6",
  { opacity: 0, y: 1000 }, // Start slightly below and invisible
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-6", // Trigger on the parent section
      start: "0% 100%",
      end: "70% 40%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);
gsap.fromTo(
  "#sec-6 .parallax-lights5 img",
  { opacity: 0, y: 750 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-6",
      start: "0% 100%",
      end: "50% 50%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-6 .parallax-booot img",
  { opacity: 0, y: 400 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-6",
      start: "0% 100%",
      end: "50% 30%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);
