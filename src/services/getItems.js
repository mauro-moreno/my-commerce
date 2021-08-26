import getFirestore from "./getFirestore";

const getItems = async categoryId => {
    let itemCollection = getFirestore().collection("items");
    if (categoryId) {
        const categoryRef = getFirestore().collection("categories").doc(categoryId);
        itemCollection = itemCollection
            .where("categoryId", "==", categoryRef)
    }
    const querySnapshot = await itemCollection.get();
    if (querySnapshot.size === 0) {
        return [];
    }
    return querySnapshot.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
    });
}

export default getItems;