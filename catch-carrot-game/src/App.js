const playBtn = document.querySelector(".playBtn");
const timerBoard = document.querySelector(".timer");
const field = document.querySelector(".field");
const restartBtn = document.querySelector(".popup button");
const popup = document.querySelector(".popup");
const result = document.querySelector(".result");
const carrotCountBoard = document.querySelector(".carrotCount")

let isStart = false;
let isPlay = false;
let timerLeft = 10;
let timer = null;
let carrotCount = 10;

const makeRandom = (min, max) => {
  const randomNum = Math.floor(Math.random() * max) + min;
  return randomNum;
};

const makeItem = () => {
  if (isStart === true) return;
  for (let i = 0; i < 10; i++) {
    const randomX = makeRandom(100, 900)
    const randomY = makeRandom(100, 800)
    const bug = document.createElement("img");
    bug.src = "../public/img/bug.png";
    bug.classList.add("bug");
    bug.style.top = `${randomY}px`;
    bug.style.left = `${randomX}px`;
    field.append(bug);
  }
  for (let i = 0; i < 10; i++) {
    const randomX = makeRandom(100, 900)
    const randomY = makeRandom(100, 800)
    const carrot = document.createElement("img");
    carrot.src = "../public/img/carrot.png";
    carrot.id = i;
    carrot.classList.add("carrot");
    carrot.style.top = `${randomY}px`;
    carrot.style.left = `${randomX}px`;
    field.append(carrot);
  }
  isStart = true;
};

const runTimer = () => {
  if (timerLeft === 0) {
    return;
  }
  if (!isPlay) {
    clearInterval(timer);
    return;
  }
  timerLeft === 10 ? timerBoard.innerText = `00:${timerLeft}` : timerBoard.innerText = `00:0${timerLeft}`;
  timer = setInterval(() => {
    timerLeft = timerLeft - 1;
    timerBoard.innerText = `00:0${timerLeft}`;
    if (timerLeft === 0) {
      result.innerText = "실패!"
      popup.classList.remove("hidden");
      clearInterval(timer);
    }
  }, 1000);
};

const handlePlayBtnClick = () => {
  if (timerLeft === 0) return ;
  isPlay === false ? playBtn.innerHTML = `<i class="fas fa-stop"></i>` : playBtn.innerHTML = `<i class="fas fa-play"></i>`
  isPlay === false ? isPlay = true : isPlay = false
  runTimer();
  makeItem();
};

const handleRestartClick = () => {
  window.location.reload();
};

const handleItemClick = e => {
  if (e.target.className === 'bug') {
    result.innerText = "실패!";
    popup.classList.remove('hidden');
    clearInterval(timer);
  }
  if (e.target.className === 'carrot') {
    carrotCount = carrotCount - 1;
    carrotCountBoard.innerText = carrotCount;
    const tobeDeleted = document.getElementById(e.target.id);
    tobeDeleted.remove();
  }
  if (carrotCount === 0) {
    result.innerText = "성공!";
    popup.classList.remove('hidden');
    clearInterval(timer);
  }
};

playBtn.addEventListener("click", handlePlayBtnClick);
restartBtn.addEventListener("click", handleRestartClick);
field.addEventListener("click", handleItemClick);
