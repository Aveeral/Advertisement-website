// Typewriter Effect
const text = "Hi, I'm Aveeral — a Web Dev in the Making!";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
window.onload = typeWriter;

// Timeline Scroll Animation
const items = document.querySelectorAll('.timeline-item');
function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) item.classList.add('show');
  });
}
window.addEventListener('scroll', revealOnScroll);

// Dark Mode Toggle
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

