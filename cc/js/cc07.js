const app = (state) => {
  window.addEventListener("keyup", (e) => {
    if (!state.showBook) return;
    closePage(state);
    if (e.code === "ArrowRight") {
      increasePageNo(state);
    } else if (e.code === "ArrowLeft") {
      decreasePageNo(state);
    }
    openPage(state);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#content-title")
    .addEventListener("click", () => toggleBox(state));
  // .addEventListener("click", function (e) {
  //   return toggleBox(state);
  // });

  const state = {
    showBook: false,
    pageNo: 0,
    pages: document.querySelectorAll(".content-item"),
    totalSize: document.querySelectorAll(".content-item").length,
  };
  app(state);
});

// NOTE: css에서 index를 확인하고 수정할 때 필요할 수 있음
// for (let i = 0; i < itemElems.length; i++) {
//   itemElems[i].dataset.index = i;
// }

function toggleBox(state) {
  state.showBook = !state.showBook;
  if (state.showBook) {
    document.querySelector(".content").classList.add("show");
    openPage(state);
  } else {
    document.querySelector(".content").classList.remove("show");
    closePage(state);
  }
  // 페이지를 닫으면 pageNo이 0으로.
  // state.pageNo = 0;
}
function openPage(state) {
  state.pages[state.pageNo].classList.add("visible");
  const pageNoEl = document.querySelector("#pageNo");
  pageNoEl.innerText = state.pageNo + 1 + " / " + state.totalSize;
}
function closePage(state) {
  state.pages[state.pageNo].classList.remove("visible");
  const pageNoEl = document.querySelector("#pageNo");
  pageNoEl.innerText = "";
}
function increasePageNo(state) {
  state.pageNo++;
  if (state.pageNo > state.totalSize - 1) {
    state.pageNo = state.totalSize - 1;
  }
}
function decreasePageNo(state) {
  state.pageNo--;
  if (state.pageNo < 0) {
    state.pageNo = 0;
  }
}
