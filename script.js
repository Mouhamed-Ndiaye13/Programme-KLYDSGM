// Date cible (exemple : 31 Décembre 2025 à 00h00)
const eventDate = new Date("nov 28, 2025 00:00:00").getTime();

const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdownEl.innerHTML = "Programme terminé 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
