const colorList = ["red", "orange", "yellow", "green", "blue"];
const sizeList = ["small", "medium", "large", "x-large", "xx-large"];
const radiusList = [
  "borderRadiusZero",
  "borderRadiusTen",
  "borderRadiusTwenty",
];




const makeButtons = (x, y) => {
  x.forEach((v) => {
    const btn = document.createElement("button");
    btn.innerText = v;
    btn.addEventListener("click", () => {
      const box = document.querySelector(".box");
      x.forEach((v) => box.classList.remove(v));
      box.classList.add(v);
    });
    const listTag = document.querySelector(y);
    listTag.appendChild(btn);
  });
};










makeButtons(colorList,'.colorBtnList')
makeButtons(sizeList,'.sizeBtnList')
makeButtons(radiusList,'.radiusBtnList')