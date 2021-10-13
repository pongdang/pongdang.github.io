const todayNav = document.querySelector(".todayNav");
const diaryList = [
  { name: "21.09.27, 음양 더하기", url: "/pongtoday/09/27" },
  { name: "21.09.28, 약수의 합", url: "/pongtoday/09/28" },
  { name: "21.09.29, 문자열을 정수로 바꾸기", url: "/pongtoday/09/29" },
  { name: "21.09.29, 서울에서 김서방 찾기", url: "/pongtoday/09/29-2" },
  { name: "21.09.30, 문자열 내림차순으로 배치하기", url: "/pongtoday/09/30" },
  { name: "21.09.30, 문자열 내 p와 y의 개수", url: "/pongtoday/09/30-2" },
  { name: "21.10.05, 나누어 떨어지는 숫자배열", url: "/pongtoday/10/05" },
  { name: "21.10.06, 가운데 글자 가져오기", url: "/pongtoday/10/06" },
  { name: "21.10.07, 부족한 금액 계산하기", url: "/pongtoday/10/07" },
  { name: "21.10.10, 문자열 내 마음대로 정렬하기", url: "/pongtoday/10/10" },
  { name: "21.10.11, 같은 숫자는 싫어", url: "/pongtoday/10/11" },
  { name: "21.10.12, K번째 수", url: "/pongtoday/10/12" },
];

for (let i = 0; i < diaryList.length; i++) {
  const diary = diaryList[i];
  const liTag = document.createElement("li");
  const aTag = document.createElement("a");
  aTag.classList.add("todayItem");
  aTag.innerText = diary.name;
  aTag.setAttribute("href", diary.url);
  liTag.append(aTag);
  todayNav.append(liTag);
}
