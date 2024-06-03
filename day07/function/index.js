//함수(기능):[input -> output]

// 일반함수
// function 함수명 (매개변수){return 리턴값}
function makeCoffee(x) {
  return x + "완료되었습니다.";
}
//제곱해서 돌려주기
function makeSqaure(x) {
  return x ** 2;
}

// 화살표 함수
// ()=>{}

const makeBread = (x) => {
  return x + "빵이 완료되었습니다.";
};

// 1. 어떤수를 입력하면 세제곱을 돌려주는 함수
const makeCube = (x) => x ** 3;
const makeLower = (x) => x.toLowerCase() + "완료!";
const isTruthy = (x) => (!!x ? "truthy" : "falsy");

//x가 들어오면 body태그에 x의 innerText를 가진 버튼을 추가해주는 함수

const makeButton = (x) => {
  const btn = document.createElement("button");
  btn.innerText = x;
  document.body.appendChild(btn);
};
