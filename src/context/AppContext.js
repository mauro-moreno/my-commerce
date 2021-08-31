import {CartContextProvider} from "./CartContext";
import {CategoriesContextProvider} from "./CategoriesContext";
import {UserContextProvider} from "./UserContext";

const AppContext = ({children}) => {
    return (
        <CategoriesContextProvider>
            <UserContextProvider>
                <CartContextProvider>
                    {children}
                </CartContextProvider>
            </UserContextProvider>
        </CategoriesContextProvider>
    );
};

export default AppContext;
