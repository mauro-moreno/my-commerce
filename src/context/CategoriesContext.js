import {createContext, useContext, useEffect, useState} from "react";
import getCategories from "../services/getCategories";

const CategoriesContext = createContext([]);

export const useCategoriesContext = () => useContext(CategoriesContext);

const {Provider} = CategoriesContext;

const CategoriesContextProvider = ({children}) => {
    const [categories, setCategories] = useState([]);

    const getCategory = categoryId => {
        return categories.find((i) => i.id === categoryId);
    };

    useEffect(() => {
        getCategories()
            .then(data => {
                setCategories(data);
            })
            .catch(e => {
                console.log(e);
            });
    });

    const context = {
        categories,
        getCategory
    };

    return (
        <Provider value={context}>
            {children}
        </Provider>
    );
};

export {CategoriesContextProvider};
