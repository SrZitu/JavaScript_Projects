const allBoxes = document.querySelectorAll(".box");

window.addEventListener("scroll", callingBox);

callingBox();

function callingBox() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  allBoxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
