(() => {
  const itemElems = document.querySelectorAll(".content-item");

  const io = new IntersectionObserver((entries, observer) => {});

  for (let i = 0; i < itemElems.length; i++) {
    io.observe(stepElems[i]);
    itemElems[i].dataset.index = i;
  }

  function activate() {
    currentItem.classList.add("visible");
  }

  function inactivate() {
    currentItem.classList.remove("visible");
  }

  window.addEventListener("keyup", (e) => {
    switch (e.code) {
      case "ArrowRight":
        if (true) {
          itemElems[i + 1];
        }
        break;
      case "ArrowLeft":
        if (true) {
          itemElems[i - 1];
        }
        break;
    }
    inactivate();

    activate();
  });
  activate();
})();

let changeBox = function () {
  document.querySelector(".content").style.height = "90vh";
  document.querySelector(".content").style.display = "block";
};
