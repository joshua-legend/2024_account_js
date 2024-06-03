// 데이터 타입: 기본 + 참조
// 기본: number,string,null,undefined,boolean
// 참조: array
//str = String() or "" or `` or +
//number = Number() or 123123 or +
//boolean = Boolean() or true or !
//Array = Array() or []

// 인덱스
fruits[0]; // apple
fruits[1]; // banana

// 추가 및 갱신
fruits.push("grape");
fruits[0] = "mango";

// 삭제
fruits.pop(); // 맨뒤에 삭제
delete fruits[1]; // banana 삭제

// 가공하는 기능
// 1. 변형 - push, pop, reverse, shift[맨앞에 짜르기], sort
// 2. 접근자 - indexof[몇번째?], slice[짜르고 새로운 배열로 주기]
// 3. 반복[(v)=>{v}] - forEach, map

const num = [3, 7, 2, 91, 309, 23, 124];

num.map((v) => v + 10);

const newArr1 = num.map((v) => v + 100);
const newArr2 = num.map((v) => v ** 2);
const newArr3 = num.map((v) => (v % 2 == 1 ? v ** 2 : v + 100));
const fruits = ["apple", "banana", "orange", "kiwi"];
const newArr4 = fruits.map((v) =>
  v.includes("a") ? v.toUpperCase() : "icecream"
);

//filter
const num1 = [3, 7, 2, 91, 309, 23, 124];
const fruits1 = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "mango",
  "durian",
  "strawberry",
  "melon",
  "watermelon",
];
// 알파벳 i가 들어가 있으면 제거하고, 제거 후 단어의 문자의 길이로 치환
// 체이닝
const fruitsArr1 = fruits1.filter((v) => !v.includes("i")).map((v) => v.length);
const num1Arr = num1.filter((v) => v > 10);
const num2Arr = num1.filter((v) => v % 2 == 0);
const fruitsArr = fruits1.filter((v) => v.length == 6);

//every && some
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const every1 = arr3.every((v) => v > 1);
const some1 = arr3.some((v) => v >= 10);
