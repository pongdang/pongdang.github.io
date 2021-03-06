const diaryList = [
  { name: "21.08.25, 평균구하기", url: "/pongtoday/21/08/25" },
  { name: "21.08.26, 하샤드 수", url: "/pongtoday/21/08/26" },
  { name: "21.08.27, 핸드폰 번호 가리기", url: "/pongtoday/21/08/27" },
  { name: "21.08.28, x만큼 간격이 있는 n개의 숫자", url: "/pongtoday/21/08/28" },
  { name: "21.08.29, 작은 수 제거하기", url: "/pongtoday/21/08/29" },
  { name: "21.08.31, 정수 제곱근 판별", url: "/pongtoday/21/08/31" },
  { name: "21.09.23, 이상한 문자 만들기", url: "/pongtoday/21/09/23" },
  { name: "21.09.24, 내적", url: "/pongtoday/21/09/24" },
  { name: "21.09.25, 완주하지 못한 선수", url: "/pongtoday/21/09/25" },
  { name: "21.09.26, 없는 숫자 더하기", url: "/pongtoday/21/09/26" },
  { name: "21.09.27, 음양 더하기", url: "/pongtoday/21/09/27" },
  { name: "21.09.28, 약수의 합", url: "/pongtoday/21/09/28" },
  { name: "21.09.29, 문자열을 정수로 바꾸기", url: "/pongtoday/21/09/29" },
  { name: "21.09.29, 서울에서 김서방 찾기", url: "/pongtoday/21/09/29-2" },
  { name: "21.09.30, 문자열 내림차순으로 배치하기", url: "/pongtoday/21/09/30" },
  { name: "21.09.30, 문자열 내 p와 y의 개수", url: "/pongtoday/21/09/30-2" },
  { name: "21.10.05, 나누어 떨어지는 숫자배열", url: "/pongtoday/21/10/05" },
  { name: "21.10.06, 가운데 글자 가져오기", url: "/pongtoday/21/10/06" },
  { name: "21.10.07, 부족한 금액 계산하기", url: "/pongtoday/21/10/07" },
  { name: "21.10.10, 문자열 내 마음대로 정렬하기", url: "/pongtoday/21/10/10" },
  { name: "21.10.11, 같은 숫자는 싫어", url: "/pongtoday/21/10/11" },
  { name: "21.10.12, K번째 수", url: "/pongtoday/21/10/12" },
  { name: "21.10.15, 두 정수 사이의 합", url: "/pongtoday/21/10/15" },
  { name: "21.10.17, 문자열 다루기 기본", url: "/pongtoday/21/10/17" },
  { name: "21.10.18, 나머지가 1이 되는 수 찾기", url: "/pongtoday/21/10/18" },
  { name: "21.10.19, 체육복", url: "/pongtoday/21/10/19" },
  { name: "21.10.20, 두 개 뽑아서 더하기", url: "/pongtoday/21/10/20" },
  { name: "21.10.21, 모의고사", url: "/pongtoday/21/10/21" },
  { name: "21.10.23, 소수 만들기", url: "/pongtoday/21/10/23" },
  { name: "21.10.24, 3진법 뒤집기", url: "/pongtoday/21/10/24" },
  { name: "21.10.25, 약수의 개수와 덧셈", url: "/pongtoday/21/10/25" },
  { name: "21.10.26, 시저암호", url: "/pongtoday/21/10/26" },
  { name: "21.10.27, 2016년", url: "/pongtoday/21/10/27" },
  { name: "21.10.28, 예산", url: "/pongtoday/21/10/28" },
  { name: "21.10.29, 최소직사각형", url: "/pongtoday/21/10/29" },
  { name: "21.10.30, 최대공약수와 최소공배수", url: "/pongtoday/21/10/30" },
  { name: "21.10.31, 폰켓몬", url: "/pongtoday/21/10/31" },
  { name: "21.11.01, N개의 최소공배수", url: "/pongtoday/21/11/01" },
  { name: "21.11.02, JadenCase 문자열 만들기", url: "/pongtoday/21/11/02" },
  { name: "21.11.03, 행렬의 곱셈", url: "/pongtoday/21/11/03" },
  { name: "21.11.04, 피보나치 수", url: "/pongtoday/21/11/04" },
  { name: "21.11.05, 최솟값 만들기", url: "/pongtoday/21/11/05" },
  { name: "21.11.08, 최댓값과 최솟값", url: "/pongtoday/21/11/08" },
  { name: "21.11.10, 다음 큰 숫자", url: "/pongtoday/21/11/10" },
  { name: "21.11.11, 올바른 괄호", url: "/pongtoday/21/11/11" },
  { name: "21.11.15, 가장 큰 수", url: "/pongtoday/21/11/15" },
  { name: "21.11.16, 방문 길이", url: "/pongtoday/21/11/16" },
  { name: "21.11.22, n^2 배열 자르기", url: "/pongtoday/21/11/22" },
  { name: "21.11.29, 이진 변환 반복하기", url: "/pongtoday/21/11/29" },
  { name: "21.11.30, 점프와 순간 이동", url: "/pongtoday/21/11/30" },
  { name: "21.12.06, 짝지어 제거하기", url: "/pongtoday/21/12/06" },
  { name: "21.12.07, 예상 대진표", url: "/pongtoday/21/12/07" },
  { name: "21.12.21, 프린터", url: "/pongtoday/21/12/21" },
  { name: "22.01.11, 숫자의 표현", url: "/pongtoday/22/01/11" },
  { name: "22.04.28, 신고 결과 받기", url: "/pongtoday/22/04/28" },
  { name: "22.04.30, 숫자 문자열과 영단어", url: "/pongtoday/22/04/30" },
].reverse();

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
      window.location.href = "/pongtoday/index.html?pageNo=" + j;
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
