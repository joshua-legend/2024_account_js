// 클라이언트[프론트 엔드] <-> 서버[백엔드]
// http방식으로 데이터를 주고 받음
// 1.stateLess[request//repsonse]
// 2.쿠키,세션,JWT
//  -1. 무신사 들어옴
//  -2. 로그인을 함[쿠키,세션,JWT 받음]
// 3.restful api

const data = fetch("https://fakerapi.it/api/v1/books?_quantity=10");
data.then((v) => v.json()).then((v) => {});




//card - image, title, author, description,
