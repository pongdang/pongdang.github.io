const diaryList = [
  { name: "HTML의 기본 구조와 태그 정리", url: "/studylog/21/12/13" },
  { name: "HTML 시맨틱 태그", url: "/studylog/21/12/14" },
  { name: "HTML form 태그", url: "/studylog/21/12/15" },
  { name: "MariaDB 설치하고 실행해보기", url: "/studylog/22/01/03" },
  { name: "React 설치하고 시작하기", url: "/studylog/22/01/10" },
];

function markPageNo(pageNo) {
  const buttonList = document.querySelectorAll(".navigation button");
  for (const button of buttonList) {
    if (button.innerText === `${Number(pageNo) + 1}`) {
      button.style.fontWeight = "bold";
      button.style.color = "var(--main-bg-color)";
    }
  }
}

function renderPage(pageNo) {
  const todayNav = document.querySelector(".todayNav");
  const list = diaryList.slice(pageNo * 10, (Number(pageNo) + 1) * 10);
  let contents = "";

  for (const diary of list) {
    const liTag = document.createElement("li");
    const aTag = document.createElement("a");
    aTag.classList.add("todayItem");
    aTag.innerText = diary.name;
    aTag.setAttribute("href", diary.url);
    liTag.append(aTag);
    contents += liTag.outerHTML;
  }
  todayNav.innerHTML = contents;

  markPageNo(pageNo);
}

const navigationElements = document.querySelectorAll(".navigation");
for (const el of navigationElements) {
  el.innerHTML = "";
  for (let j = 0; j < diaryList.length / 10; j++) {
    const btn = document.createElement("button");
    btn.addEventListener("click", () => {
      window.location.href = "/studylog/index.html?pageNo=" + j;
    });
    btn.innerText = j + 1;
    btn.classList.add("page");
    btn.classList.add("page1");
    btn.style.cursor = "pointer";
    el.append(btn);
  }
}

const queryList = window.location.search
  .slice(1)
  .split("&")
  .map((params) => params.split("="));

const pageNoQuery = queryList.find((query) => query[0] === "pageNo");
if (pageNoQuery != null) {
  renderPage(pageNoQuery[1]);
} else {
  renderPage(0);
}
