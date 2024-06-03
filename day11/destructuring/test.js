const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

users.map((v) => ({ name: v.name, age: v.age }));
users.map(({ name, age }) => ({ name, age }));
users.map(({ name: nickName, age: koreaAge }) => ({ nickName, koreaAge }));
navigator.geolocation.getCurrentPosition(function (position) {
  console.log("Latitude: " + position.coords.latitude);
  console.log("Longitude: " + position.coords.longitude);
});