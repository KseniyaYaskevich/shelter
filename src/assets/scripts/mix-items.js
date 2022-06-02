const mixItems = (data, number) => {
  let tempArray = [];

  for (let i = 0; i < number; i++) {
    const newData = data;

    for (let j = data.length; j > 0; j--) {
      let randInd = Math.floor(Math.random() * j);
      const randElem = newData.splice(randInd, 1)[0];
      newData.push(randElem);
    }

    tempArray = [...tempArray, ...newData];
  }
  return tempArray;
}

export default mixItems;
