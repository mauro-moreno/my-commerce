import getFirestore from "./getFirestore";

const getCategories = async () => {
    const categoryCollection = getFirestore().collection("categories");
    const categories = await categoryCollection.get();
    if (categories.size === 0) {
        return [];
    }
    return categories.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
    })
}

export default getCategories;