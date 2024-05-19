// 데이터 타입: 기본[string,number,boolean,null,undefined] & 참조[Array]
// Array
// const colors = ["#1abc9c", "#3498db", "#e74c3c", "#7f8c8d"];
// colors.push("#f1c40f"); //push 배열에 추가해주세요
// colors.sort(); //sort 배열를 정렬해주세요

// const menu = ["americano", "latte", "mint", "vanlina", "milktea"];
// menu.forEach((x) => {
//   console.log(x.toUpperCase());
// });

// const prices = [2000, 3000, 5000, 3000, 4000, 6000];
// prices.forEach((x) => {
//   if (x > 3000) {
//     console.log("비쌈");
//   } else {
//     console.log("혜자");
//   }
// });

// replace(a,b) [a를 b로]
// replaceAll(a,b) [모든 a를 b로]
// slice(a,b) [a,b-1]까지 문자 짜르기
// split("target") target기준으로 배열로 분리하기

const option = ["100 blue", "200 green", "500 black", "400 red"];

option.forEach((x) => {
  const a = x.split(" ");
  const length = a[0];
  const color = a[1];

  const box = document.createElement("div");
  box.style.height = `${length}px`;
  box.style.width = `${length}px`;
  box.style.backgroundColor = color;
  document.body.append(box);
});
