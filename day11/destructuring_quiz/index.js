import { backendData } from "./data.js";
//1. {id, curreny, money, phone}
const one = backendData.map(({ id, curreny, money, phone }) => ({
  id,
  curreny,
  money,
  phone,
}));
console.log(one);
//2. {animal, car:{make,model,year}}
const two = backendData.map(
  ({
    animalName: animal,
    carMake: make,
    carModel: model,
    carModelYear: year,
  }) => ({
    animal,
    car: {
      make,
      model,
      year,
    },
  })
);
console.log(two);
//3. ipaddress가 맨마지막 세자리/두자리가 합이 10이하이면, {id,color}
const c = backendData
  .filter(({ ipAddress }) => {
    const ipArr = [...ipAddress];
    const lastDotIndex = ipArr.findLastIndex((v) => v === ".");
    const splicedArr = ipArr
      .splice(lastDotIndex + 1, ipArr.length)
      .map((v) => parseInt(v));
    const sum = splicedArr.reduce((a, c) => a + c);
    return sum <= 10;
  })
  .map(({ ipAddress, id, color }) => ({ ipAddress, id, color }));
//4. timezone이 알파벳 모음으로 시작하면, {timezone,carmake,phone[앞 세자리]}

const d = backendData.map(({ timezone, carMake, phone }) => ({
  timezone,
  carMake,
  phone: phone.split("-")[0],
}));

//5. money가 50000엔 이하이면, {money, phone[하이픈 제거], appName[대문자화하고]}
const e = backendData.filter(({money})=> money <= 50000).map(({money,phone,appName})=>({
  money,
  phone: phone.replaceAll("-",""),
  appName: appName.toUpperCase(),
}))

navigator.geolocation.getCurrentPosition(function(position) {
    console.log('Latitude: ' + position.coords.latitude);
    console.log('Longitude: ' + position.coords.longitude);
});
