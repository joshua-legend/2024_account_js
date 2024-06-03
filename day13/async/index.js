//비동기[데이터가져오기,지도위치가져오기,시간초재기]
// setTimeout(() => {}, timeout);
// setInterval(() => {
//   const count = document.querySelector(".count");
//   count.innerText = Number(count.innerText) + 1;
// }, 1000);

//1. 지금 몇년 몇월 몇일 무슨요일인지 html에 나타내기
setInterval(() => {
  const dateEl = document.querySelector(".date_el");
  const date = new Date();
  const koreaDay = {
    1: "월요일",
    2: "화요일",
    3: "수요일",
    4: "목요일",
    5: "금요일",
    6: "토요일",
    7: "일요일",
  };
  dateEl.innerText = `${date.toLocaleString()} ${koreaDay[date.getDay()]} `;
}, 1000);
