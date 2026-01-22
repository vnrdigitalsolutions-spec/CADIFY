const sections = [
  "hero",
  "logos",
  "features",
  "courses",
  "cta"
];

const app = document.getElementById("app");

sections.forEach(section => {
  fetch(`sections/${section}.html`)
    .then(res => res.text())
    .then(html => {
      app.insertAdjacentHTML("beforeend", html);
    });
});

