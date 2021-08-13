const box = document.querySelector("#box");
const button1 = document.querySelector("#btn1");
const button3 = document.querySelector("#btn3");

for (let i = 0; i < 15; i++) {
  const item = document.createElement("div");
  item.style.width = "300px";
  item.style.height = "300px";
  item.style.marginTop = "5px";
  item.style.backgroundColor = "gray";
  box.append(item);
  const domRectY = item.getBoundingClientRect();
  if (domRectY.y >= 2143 && domRectY.y < 2448) {
    item.style.backgroundColor = "yellow";
    item.id = "special";
  }
};

const onCoordinateClick = event => {
  // console.log(event.path[0].getBoundingClientRect());
  // console.log('client', event.clientX, event.clientY);
  // console.log('page', event.pageX, event.pageY);
};

const onBtn1Click = () => {
  window.scrollBy(0, 100);
}

const onBtn2Click = () => {
  window.scroll(0, 1000);
}

const result = special.getBoundingClientRect();
const onBtn3Click = () => {
  window.scroll(0, result.top);
}

window.addEventListener("click", onCoordinateClick);
button1.addEventListener("click", onBtn1Click);
button2.addEventListener("click", onBtn2Click);
button3.addEventListener("click", onBtn3Click);
