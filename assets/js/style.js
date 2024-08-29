const menuToggleBtn = document.querySelector(".menu-toggle-btn");
const navMenu = document.querySelector(".nav-menu");
const closeMenuBtn = document.querySelector(".mobile-menu-close");
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
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

gsap.registerPlugin(ScrollTrigger);

const scrollLimit = 20; // Define the scroll limit in pixels

// document.querySelectorAll(".parallax").forEach((section, index) => {
//   ScrollTrigger.create({
//     trigger: section,
//     start: "top 99%",
//     end: "bottom 1%",
//     onEnter: (self) => {
//       const scrollPos = window.scrollY;
//       const sectionTop = section.offsetTop;
//       if (Math.abs(scrollPos - sectionTop) > scrollLimit) {
//         gsap.to(window, {
//           scrollTo: { y: sectionTop, autoKill: false },
//           duration: 1.5,
//           ease: "power2.inOut",
//         });
//       }
//     },
//   });

//   ScrollTrigger.create({
//     trigger: section,
//     start: "100% 1%",
//     end: "0% 99%",
//     onEnterBack: (self) => {
//       const scrollPos = window.scrollY;
//       const sectionTop = section.offsetTop;
//       if (Math.abs(scrollPos - sectionTop) > scrollLimit) {
//         gsap.to(window, {
//           scrollTo: { y: sectionTop, autoKill: false },
//           duration: 1.5,
//           ease: "power2.inOut",
//         });
//       }
//     },
//   });
// });

document.querySelectorAll(".parallax").forEach((parallaxSection, sectionIndex) => {
  parallaxSection.querySelectorAll(".parallax-image>div").forEach((imageDiv) => {
    ScrollTrigger.create({
      trigger: parallaxSection,
      start: "top 10%",
      end: "bottom 10%",
      scrub: true,
      onEnter: () => {
        gsap.to(imageDiv, { scale: 1.3, duration: 40 });
      },
      onLeaveBack: () => {
        gsap.to(imageDiv, { scale: 1, duration: 40 });
      },
    });
  });
  if (sectionIndex!= 0) {
    const bg = parallaxSection.querySelector(".parallax-bg>div");

    ScrollTrigger.create({
      trigger: parallaxSection,
      start: "top 10%",
      end: "bottom 10%",
      scrub: true,
      onEnter: () => {
        gsap.to(bg, { scale: 1.3, duration: 15 });
      },
      onLeaveBack: () => {
        gsap.to(bg, { scale: 1, duration: 15 });
      },
    });
  }


  const bg2 = parallaxSection.querySelector(".parallax-bg");
  ScrollTrigger.create({
    trigger: parallaxSection,
    start: "0% 100%",
    end: "0% 50%",
    onEnter: () => {
      gsap.to(bg2, { opacity: 1, duration: 1 });
    },
    onLeaveBack: () => {
      gsap.to(bg2, { opacity: 0, duration: 1 });
    },
  });

  const txt = parallaxSection.querySelector(".parallax-textbox");
  gsap.fromTo(
    txt,
    { y: 1600 }, // Start slightly below and invisible
    {
      y: 0,
      scrollTrigger: {
        trigger: parallaxSection, // Trigger on the parent section
        start: "50% 90%",
        end: "50% 60%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    }
  );

  const contentMain = parallaxSection.querySelector(".parallax-content");
  const content = parallaxSection.querySelector(".parallax-content>div");
  if (contentMain & content) {
    gsap.to(content, {
      scrollTrigger: {
        trigger: contentMain, // The parallax section ID
        start: "top top", // When the top of the section reaches the top of the viewport
        end: "+=120%", // Extend the scroll time by 200% of the viewport height
        pin: true, // Pin the content in place
        scrub: true,
      },
    });
  }
 
});

// section 1

gsap.fromTo(
  "#sec-1 .parallax-flower img",
  { opacity: 0, y: 400 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-1",
      start: "30% 100%",
      end: "40% 50%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

// section 2

gsap.fromTo(
  "#sec-2 .parallax-light img",
  { opacity: 0, y: 800 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-2",
      start: "50% 100%",
      end: "50% 50%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-2 .parallax-light img",
  { y: 0 },
  {
    y: -400,
    scrollTrigger: {
      trigger: "#sec-2",
      start: "50% 20%",
      end: "50% 0%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-2 .parallax-hand img",
  { opacity: 0, y: 1200 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-2",
      start: "top 100%",
      end: "50% 65%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-2 .parallax-hand img",
  { opacity: 1, y: 0 },
  {
    opacity: 0,
    y: 200,
    scrollTrigger: {
      trigger: "#sec-2",
      start: "50% 40%",
      end: "50% 0%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

// section 3

gsap.fromTo(
  "#sec-3 .parallax-key img",
  { opacity: 0, y: 800 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-3",
      start: "top 100%",
      end: "50% 40%",
      toggleActions: "play none none reverse",
    },
  }
);
gsap.fromTo(
  "#sec-3 .parallax-key img",
  { opacity: 1, y: 0 },
  {
    opacity: 0,
    y: -400,
    scrollTrigger: {
      trigger: "#sec-3",
      start: "50% 30%",
      end: "50% 0%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-3 .parallax-bubble1 img",
  { opacity: 0, y: 800 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-3",
      start: "top 100%",
      end: "50% 55%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-3 .parallax-bubble1 img",
  { opacity: 1, y: 0 },
  {
    opacity: 0,
    y: 400,
    scrollTrigger: {
      trigger: "#sec-3",
      start: "50% 30%",
      end: "50% 0%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-3 .parallax-bubble2 img",
  { opacity: 0, y: 800 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#sec-3",
      start: "0% 100%",
      end: "50% 50%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-3 .parallax-bubble2 img",
  { opacity: 1, y: 0 },
  {
    opacity: 0,
    y: 400,
    scrollTrigger: {
      trigger: "#sec-3",
      start: "50% 30%",
      end: "50% 0%",
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
      end: "50% 40%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-3 .parallax-bubble3 img",
  { opacity: 1, y: 0 },
  {
    opacity: 0,
    y: 200,
    scrollTrigger: {
      trigger: "#sec-3",
      start: "50% 30%",
      end: "50% 0%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

// section 4


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
  "#sec-4 .parallax-brain img",
  { opacity: 1, y: 0 },
  {
    opacity: 0,
    y: -400,
    scrollTrigger: {
      trigger: "#sec-4",
      start: "50% 30%",
      end: "50% 0%",
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

gsap.fromTo(
  "#sec-4 .parallax-hand-img img",
  { opacity: 1, y: 0 },
  {
    opacity: 0,
    y: 400,
    scrollTrigger: {
      trigger: "#sec-4",
      start: "50% 30%",
      end: "50% 0%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

// section 5

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
    y: -400,
    scrollTrigger: {
      trigger: "#sec-5",
      start: "50% 30%",
      end: "50% 0%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  "#sec-5 .parallax-smoke img",
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
  "#sec-5 .parallax-smoke img",
  { y: 0, opacity: 1 },
  {
    y: 200, scale: 1, opacity: 0,
    scrollTrigger: {
      trigger: "#sec-5",
      start: "50% 55%",
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
gsap.fromTo(
  "#sec-5 .parallax-world img",
  { opacity: 1, scale: 1 },
  {
    opacity: 0,
    scale: 0.2,
    scrollTrigger: {
      trigger: "#sec-6", // Trigger on the parent section
      start: "0% 100%", // When the top of the section hits the top of the viewport
      end: "20% 60%", // When the bottom of the section hits the top of the viewport
      scrub: true,
    },
  }
);
// section 6



gsap.fromTo(
  "#sec-6 .parallax-lights img",
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

$(document).ready(function () {
  var $slider = $(".your-slider");

  var slideContentData = [
    {
      mainHeading:
        "Public Sector Solutions: Tailored Speed, Security, and Efficiency",
      title2: "Public Sector",
      description:
        "Partnering with public sector and government entities, we specialize in tailoring solutions that prioritize speed, agility, and reliability. Our rapid deployments ensure seamless operations, coupled with robust security, compliance, and streamlined workflows, empowering efficient government processes.",
    },
    {
      mainHeading:
        "EmpowerED: Bridging Knowledge Gaps with Innovative Solutions",
      title2: "Education",
      description:
        "Cultivating collaboration with our Education sector clients, we deliver modern solutions that empower scalable results. Our technology enhances learning experiences with intuitive management systems, automation, and personalized tools, adept at tracking student success and bridging knowledge gaps effectively.",
    },
    {
      mainHeading:
        "Empowering Energy Evolution: Where Intelligence Fuels Sustainability.",
      title2: "Energy",
      description:
        " We wield the transformative power of AI to reshape the energy landscape. Our solutions optimize operations, bolster resilience, and drive sustainability. Join us in pioneering a future where every energy decision is fueled by intelligence and every action propels us towards a greener, smarter world.",
    },
    {
      mainHeading:
        "Elevating Healthcare with AI: Precision, Privacy, and Compliance.",
      title2: "Healthcare",
      description:
        "At the forefront of healthcare innovation, we harness AI prowess to drive superior outcomes and cost reduction through data-driven insights while safeguarding patient privacy. Leveraging advanced algorithms and tailored solutions, we optimize clinical workflows, detect chronic diseases early, and enhance patient experiences through personalized treatments and direct communication.",
      description2:
        "Join us in reshaping healthcare, where precision, efficiency, and empowerment converge to drive transformative change grounded in trust and integrity.",
    },
    {
      mainHeading:
        "Powering Progress: AI Solutions for Enhanced Efficiency and Safety in Oil & Gas Exploration.",
      title2: "Chemical, Oil & Gas",
      description:
        "We pioneer the integration of advanced AI technologies to unlock unprecedented efficiency and sustainability while prioritizing safety and compliance.",
      description2:
        "Our tailored solutions bolster predictive maintenance, mitigate operational risks, and streamline supply chain logistics, ensuring uninterrupted operations and maximizing asset value. Committed to industry regulations and safety standards, we uphold compliance at every stage, safeguarding environmental integrity and community well-being.",
    },
    {
      mainHeading:
        "Precision Revolution: AI Solutions Powering Manufacturing Excellence.",
      title2: "Manufacturing & Automotive",
      description:
        "Our AI solutions drive efficiency, precision, and progress. Through seamless integration of advanced algorithms and data analytics, we optimize production processes, enhance product quality, and streamline supply chain operations.",
      description2:
        "We empower manufacturers to predict maintenance needs, mitigate risks, and maximize asset utilization, ensuring unparalleled operational excellence and better connect data across mission-critical operations to improve efficiencies and customer experiences.",
    },
    {
      mainHeading: "Unleashing Creativity: Where Innovation Meets Immersion.",
      title2: "Media & Entertainment",
      description:
        "With seamless integration of advanced algorithms and data analytics, we empower our clients to revolutionize content creation, distribution, and audience engagement. From personalized recommendations to real-time content optimization, our solutions redefine the boundaries of entertainment, ensuring immersive experiences that captivate and inspire.",
      description2:
        "Committed to excellence and customer satisfaction, we’re shaping the future of entertainment and media, where every moment is elevated, every story is amplified, and every connection is unforgettable.",
    },
    {
      mainHeading:
        "Elevating Operations: AI Solutions for Seamless Connectivity.",
      title2: "Technology & Telecommunications",
      description:
        "With a strategic blend of advanced algorithms and data analytics, we revolutionize call centers, chatbot functionalities, and connectivity solutions. By resolving bottlenecks associated with operational overhead, we streamline processes, optimize resource allocation, and elevate service quality.",
      description2:
        "Whether it’s automating routine tasks, enhancing response times, or ensuring seamless connectivity, our solutions redefine industry standards, empowering businesses to thrive in an ever-evolving digital ecosystem.",
    },
    {
      mainHeading:
        "Navigate Trends, Drive Success: AI Driving Growth and Engagement.",
      title2: "Retail & e-Commerce",
      description:
        "Our AI solutions revolutionize operations, from personalized content creation and trend tracking to boosting sales.",
      description2:
        "By decoding consumer behaviors and trends, we empower brands to craft captivating experiences that drive growth, redefine industry standards, and deliver tailor-made experiences that captivate and convert.",
    },
    {
      mainHeading: "AI at the Helm: Efficiency, Security, and Customization.",
      title2: "Financial Services",
      description:
        "We harness AI to revolutionize automated operations, fraud detection, and data analytics. Our customizable and scalable technology spans across all facets of financial services, from risk and pricing applications to personalized customer journeys.",
    },
    {
      mainHeading: "Pioneering Partnerships: Innovation for Every Industry.",
      title2: "Professional Services",
      description:
        "We specialize in delivering cutting-edge AI solutions tailored to meet the diverse needs of insurance companies, IT firms, legal practices, and more. Our expertise lies in harnessing AI to optimize operational workflows, enhance customer experiences, & drive strategic decision-making. Our customizable AI solutions empower professionals to unlock new levels of efficiency and innovation in their respective fields.",
    },
  ];

  $(document).ready(function() {
    var $slider = $('.your-slider');

    function updateBackgroundAndContent(slideIndex) {
      var activeSlide = $('.slick-slide[data-slick-index="' + slideIndex + '"]');
      var bgImage = activeSlide.css("background-image");

      $(".slider-section .parallax-bg > div").css("background-image", bgImage);
      var slideData = slideContentData[slideIndex];
      var slideContent = activeSlide.find("h3").text();
      var contentHtml =
        "<h3 class='mainHeading'>" +
        slideData.mainHeading +
        "</h3>" +
        "<h3 class='title2'>" +
        slideData.title2 +
        "</h3>" +
        "<p class='description'>" +
        slideData.description +
        "</p>";

      // Conditionally add description2
      if (slideData.description2) {
        contentHtml +=
          "<p class='description2'>" + slideData.description2 + "</p>";
      }

      // Update the .content-div with the prepared content
      $(".content-div").html(contentHtml);
    }

    // Initialize the slider
    $slider.slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000000,
      arrows: false, // Disable default arrows
      initialSlide: 0,
      customPaging: function (slider, i) {
        return '<button data-slide="' + (i + 1) + '"></button>';
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // Handle custom arrows
    $('#left').on('click', function() {
      $slider.slick('slickPrev');
    });

    $('#right').on('click', function() {
      $slider.slick('slickNext');
    });

    $slider.on("afterChange", function (event, slick, currentSlide) {
      $(".slick-slide").removeClass("active");
      $(".slick-active").first().addClass("active");
      updateBackgroundAndContent(currentSlide);
    });

    $slider.on("click", ".slick-slide", function (event) {
      var slideIndex = $(this).data("slick-index");
      $slider.slick("slickGoTo", slideIndex);
    });

    // Go to the initial slide
    $slider.slick("slickGoTo", 0);
  });
});

  // ----------------- seclect-hover -------------------

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.hero-form');
  const cards = document.querySelectorAll('.card1');
  
  form.addEventListener('change', function (event) {
    if (event.target && event.target.id === 'your-reason') {
      // Remove 'active' class from all cards
      cards.forEach(card => card.classList.remove('active'));
      
      // Get the selected value
      const selectedValue = event.target.value;
      
      // Add 'active' class to the corresponding card
      const activeCard = document.getElementById(`${selectedValue}-card`);
      if (activeCard) {
        activeCard.classList.add('active');
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.hero-form');
  const cards = document.querySelectorAll('.card1');

  form.addEventListener('change', function (event) {
    if (event.target && event.target.id === 'your-reason') {
      // Remove 'active' class from all cards
      cards.forEach(card => card.classList.remove('active'));

      // Get the selected value
      const selectedValue = event.target.value;

      // Add 'active' class to the corresponding card
      const activeCard = document.getElementById(`${selectedValue}-card`);
      if (activeCard) {
        activeCard.classList.add('active');
      }
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.hero-form');
  const cards = document.querySelectorAll('.card1');
  const selectElement = document.getElementById('your-reason');

  // Function to set the selected option in the dropdown
  function setSelectValue(value) {
    selectElement.value = value;
    // Trigger a change event to update any listeners
    selectElement.dispatchEvent(new Event('change'));
  }

  // Handle card clicks
  cards.forEach(card => {
    card.addEventListener('click', function () {
      // Remove 'active' class from all cards
      cards.forEach(c => c.classList.remove('active'));

      // Add 'active' class to the clicked card
      this.classList.add('active');

      // Get the id of the clicked card and map it to the select option value
      const cardId = this.id;
      let optionValue = '';

      switch (cardId) {
        case 'ai-expert-card':
          optionValue = 'ai-expert';
          break;
        case 'partnership-card':
          optionValue = 'partnership';
          break;
        case 'employment-card':
          optionValue = 'employment';
          break;
        case 'general-card':
          optionValue = 'general';
          break;
      }

      // Set the selected value in the dropdown
      if (optionValue) {
        setSelectValue(optionValue);
      }
    });
  });

  // Handle form dropdown changes
  form.addEventListener('change', function (event) {
    if (event.target && event.target.id === 'your-reason') {
      // Remove 'active' class from all cards
      cards.forEach(card => card.classList.remove('active'));

      // Get the selected value
      const selectedValue = event.target.value;

      // Add 'active' class to the corresponding card
      const activeCard = document.getElementById(`${selectedValue}-card`);
      if (activeCard) {
        activeCard.classList.add('active');
      }
    }
  });
});

// ------------------seclect-hover-end-------------------



