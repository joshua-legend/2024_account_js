// 데이터 타입 = 기본 타입 + 참조 타입
// 기본 타입
const a = "coffee";
const b = "bread";
const c = `latte`; //backtick
// 1.문자
// const favorite1 = window.prompt("당신이 좋아하는 커피는");
// const favorite2 = window.prompt("당신이 좋아하는 빵은");
// console.log(`당신이 좋아하는 커피는 ${favorite1} 이고 당신이 좋아하는 빵은 ${favorite2} 이시군요`);

// const yourName = window.prompt("당신의 이름?");
// const yourAge = window.prompt("당신의 나이?");
// const yourColor = window.prompt("당신의 좋아하는 색깔?");
// console.log(
//   `제 이름은 ${yourName} 나이는 ${yourAge} 좋아하는 색깔 ${yourColor}이군요!`
// );

// const date = window.prompt("오늘 날짜은?");
// const plan = window.prompt("오늘 일정은?");
// console.log(`오늘은 ${date}, 계획하신 일정은 ${plan}입니다`);

// const buttonText = window.prompt("버튼 내용 입력");
// const button = document.createElement("button");
// button.innerText = `입력한 내용:${buttonText}`;
// document.body.appendChild(button);

// 유저에게 세번의 prompt로 헥사코드 색깔을 입력을 받고
// 버튼 3개를 만들고(text: 헥사코드, bg: 헥사코드)
// 박스 하나 만들고(w:100,h:100,bg: 선택된 버튼의 헥사코드, text: 입력된 헥사코드: [])

const first = window.prompt("색깔 입력1");
const second = window.prompt("색깔 입력2");
const third = window.prompt("색깔 입력3");

const buttonFirst = document.createElement("button");
const buttonSecond = document.createElement("button");
const buttonThrid = document.createElement("button");
const box = document.createElement("div");

box.style.width = "100px";
box.style.height = "100px";

buttonFirst.style.backgroundColor = first;
buttonSecond.style.backgroundColor = second;
buttonThrid.style.backgroundColor = third;

buttonFirst.innerText = first;
buttonSecond.innerText = second;
buttonThrid.innerText = third;

buttonFirst.addEventListener("click", () => {
  box.style.backgroundColor = first;
  box.innerText = `입력된 코드:${first}`;
});

buttonSecond.addEventListener("click", () => {
  box.style.backgroundColor = second;
  box.innerText = `입력된 코드:${second}`;
});

buttonThrid.addEventListener("click", () => {
  box.style.backgroundColor = third;
  box.innerText = `입력된 코드:${third}`;
});

document.body.appendChild(buttonFirst);
document.body.appendChild(buttonSecond);
document.body.appendChild(buttonThrid);
document.body.appendChild(box);
