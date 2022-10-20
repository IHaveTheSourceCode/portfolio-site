import "./style.css";

// animate skills description section
const desc = document.querySelectorAll(
  ".animation-small-fade-from-right, .animation-small-fade-from-left, .project-wrapper, .animation-fade-from-bottom, .animate-on-scroll"
);
const descObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  },
  {
    threshold: 0.1,
  }
);
for (let i = 0; i < desc.length; i++) {
  const el = desc[i];

  descObserver.observe(el);
}

// add confetti on form submit
let confettiLimiter = 0;
const submitBtn = document.querySelector(".send-form-btn");
submitBtn.addEventListener("click", function () {
  if (checkFormValidity()) {
    var end = Date.now() + 15 * 200;

    var colors = ["#285ce1", "#ffffff"];

    if (confettiLimiter < 2) {
      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
    setTimeout(function () {
      confettiLimiter = 0;
    }, 5000);
    confettiLimiter++;
  }
});

function checkFormValidity() {
  let validity = true;
  let req = document.querySelectorAll(".req");
  req.forEach((input) => {
    if (input.value == "") {
      validity = false;
    }
  });
  return validity;
}

// enable smooth transitions
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
