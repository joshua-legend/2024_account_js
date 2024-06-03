const menus = [
  {
    coffeeName: "아메리카노",
    coffeePrice: 3000,
  },
  {
    coffeeName: "라떼",
    coffeePrice: 4000,
  },
  {
    coffeeName: "레몬에이드",
    coffeePrice: 3500,
  },
  {
    coffeeName: "솔의눈",
    coffeePrice: 2500,
  },
  {
    coffeeName: "카스",
    coffeePrice: 4000,
  },
  {
    coffeeName: "바나나우유",
    coffeePrice: 2000,
  },
  {
    coffeeName: "사이다",
    coffeePrice: 1500,
  },
  {
    coffeeName: "제로콜라",
    coffeePrice: 2000,
  },
  {
    coffeeName: "데자와",
    coffeePrice: 3000,
  },
  {
    coffeeName: "비타오백",
    coffeePrice: 500,
  },
  {
    coffeeName: "요거트스무디",
    coffeePrice: 6000,
  },
  {
    coffeeName: "초코우유",
    coffeePrice: 3000,
  },
  {
    coffeeName: "돌체라떼",
    coffeePrice: 4000,
  },
  {
    coffeeName: "딸기라떼",
    coffeePrice: 3500,
  },
  {
    coffeeName: "민트라떼",
    coffeePrice: 3500,
  },
  {
    coffeeName: "비타천",
    coffeePrice: 1000,
  },
  {
    coffeeName: "테라",
    coffeePrice: 2500,
  },
];

const makeName = (name) => {
  const h3 = document.createElement("h3");
  h3.innerText = name;
  return h3;
};
const makePrice = (price) => {
  const h5 = document.createElement("h5");
  h5.innerText = price + "원";
  return h5;
};

const makeButton = (price) => {
  const btn = document.createElement("button");
  btn.innerText = "추가하기";
  btn.addEventListener("click", () => {
    const total = document.querySelector(".total");
    total.innerText = parseInt(total.innerText) + price + "원";
  });
  return btn;
};
const makeCoffee = (coffeeObj) => {
  const coffeeBox = document.createElement("div");
  coffeeBox.appendChild(makeName(coffeeObj.coffeeName));
  coffeeBox.appendChild(makePrice(coffeeObj.coffeePrice));
  coffeeBox.appendChild(makeButton(coffeeObj.coffeePrice));
  document.querySelector(".menu").appendChild(coffeeBox);
};

menus.forEach((v) => makeCoffee(v));
