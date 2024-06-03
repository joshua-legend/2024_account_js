// const input = document.querySelector(".input");
// const checkBtn = document.querySelector(".check");
// const msg = document.createElement("div");
// document.body.appendChild(msg);

// checkBtn.addEventListener("click", () => {
//   if (input.value.length <= 8) {
//     msg.innerText = `글 자수가 짧습니다`;
//     msg.style.color = "red";
//   } else {
//     msg.innerText = `글 자수가 충분합니다`;
//     msg.style.color = "red";
//   }
// });

//input을 입력하고 확인 버튼을 눌렀을 때,
//8글자 이하이면 글 자수가 짧습니다[빨간색] 나오고
//아니면 글 자수가 충분합니다[파란색] 나오기

// 8~20글자 사이이고, 아니면 8~20글자 사이로 글자를 만들어주세요!
// 반드시 !,#,$ 하나라도 포함해야하하고, 아니면 반드시 !,#,$이 포함되어야 해요!
// 글자 시작을 'IT' 하면, 아니면 반드시 IT 시작해야 해요!
// 올바르게 문자를 설정했습니다.[파랑]

const input = document.querySelector(".input");
const checkBtn = document.querySelector(".check");
const msg = document.querySelector(".msg");

checkBtn.addEventListener("click", () => {
  const value = input.value; //눌렀을 때, input value 가져오기
  const isValidLength = 8 <= value.length && value.length <= 20;
  const isValidSpecialChar =
    value.includes("!") || value.includes("#") || value.includes("$");
  const isValidStart = value.startsWith("IT");
  msg.style.color = "red";
  
  if (!isValidLength) {
    msg.innerText = `8~20글자 사이로 글자를 만들어주세요!`;
  } else if (!isValidSpecialChar) {
    msg.innerText = `반드시 !,#,$이 포함되어야 해요!`;
  } else if (!isValidStart) {
    msg.innerText = `반드시 IT 시작해야 해요!`;
  } else {
    msg.innerText = `올바르게 문자를 설정했습니다`;
    msg.style.color = "blue";
  }
});
