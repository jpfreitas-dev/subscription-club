const root = document.documentElement;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

root.classList.add("js-enabled");

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8%" },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const subscribeLink = document.querySelector('a[href="#pricing"]');

subscribeLink?.addEventListener("click", (event) => {
  const pricing = document.querySelector("#pricing");
  if (!pricing) return;

  event.preventDefault();
  pricing.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth" });
});

const kit = document.querySelector(".kit");
const signatures = document.querySelector(".signatures");
const hasCoarsePointer = window.matchMedia("(hover: none), (pointer: coarse)");

const toggleActive = (element) => {
  if (!element) return;
  element.classList.toggle("is-active");
};

kit?.addEventListener("click", () => {
  if (hasCoarsePointer.matches) toggleActive(kit);
});

kit?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  event.preventDefault();
  toggleActive(kit);
});

signatures?.addEventListener("click", (event) => {
  if (!hasCoarsePointer.matches || event.target.closest("button")) return;
  toggleActive(signatures);
});

document.addEventListener("click", (event) => {
  if (!kit?.contains(event.target)) kit?.classList.remove("is-active");
  if (!signatures?.contains(event.target)) signatures?.classList.remove("is-active");
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  kit?.classList.remove("is-active");
  signatures?.classList.remove("is-active");
});
