const inputList = [
  {
    titleTag: {
      msg: "Email",
    },
    inputBoxTag: {
      inputTag: {
        className: "emailInput",
        placeHolder: "example@gmail.com",
        type: "text",
        event: (e) => {
          console.log(emailCheck(e.target.value));
        },
      },
      eyeTag: {
        isExist: false,
      },
    },
  },
  {
    titleTag: {
      msg: "Create a password",
    },
    inputBoxTag: {
      inputTag: {
        className: "passwordInput",
        placeHolder: "must be 8 characters",
        type: "password",
      },
      eyeTag: {
        isExist: true,
      },
    },
  },
  {
    titleTag: {
      msg: "Confirm password",
    },
    inputBoxTag: {
      inputTag: {
        className: "passwordConfirmInput",
        placeHolder: "repeat password",
        type: "password",
      },
      eyeTag: {
        isExist: true,
      },
    },
  },
];

const emailCheck = (x) => {
  const domains = ["naver.com", "gamil.com", "kakao.com", "daum.com"];
  const hasAt = x.includes("@");
  const hasDomains = domains.some((v) => v == x.split("@")[1]);
  return hasAt && hasDomains;
};

const createInputWrapper = (obj) => {
  const inputWrapper = document.createElement("div");
  inputWrapper.classList.add("inputWrapper");
  inputWrapper.appendChild(createTitle(obj.titleTag));
  inputWrapper.appendChild(createInputBox(obj.inputBoxTag));
  document.querySelector(".signup").appendChild(inputWrapper);
};

const createTitle = (titleTag) => {
  const span = document.createElement("span");
  span.innerText = titleTag.msg;
  return span;
};

const createInputBox = (inputBoxTag) => {
  const inputBox = document.createElement("div");
  inputBox.classList.add("inputBox");

  const input = document.createElement("input");
  input.placeholder = inputBoxTag.inputTag.placeHolder;
  input.type = inputBoxTag.inputTag.type;
  input.classList.add(inputBoxTag.inputTag.className);
  input.addEventListener("input", inputBoxTag.inputTag.event);

  inputBox.appendChild(input);

  if (inputBoxTag.eyeTag.isExist) {
    addPasswordToggle(input, inputBox);
  }

  return inputBox;
};

const addPasswordToggle = (input, inputBox) => {
  const span = document.createElement("span");
  span.classList.add("eye");
  span.appendChild(createEyeIcon(input));
  inputBox.appendChild(span);
};

const createEyeIcon = (inputTag) => {
  const i = document.createElement("i");
  i.classList.add("fa-regular", "fa-eye");
  i.addEventListener("click", () => toggleInputType(inputTag, i));
  return i;
};

const toggleInputType = (inputTag, icon) => {
  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
  inputTag.type = inputTag.type === "text" ? "password" : "text";
};

// 실행 코드
inputList.forEach(createInputWrapper);
