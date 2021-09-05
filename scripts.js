function updateStorage(value) {
  localStorage.setItem("count", value);
}

function contador() {
  let count = localStorage.getItem("count");
  if(count <= 0 || count > 60 || count === null) return "00:00";

  const countInSeconds = (count * 60) - 1;
  const minutes = Math.trunc(countInSeconds / 60);
  const seconds = parseInt((countInSeconds - (minutes * 60)));

  updateStorage(countInSeconds / 60);

  let stringMinutes = minutes;
  let stringSeconds = seconds;

  if (minutes < 10) {
    stringMinutes = `0${minutes}`
  }

  if (seconds < 10) {
    stringSeconds = `0${seconds}`
  }
  return `${stringMinutes}:${stringSeconds}`;
}

function reloadContador(display) {
  setInterval(function() {
    display.textContent = contador()
  }, 1000);
}

window.onload = function() {
  const display = document.querySelector(".count");
  reloadContador(display);
}

document.querySelector(".submit").addEventListener("click", () => {
  const [input] = document.getElementsByName("minutes");
  updateStorage(input.value)

  document.documentElement.requestFullscreen();
});
