const getUser = () => {
    return new Promise(resolve => {
        resolve({
            name: "Mauro Moreno",
            email: "moreno.mauro.emanuel@gmail.com",
            phone: "1234567890"
        })
    });
};

export default getUser;
