const optionsClassList = [
  {
    className: ".option1",
    isChecked: false,
    msg: "[필수] 서비스 이용약관 동의",
  },
  {
    className: ".option2",
    isChecked: false,
    msg: "[필수] 개인정보 수집 이용 동의서",
  },
  {
    className: ".option3",
    isChecked: false,
    msg: "[필수] 마케팅 활용 동의",
  },
  {
    className: ".option4",
    isChecked: false,
    msg: "[필수] 광고성 정보 수신 동의",
  },
];

optionsClassList.forEach((v, i) => {
  const newDiv = document.createElement("div");
  newDiv.innerText = v.msg;
  newDiv.classList.add(v.className);
  newDiv.classList.add(v.isChecked ? "checked" : "notChecked");

  newDiv.addEventListener("click", function () {
    this.classList.toggle("checked");
    this.classList.toggle("notChecked");
    option.isChecked = this.classList.contains("checked");
    const btn = document.querySelector(".button");
    optionsClassList.every((v) => v.isChecked)
      ? btn.classList.add("passed")
      : btn.classList.remove("passed");
  });
  const optionList = document.querySelector(".optionList");
  optionList.appendChild(newDiv);
});
