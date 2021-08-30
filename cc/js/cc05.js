// step의 인덱스와 graphic-item의 인덱스를 맞춰주어 상호작용하게 만든다.
// data-어쩌구로 맞춰주기
// 일일이 안 쓰고 루프 돌면서 인덱스 넣기

// 전역변수 사용을 회피하기 위해서 즉시실행 함수를 만들었음
(() => {
  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");
  // 현재 활성화된 (visible 클래스가 붙은) .graphic-item을 지정
  let currentItem = graphicElems[0];

  const io = new IntersectionObserver((entries, observer) => {});

  for (let i = 0; i < stepElems.length; i++) {
    io.observe(stepElems[i]);
    // stepElems[i].setAttribute("data-index", i);
    stepElems[i].dataset.index = i;
    // graphicElems[i].setAttribute("data-index", i);
    graphicElems[i].dataset.index = i;
  }

  // currentItem 활성화
  function activate() {
    currentItem.classList.add("visible");
  }

  // currentItem 비활성화
  function inactivate() {
    currentItem.classList.remove("visible");
  }

  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;

    for (let i = 0; i < stepElems.length; i++) {
      step = stepElems[i];
      // 현재 아이템의 위치와 크기 top,width
      boundingRect = step.getBoundingClientRect();
      // 범위 설정
      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        // if (currentItem) {
        inactivate();
        // }

        currentItem = graphicElems[step.dataset.index];
        activate();
      }
    }
  });
  activate();
})();
