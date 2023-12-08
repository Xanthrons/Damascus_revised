// menu_open
let menuOpen = new gsap.timeline({
  paused: true,
});

menuOpen.to(".menu-container", {
  zIndex: 100,
  duration: 0.1,
});
menuOpen
  .to(".menu-container", {
    opacity: 1,
  })
  .from(
    ".menu-close-section, .inner-menu-close h1",
    {
      y: "100%",
      duration: 0.8,
      stagger: {
        amount: 0.2,
      },
    },
    "<"
  )
  .from(
    ".menu-about-section, .menu-blogs-section, .menu-contact-section",
    {
      x: "100%",
      duration: 0.8,
      stagger: {
        amount: 0.4,
        from: "end",
      },
    },
    "<"
  );

function menuopen() {
  menuOpen.play() ? menuOpen.restart() : menuOpen.play();
}
function menuclose() {
  gsap
    .timeline()
    .to(".menu-container", {
      opacity: 0,
    })
    .to(".menu-container", {
      zIndex: -10,
    });
}
// men_open end

// let text;
// function runSplit() {
//   let currentElement = $(".split_line");
//   text = new SplitType(currentElement, { types: "lines,words" });

//   $(".line").append("<div class='line_mask'></div>");
//   runAnimation();
// }
// runSplit();

// window.addEventListener("resize", function () {
//   text.revert();
//   runSplit();
// });

// function runAnimation() {
//   $(".line").each(function (index) {
//     let triggerElement = $(this);
//     let targetElement = $(this).find(".line_mask");
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: triggerElement,
//         start: "top center",
//         end: "bottom center",
//         scrub: 1,
//       },
//     });
//     tl.to(targetElement, {
//       width: "0%",
//       duration: 1,
//     });
//   });
// }
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false,
});

// Header Text Hide
$(".header_text-move").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "-200% top",
      end: "80% top",
      scrub: 0.8,
    },
  });
  tl.to(targetElement, {
    y: "100%",
    duration: 1,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  Splitting();
  // luxy.init();
  gsap.registerPlugin(ScrollTrigger);

  const gsapSq = gsap.utils.toArray(".section-title__square");
  gsapSq.forEach((gSq, i) => {
    const rotat = gsap.from(gSq, 3, { rotation: 720 });
    ScrollTrigger.create({
      trigger: gSq,
      animation: rotat,
      start: "top bottom",
      scrub: 1.9,
    });
  });

  //about
  function about() {
    gsap.from(".about__img", {
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        scrub: 1.9,
      },
      yPercent: 80,
    });
    gsap.from(".about__img img", {
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        scrub: 1.9,
      },
      scale: 1.6,
    });
    gsap.to(".about__txt", {
      scrollTrigger: {
        trigger: ".about__wrapp",
        start: "top bottom",
        scrub: 1.9,
      },
      yPercent: 50,
    });
  }
  about();

  //benefits
  function benefits() {
    gsap.from(".benefits__num", {
      x: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
      scrollTrigger: {
        trigger: ".benefits__list",
        start: "top bottom",
        scrub: 1.9,
      },
    });
  }
  benefits();
});
const pop = gsap.timeline({
  paused: "true",
});
pop.to(".popup-template", {
  duration: 0.8,
  opacity: 1,
  y: 0,
  scale: 1,
  ease: Power4.easeOut,
});
pop.from(
  ".popup-top, .form-row1 h1, .form-row1 input, .form-row1 textarea, .submit-popup",
  {
    duration: 0.5,
    opacity: 0,
    y: 15,
    stagger: {
      amount: 0.4,
    },
  },
  "-=.3"
);

function open_pop() {
  pop.play();
}
function close_pop() {
  pop.reverse();
}
