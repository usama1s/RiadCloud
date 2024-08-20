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

// Animate the background transitions
document.querySelectorAll(".parallax-bg").forEach((bg, index) => {
  gsap.to(bg, {
    opacity: 1,
    scrollTrigger: {
      trigger: bg.parentNode, // Trigger on the parent section
      start: "20% 100%", // When the top of the section hits the top of the viewport
      end: "80% 0%", // When the bottom of the section hits the top of the viewport
      scrub: true,
    },
  });
});

// Animate the content movement and image fade in/out
document.querySelectorAll(".parallax-content").forEach((content) => {
  gsap.fromTo(
    content,
    { opacity: 0, y: 50 }, // Start slightly below and invisible
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: content.parentNode, // Trigger on the parent section
        start: "0% 100%",
        end: "40% center",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    content.querySelector("img"),
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: content.parentNode,
        start: "top center",
        end: "bottom center",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    }
  );
});

// -------------Effect---------------//

gsap.from("#flower-img", {
  y: 700,
  scrollTrigger: {
    trigger: "#sec-1",
    start: "0 100%",
    end: "95% 50%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

gsap.from("#sec-2-text", {
  y: 400,
  scrollTrigger: {
    trigger: "#sec-1",
    start: "0 100%",
    end: "90% 50%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

// -------------Effect-2---------------//

gsap.from("#mind-img", {
  y: 700,
  scrollTrigger: {
    trigger: "#sec-2",
    start: "20% 60%",
    end: "90% 90%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

gsap.from("#bootrobo-img", {
  y: 400,
  scrollTrigger: {
    trigger: "#sec-2",
    start: "0% 90%",
    end: "90% 30%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

gsap.from("#sec-2-text", {
  y: 500,
  scrollTrigger: {
    trigger: "#sec-2",
    start: "0 75%",
    end: "90% 50%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

// -------------Effect-3---------------//

gsap.from("#key-img", {
  y: 900,
  scrollTrigger: {
    trigger: "#sec-3",
    start: "20% 60%",
    end: "90% 90%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

gsap.from("#bubble1-img", {
  y: 400,
  scrollTrigger: {
    trigger: "#sec-3",
    start: "70 95%",
    end: "90% 10%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

gsap.from("#bubble2-img", {
  y: 600,
  scrollTrigger: {
    trigger: "#sec-3",
    start: "0 95%",
    end: "90% 45%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

gsap.from("#bubble3-img", {
  y: 500,
  scrollTrigger: {
    trigger: "#sec-3",
    start: "0 50%",
    end: "90% 90%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

gsap.from("#text3", {
  y: 600,
  scrollTrigger: {
    trigger: "#sec-3",
    start: "0 75%",
    end: "90% 50%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

// -------------Effect-4---------------//

gsap.from("#brain-img", {
  y: 600,
  scrollTrigger: {
    trigger: "#sec-4",
    start: "20% 60%",
    end: "90% 90%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

gsap.from("#hand-img", {
  y: 500,
  scrollTrigger: {
    trigger: "#sec-4",
    start: "0 75%",
    end: "90% 50%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

gsap.from("#sec-4-text", {
  y: 600,
  scrollTrigger: {
    trigger: "#sec-4",
    start: "0 75%",
    end: "90% 50%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

// -------------Effect-5---------------//

gsap.from("#rocket", {
  y: 800,
  scrollTrigger: {
    trigger: "#sec-5",
    start: "0% 100%",
    end: "70% 50%",
    scrub: true,
  },
});

gsap.from("#world", {
  y: 400,
  scrollTrigger: {
    trigger: "#world1",
    start: "0% 35%",
    end: "90% 95%",
    scrub: true,
  },
});

gsap.from("#sec-5-text", {
  y: 600,
  scrollTrigger: {
    trigger: "#sec-5",
    start: "0 75%",
    end: "90% 50%",
    scrub: true,
  },
});
// -------------Effect-6---------------//

gsap.from("#lights-img", {
  y: 900,
  scrollTrigger: {
    trigger: "#sec-6",
    start: "10% 60%",
    end: "90% 90%",
    scrub: true,
  },
});

gsap.from("#booot-img", {
  y: 300,
  scrollTrigger: {
    trigger: "#sec-6",
    start: "50 50%",
    end: "90% 85%",
    scrub: true,
  },
});

gsap.from("#sec-6-text", {
  y: 600,
  scrollTrigger: {
    trigger: "#sec-6",
    start: "0 75%",
    end: "90% 50%",
    scrub: true,
  },
});
