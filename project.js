// Cards Section - Start
let Btn = document.querySelector("button");
let cards = document.getElementById("cards");
let num = 1;

Btn.onclick = function addCard() {
  let card = document.createElement("div");
  card.className = "card-container";
  card.innerHTML = `
  <div class="card-content">
    <div class="card-header">
    <h4>Device-${num++}</h4></div>
    <div class="time-container">
      <div class="time-output">
        <p>
          <span class="seconds">00</span>
          <span class="minutes">00</span>
        </p>
      </div>
      <button class="start">Start</button>
      <button class="stop">Stop</button>
      <button class="reset">Reset</button>
    </div>
  </div>
  `;
  let newCard = card.cloneNode(true);
  cards.appendChild(newCard);

  // Time Section - Start
  let BtnStart = document.querySelector(".start");
  let BtnStop = document.querySelector(".stop");
  let BtnReset = document.querySelector(".reset");
  let secondsOut = document.querySelector(".seconds");
  let minutesOut = document.querySelector(".minutes");
  let tens = 00;
  let seconds = 00;
  let minutes = 00;
  let interval;

  BtnStart.addEventListener("click", function () {
    clearInterval(interval);
    interval = setInterval(startTime, 10);
  });

  BtnStop.addEventListener("click", function () {
    clearInterval(interval);
  });

  BtnReset.addEventListener("click", function () {
    clearInterval(interval);
    seconds = "00";
    minutes = "00";
    secondsOut.innerHTML = seconds;
    minutesOut.innerHTML = minutes;
  });

  function startTime() {
    tens++;
    if (tens > 99) {
      seconds++;
      secondsOut.innerHTML = seconds;
      tens = 0;
    }
    if (seconds > 59) {
      minutes++;
      minutesOut.innerHTML = minutes;
      seconds = 0;
      secondsOut.innerHTML = seconds;
    }
  }
};
// Time Section - End
// Cards Section - End
