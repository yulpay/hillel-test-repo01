const car1 = {
  brand: "Toyota",
  model: "Yaris",
  year: 2020
};

const car2 = {
  brand: "KIA",
  model: "Niro",
  owner: 2023 
};

const car3 = { ...car1, ...car2 };

console.log(car3);