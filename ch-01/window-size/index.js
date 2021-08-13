const screen = document.querySelector("#screen");

const updateSize = () => {
  screen.innerText = `
    window.screen: ${window.screen.width}, ${window.screen.height}
    window.outer: ${window.outerWidth}, ${window.outerHeight}
    window.inner: ${window.innerWidth}, ${window.innerHeight}
    documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}
  `;
};

window.addEventListener("resize", updateSize);

updateSize();
