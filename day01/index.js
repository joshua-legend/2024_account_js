// console.log("자바스크립트! 시작!");
// console.log("자바스크립트 공부 다짐: 알아서 강사가 캐리하겠지 ")
// console.log("오늘 점심 메뉴: 떡볶이")

// window.alert("아무거나 써볼게요.");
// window.confirm("아무거나 귀찮");
// window.prompt("왜안나온데?");

// window.open("https://www.naver.com/");

// const a = document.createElement("div");
// a.innerText = "아메리카노";
// a.addEventListener("mouseover", () => {
//   window.alert("메가 커피 짱짱");
// });

// document.body.appendChild(a);

// 화면에 버튼 태그를 만들고
// 안의 내용은 석가탄신일
// 클릭'click'을 하면 alert으로 부처님 오심 ㄹㅇ

// const a = document.createElement("button");
// a.innerText = "석가탄신일 ㄹㅇ";
// a.addEventListener("click", () => {
//   window.alert("부처님 오심 ㄹㅇ");
// });
// document.body.appendChild(a);

// 버튼 태그 만들고, 안에 아메리카노
// 클릭을 하면, 라떼

// const a = document.createElement("button");
// a.innerText = "아메리카노";
// a.addEventListener("click", () => {
//   a.innerText = "라떼는말이야";
// });
// document.body.appendChild(a);

// const b = window.prompt("무엇이든 물어보살");
// console.log(b);

// 첫번째 prompt 버튼 클릭 전 이름
// 두번째 prompt 버튼 클릭 후 이름
// 클릭전 이름 버튼 만들고, 클릭하면 두번재 클릭 이름으로 바뀜

// const a = document.createElement("div");
// // a.innerText = "<button>코리아 아이티</button>";
// a.innerHTML = "<button>코리아 아이티</button>";
// document.body.appendChild(a);

// button 태그 만들고, 배경색 하늘색, 폰트사이즈 20px,
// 클릭을 하면, 빨간색으로 바뀌는 퀴즈

// const a = document.createElement("button");
// a.innerText = "버튼";
// a.style.backgroundColor = "skyblue";
// a.style.fontSize = "20px";
// a.addEventListener("click", () => {
//   a.style.backgroundColor = "red";
// });
// document.body.appendChild(a);

// 버튼이 5개 있음, 빨,주,노,초,파 있음
// 모두 css를 배경색은 각각 해당 색으로 바꾸고, text 빨,주,노,쵸파
// div 태그가 w:100 h:100 border:1px solid black 있는데
// 여기서 위의 5개의 버튼중 하나를 누르면 div의 backgroundcolor가 해당 색으로
// 바뀌는 프로그램

const palatte = document.createElement("div");
palatte.style.width = "100px";
palatte.style.height = "100px";
palatte.style.border = "1px solid black";

const red = document.createElement("button");
const orange = document.createElement("button");
const yellow = document.createElement("button");
const green = document.createElement("button");
const blue = document.createElement("button");

red.innerText = "빨강";
orange.innerText = "주황";
yellow.innerText = "노랑";
green.innerText = "초록";
blue.innerText = "파랑";

red.style.backgroundColor = "red";
orange.style.backgroundColor = "orange";
yellow.style.backgroundColor = "yellow";
green.style.backgroundColor = "green";
blue.style.backgroundColor = "blue";

red.addEventListener("click", () => {
  palatte.style.backgroundColor = "red";
});
orange.addEventListener("click", () => {
  palatte.style.backgroundColor = "orange";
});
yellow.addEventListener("click", () => {
  palatte.style.backgroundColor = "yellow";
});
green.addEventListener("click", () => {
  palatte.style.backgroundColor = "green";
});
blue.addEventListener("click", () => {
  palatte.style.backgroundColor = "blue";
});

document.body.appendChild(red);
document.body.appendChild(orange);
document.body.appendChild(yellow);
document.body.appendChild(green);
document.body.appendChild(blue);

document.body.appendChild(palatte);
