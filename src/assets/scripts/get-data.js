const getData = () => {
  return fetch('https://pets-81d26-default-rtdb.firebaseio.com/pets.json')
    .then((response) => {
      return response.json();
    });
};

export default getData;
