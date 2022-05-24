import getData from "./get-data";
import renderItems from "./render-items";

const loadData = () => {
    getData().then((data) => {
        renderItems(data);
    });
};

export default loadData;