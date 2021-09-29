const todayNav = document.querySelector(".todayNav");
const diaryList = [
  { name: "21.08.25, 평균구하기", url: "/pongtoday/08/25" },
  { name: "21.08.26, 하샤드 수", url: "/pongtoday/08/26" },
  { name: "21.08.27, 핸드폰 번호 가리기", url: "/pongtoday/08/27" },
  { name: "21.08.28, x만큼 간격이 있는 n개의 숫자", url: "/pongtoday/08/28" },
  { name: "21.08.29, 작은 수 제거하기", url: "/pongtoday/08/29" },
  { name: "21.08.31, 정수 제곱근 판별", url: "/pongtoday/08/31" },
  { name: "21.09.23, 이상한 문자 만들기", url: "/pongtoday/09/23" },
  { name: "21.09.24, 내적", url: "/pongtoday/09/24" },
  { name: "21.09.25, 완주하지 못한 선수", url: "/pongtoday/09/25" },
  { name: "21.09.26, 없는 숫자 더하기", url: "/pongtoday/09/26" },
  { name: "21.09.27, 음양 더하기", url: "/pongtoday/09/27" },
  { name: "21.09.28, 약수의 합", url: "/pongtoday/09/28" },
  { name: "21.09.29, 문자열을 정수로 바꾸기", url: "/pongtoday/09/29" },
  { name: "21.09.29, 서울에서 김서방 찾기", url: "/pongtoday/09/29-2" },
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
