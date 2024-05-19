// 데이터 타입: 기본 + 참조
// 기본: String[문자], Number[숫자]

const firstNum = window.prompt("첫 번째 숫자:");
const firstNumParse = Number(firstNum);
const secondNum = window.prompt("두 번째 숫자:");
const secondNumParse = Number(firstNum);

const numResultDiv = document.createElement("div");
numResultDiv.innerText = `합:${firstNumParse + secondNumParse} 차:${
  firstNumParse - secondNumParse
} 곱: ${firstNumParse * secondNumParse}`;
document.body.appendChild(numResultDiv);

const numAge = Number(window.prompt("몇살?"));
const yearDiv = document.createElement("div");
yearDiv.innerText = `${2025 - numAge}년 생이네요`;
document.body.appendChild(yearDiv);

const side = Number(window.prompt("정사각형의 한 변의 길이:"));
const squareDiv = document.createElement("div");
squareDiv.innerText = `정사각형의 넓이:${side * side}`;
document.body.appendChild(squareDiv);