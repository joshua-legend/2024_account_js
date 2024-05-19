const plusBtn = document.createElement("button");
const minusBtn = document.createElement("button");
const result = document.createElement("span");
plusBtn.innerText = "+";
minusBtn.innerText = "-";
result.innerText = "0";

plusBtn.addEventListener("click", () => {
  result.innerText = Number(result.innerText) + 1;
});

minusBtn.addEventListener("click", () => {
  const isZero = Number(result.innerText) === 0;
  result.innerText = isZero ? 0 : Number(result.innerText) - 1;
});

document.body.appendChild(minusBtn);
document.body.appendChild(result);
document.body.appendChild(plusBtn);
