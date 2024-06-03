//비동기 작업이 맞이할 미래의 완료 또는 실패와 그결과 값을 나타내는 객체
// ing, 성공, 실패
// pending, fullfilled, rejected
const b = fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=1");
const c = b.then((x)=> x.json()).then((y)=> y)