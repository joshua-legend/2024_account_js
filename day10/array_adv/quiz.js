// 함수 만들기
const solution1 = (my_string, n) =>
  [...my_string].map((v) => v.repeat(n)).join("");

const solution2 = (myString) =>
  [...myString].map((v) => (v == "a" ? "A" : v.toLowerCase())).join("");
