import getFirestore from "./getFirestore";

const getItem = async id => {
    const itemCollection = getFirestore().collection("items");
    const doc = await itemCollection.doc(id).get();
    if (!doc.exists) {
        throw new Error("Not Found");
    }
    return {id: doc.id, ...doc.data()};
};

export default getItem;
