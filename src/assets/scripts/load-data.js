import getData from './get-data';
import renderItems from './render-items';
import mixItems from './mix-items';

const loadData = (number) => {
  getData().then((data) => {

    const getCards = () => {
      return mixItems(data, number);
    };

    renderItems(getCards());
  });
};

export default loadData;
