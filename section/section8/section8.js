const firstIndex = (array) => {
  const first = array[0];
  return first;
};

const countArrayLength = (array) => {
  if (!Array.isArray(array)) {
    return "これは配列ではありません";
  } else if (array.length === 0) {
    return "この配列は空配列です";
  } else {
    return "この配列は"+array.length+"個のデータを持っています";
  }
};

const extractArray = (array) => {
  return array.slice(1, 3);
};

const makeMark = (mark, number) => {
  const result =[];
  for (let i = 0; i < number; i++) {
    result.push(mark);
  }
  return result;
};

const onlyString = (array) => {
  return array.filter((item) => typeof item === "string");
};

const addNumber = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const newString = `${i+1}: ${array[i]}`;
    newArray.push(newString);
  }
  return newArray;
};

module.exports = {
  firstIndex,
  countArrayLength,
  extractArray,
  makeMark,
  onlyString,
  addNumber,
};
