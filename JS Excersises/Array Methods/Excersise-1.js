const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const filteredCities = cities.map((obj) =>
  obj.isVisited === true ? obj.name + " (Visited)" : obj.name
);

console.log(filteredCities);
