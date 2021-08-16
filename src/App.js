import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'normalize.css/normalize.css';
import 'basscss/css/basscss.min.css';
import 'basscss-btn/index.css';
import 'basscss-btn-outline/index.css';
import 'basscss-background-colors/index.css';
import 'basscss-colors/index.css';
import 'basscss-ui-utility-groups/index.css';
import './App.css';
import {CartContextProvider} from "./context/CartContext";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer greeting="Categoria 1"/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/category/:id">
                        <ItemListContainer greeting="Categoria 2"/>
                    </Route>
                    <Route path="/item/:id">
                        <ItemDetailContainer/>
                    </Route>
                </Switch>
            </BrowserRouter>
            <footer className="clearfix mt2 p2 white bg-black center">Copyright 2021</footer>
        </CartContextProvider>
    );
};

export default App;
