const target = document.querySelector("#target");
const element = document.documentElement;
const vr = document.querySelector("#vr");
const hr = document.querySelector("#hr");

const x = target.width / 2;
const y = target.height / 2;

let waiting = false;
const throttle = (cb, delay) => {
  if (!waiting) {
    cb();
    waiting = true;
    setTimeout(() => {
      waiting = false;
    }, delay)
  }
};

const onTargetMousemove = e => {
  target.style.left = `${e.pageX - x}px`
  target.style.top = `${e.pageY - y}px`
  vr.style.left = `${e.pageX}px`
  hr.style.top = `${e.pageY}px`
};

element.addEventListener("mousemove", e => {
  throttle(() => onTargetMousemove(e), 0);
});
