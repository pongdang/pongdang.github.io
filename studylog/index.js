const diaryList = [
  { name: "21.12.13, 1일차", url: "/studylog/21/12/13" },
  { name: "21.12.14, 2일차", url: "/studylog/21/12/14" },
  { name: "21.12.15, 3일차", url: "/studylog/21/12/15" },
  { name: "21.12.16, 4일차", url: "/studylog/21/12/16" },
  { name: "21.12.17, 5일차", url: "/studylog/21/12/17" },
  { name: "21.12.20, 6일차", url: "/studylog/21/12/20" },
  { name: "22.01.03, MariaDB 설치하고 실행해보기", url: "/studylog/22/01/03" },
];

function markPageNo(pageNo) {
  const buttonList = document.querySelectorAll(".navigation button");
  for (const button of buttonList) {
    if (button.innerText === `${Number(pageNo) + 1}`) {
      button.style.fontWeight = "bold";
      button.style.color = "#660099";
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
