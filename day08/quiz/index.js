// 1.
// 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를
// 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// n	k	result
// 10	3	[3, 6, 9]
// 15	5	[5, 10, 15]

const makeArray = (n, k) =>
  Array(n)
    .fill(1)
    .map((v, i) => i + 1)
    .filter((v) => v % k == 0);

//2.
//문자열 배열 strArr가 주어집니다. 
//배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는
//모든 문자열을 제거하고 남은 문자열을 순서를 유지하여 
//배열로 return 하는 solution 함수를 완성해 주세요.

// strArr	result
// ["and","notad","abcd"]	["and","abcd"]
// ["there","are","no","a","ds"]	["there","are","no","a","ds"]

const makeStr = (strArr) => strArr.filter((v)=>!v.includes("ad"))
console.log(makeStr(["and","notad","abcd"]))
console.log(makeStr(["there","are","no","a","ds"]))