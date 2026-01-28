const messages = [
  "you are doing great 🌼",
  "nothing happened, and that’s okay",
  "this button is proud of you",
  "good job clicking",
  "rest is productive too ☁️",
  "this website believes in you"
];

const msg = document.getElementById("message");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * messages.length);
  msg.textContent = messages[random];
});
