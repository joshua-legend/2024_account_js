const fruits = ["strawberry", "orange", "apple", "banana", "melon", "durian"];

//1. a가 포함되어있으면 대문자화 시키고, 아니면 '🤐' 출력하기

// fruits.forEach((v) => {
//   console.log(v.includes("a") ? v.toUpperCase() : "🤐");
// });
//2. b가 포함되어있으면 b기준으로 단어를 쪼개서 배열화하고, 아니면 '🤐' 출력하기
// fruits.forEach((v) => {
//   console.log(v.includes("b") ? v.split('b') : "🤐");
// });
//3. n이 포함되어있으면 기존에 있던 단어들을 결합해서 최종 단어 보여주기
// let a = ""
// fruits.forEach((v)=>{
//   if(v.includes('n')){
//     a += v
//   }
// })
// console.log(a)
//4. 문자의 길이가 6글자 이상이면 알파벳 a를 k로 바꿔서 출력하고, 아니면 대문자화해서 출력하기
// fruits.forEach((v) => {
//   console.log(v.length >= 6 ? v.replace("a", "k") : v.toUpperCase());
// });
