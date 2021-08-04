const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    title: "Title test",
                    description: "Description test",
                    price: 1000,
                    pictureUrl: "https://via.placeholder.com/400x300"
                },
                {
                    id: 2,
                    title: "Title test 2",
                    description: "Description test 2",
                    price: 2000,
                    pictureUrl: "https://via.placeholder.com/400x300"
                },
            ]);
        }, 2000)
    });
}

export default getItems;