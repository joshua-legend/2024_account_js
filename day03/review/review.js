// input: window.prompt
// output: html

// 1번문제. 유저에게 밑변과 높이를 입력을 받고 정삼각형의 넓이 나타내기
const base = Number(window.prompt("밑변"));
const height = Number(window.prompt("높이"));

const triangle = document.createElement("div");
triangle.innerText = `정삼각형 넓이:${base * height * 0.5}`;
document.body.appendChild(triangle);

// 2번문제. 한국 돈 원을 입력하면 엔화로 바꿔주기
const won = window.prompt("원화 입력")
const yen_rate = 0.114
const exchange = document.createElement("div");
exchange.innerText = `엔:${won * yen_rate}`
document.body.appendChild(exchange);