import getData from './get-data';
import renderItems from './render-items';
import mixItems from './mix-items';

const loadData = (cardsNumber) => {
  getData().then((data) => {

    const getCard = () => {
      return mixItem(data);
    };

    const cards = new Array(cardsNumber).fill().map(getCard);

    renderItems(cards);
  });
};

export default loadData;
