//String, Boolean, Date, Promise, Object, ...
class Student {
  constructor(a, b) {
    this.name = a;
    this.university = "연세대학교";
    this.major = b;
  }
  intro() {
    console.log(
      `저는 ${this.name} 이고요, ${this.university}이구요, ${this.major} 입니다요.`
    );
  }
  drinking(x) {
    console.log(`${x}를 마십니다.`);
  }
  makeMasterPiece() {
    console.log("졸작만듭니다.");
  }
}
// const kim = new Student("김민재", "컴퓨터공학과");
// const lee = new Student("이지민", "정치외교학과");
// kim.intro();
// kim.drinking("테라");
// lee.intro();
// lee.drinking("카스");
class HardButton {
  constructor(a, b) {
    this.backgroundColor = a;
    this.content = b;
  }
  render() {
    const newDiv = document.createElement("div");
    newDiv.style.height = "60px";
    newDiv.style.width = "190px";
    newDiv.style.padding = "10px 16px";
    newDiv.style.backgroundColor = this.backgroundColor;
    newDiv.innerText = this.content;

    const test = document.querySelector(".test");
    test.appendChild(newDiv);
  }
}

const a = new HardButton("#3498db", "레스토랑");
const b = new HardButton("#34495e", "메가커피");
const c = new HardButton("#e67e22", "귀찮음");
a.render();
b.render();
c.render();
