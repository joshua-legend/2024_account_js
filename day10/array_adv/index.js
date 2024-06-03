//type casting: Number,String,Boolean,

//String -> Array
const coffee = "americano";
//split(""), Array.from(), ...[전개 구문]
const a1 = coffee.split("");
const a2 = Array.from(coffee);
const a3 = [...coffee];
//quiz. [m,r,c,n]
const a4 = [...coffee].filter((v) => ![..."aieou"].some((v1) => v1 == v));
// ['a', 'm', 'E', 'r', 'i', 'c', 'a', 'n', 'o']
const a5 = [...coffee].map((v) => (v == "e" ? v.toUpperCase() : v));

//Array -> String
const fruits = ["apple", "banana", "orange"];

// join(''),toString()
const b1 = fruits.join(""); // applebananaorange
const b2 = fruits.toString(); //apple,banana,orange

//quiz a를 빠진 과일들
// ['pple', 'bnn', 'ornge']
const b3 = fruits.map((v) => [...v].filter((v1) => v1 != "a").join(""));

//모든 철자 풀어주기 // flat()
const b4 = fruits.map((v) => [...v]).flat();
const b5 = [...fruits.join("")];

//reduce[누적시키다]  acc[누적된값],curr[현재]
// [1, 3, 5, 7, 9].reduce((a, c) => {
//   console.log(`a:${a} c:${c}`);
//   return a + c;
// });

// Array(10)
//   .fill(0)
//   .map((v, i) => i + 1)
//   .reduce((a, c) => a + c);
Array(10).fill(0).map((v,i)=> i%2 ? -(i+1) : (i+1)).reduce((a,c)=> a+c)



