
import {
  createElement
} from './create-template';

// console.log(pets);
// createElement(pets);

fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/stage1/stream1/shelter/pets.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    createElement(data);
  });


// const getData = async () => {
//   const data = await fetch('./pets.json');
//   //   createElement(data);

//   if (data.ok) {
//     return data.json()
//   } else {
//     throw new Error(`Данные не были получены, ошибка ${data.status} ${data.statusText}`);
//   }
// };

// getData()
