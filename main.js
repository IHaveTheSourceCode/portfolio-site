import "./style.css";
const animation_elements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
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
    threshold: 0.5,
  }
);

for (let i = 0; i < animation_elements.length; i++) {
  const el = animation_elements[i];

  observer.observe(el);
}

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
    threshold: 0.5,
  }
);
for (let i = 0; i < desc.length; i++) {
  const el = desc[i];

  descObserver.observe(el);
}
