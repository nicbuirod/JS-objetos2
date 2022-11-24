let myFunction = (obj, key) => {
  return obj[key];
};

console.log(myFunction({ continent: "Asia", country: "Japan" }, "continent"));
console.log(myFunction({ country: "Sweden", continent: "Europe" }, "country"));
console.log(
  myFunction({ name: "khriztian", "fav-number": 33, age: 18 }, "fav-number")
);
