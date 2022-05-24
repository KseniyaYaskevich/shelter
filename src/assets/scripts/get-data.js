const getData = () => {
  return fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/stage1/stream1/shelter/pets.json')
    .then((response) => {
      return response.json();
    });
};

export default getData;
