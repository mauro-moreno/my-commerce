import getItems from "./getItems";

const getItem = (id) => {
    return getItems().then(data => {
        return data.find(item => item.id === id)
    });
};

export default getItem;
