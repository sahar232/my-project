
let currentPage = 0;
const pages = document.querySelectorAll(".page");
const showPage = (index) => {
  pages.forEach((p, i) => p.classList.toggle("active", i === index));
};

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "ahmad" && pass === "faraz") {
    showPage(1);
    drawHeart();
  } else {
    alert("your username is incorrect");
  }
});

document.getElementById("toBirthday").addEventListener("click", () => {
  showPage(2);
  startStickers();
  playMusic();
  showText();
});

function drawHeart() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let time = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(10, 10);
    ctx.beginPath();
    for (let t = 0; t <= Math.PI * 2; t += 0.01) {
      let x = 16 * Math.sin(t) ** 3;
      let y = -13 * Math.cos(t) + 5 * Math.cos(2 * t) + 2 * Math.cos(3 * t) + Math.cos(4 * t);
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = `rgba(255, 105, 180, ${0.6 + 0.4 * Math.sin(time)})`;
    ctx.fill();
    ctx.restore();
    time += 0.05;
    requestAnimationFrame(draw);
  }
  draw();
}

function startStickers() {
  const emojis = ["🎉", "🎂", "🎈", "🎁", "✨"];
  for (let i = 0; i < 30; i++) {
    let el = document.createElement("div");
    el.className = "sticker";
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDelay = Math.random() * 5 + "s";
    el.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    document.body.appendChild(el);
  }
}

let index = 0;
const texts = [
  "you are the reason of my happiness ❤️",
  "i see the menaing of life in you 🎉",
  "you are the best part of my life 🌸",
  "my little cuttieeeee angeeelaaaa! 🎂",
  "always be happy and healthy 🥰"
];

function showText() {
  const el = document.getElementById("loveText");
  el.textContent = texts[index];
  index = (index + 1) % texts.length;
  setTimeout(showText, 3000);
}

function playMusic() {
  const audio = document.getElementById("bgmusic");
  audio.play();
}
