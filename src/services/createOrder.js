import getFirestore from "./getFirestore";

const createOrder = async (order) => {
    const orderCollection = getFirestore().collection("orders");
    const newOrder = await orderCollection.add(order);
    return newOrder.id;
}

export default createOrder;