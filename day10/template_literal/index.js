const box = document.querySelector(".box");
const books = [
  {
    title: "자바스크립트 꿀잼",
    author: "손흥민",
    price: 30000,
    isSale: true,
  },
  {
    title: "타입스크립트 안쓰는법",
    author: "황희찬",
    price: 24000,
    isSale: false,
  },
  {
    title: "구글링 하다가 막혔을 때 코딩하는법",
    author: "김민재",
    price: 14000,
    isSale: true,
  },
];
const isBookSale = (book) => (book.isSale ? book.price * 0.9 : book.price);

//box.insertAdjacentHTML(어디에,무엇을)

//afterbegin: 맨 처음 자식으로
//beforeend: 맨 뒤 자슥으로

const makeBook = (book) => `
    <h1>${book.title}</h1>
    <h4>${book.author}</h4>
    <span>${isBookSale(book)}</span>
`;

books.forEach((v) => box.insertAdjacentHTML("beforeend", makeBook(v)));
