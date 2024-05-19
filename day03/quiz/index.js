const pallate = document.createElement("div");
const color = document.createElement("span");
const red_btn = document.createElement("button");
const green_btn = document.createElement("button");
const blue_btn = document.createElement("button");
const plus_btn = document.createElement("button");
const minus_btn = document.createElement("button");

pallate.style.width = "100px";
pallate.style.height = "100px";
color.innerText = "선택된 색상:없음";
pallate.appendChild(color);

red_btn.style.backgroundColor = "red";
red_btn.innerText = "red";
green_btn.style.backgroundColor = "green";
green_btn.innerText = "green";
blue_btn.style.backgroundColor = "blue";
blue_btn.innerText = "blue";
minus_btn.innerText = "-";
plus_btn.innerText = "+";

red_btn.addEventListener("click", () => {
  pallate.style.backgroundColor = "red";
  color.innerText = "선택된 색상: red";
});

green_btn.addEventListener("click", () => {
  pallate.style.backgroundColor = "green";
  color.innerText = "선택된 색상: green";
});

blue_btn.addEventListener("click", () => {
  pallate.style.backgroundColor = "blue";
  color.innerText = "선택된 색상: blue";
});

plus_btn.addEventListener("click", () => {
  const length = parseInt(pallate.style.width) + 1;
  pallate.style.width = `${length}px`;
  pallate.style.height = `${length}px`;
});

minus_btn.addEventListener("click", () => {
  const length = parseInt(pallate.style.width) - 1;
  const isLength99 = length === 99;
  pallate.style.width = isLength99 ? "100px" : `${length}px`;
  pallate.style.height = isLength99 ? "100px" : `${length}px`;
});

document.body.appendChild(pallate);
document.body.appendChild(red_btn);
document.body.appendChild(blue_btn);
document.body.appendChild(green_btn);
document.body.appendChild(minus_btn);
document.body.appendChild(plus_btn);
