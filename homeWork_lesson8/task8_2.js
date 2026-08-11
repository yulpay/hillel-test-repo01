const initialArray = [1, 2, 3, 4, 5];

const mutatedArray = initialArray.map((element, index) => {
  return element * index;
});

console.log(mutatedArray);