import {BrowserRouter, Route, Switch} from "react-router-dom";
import AppContext from "./context/AppContext";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import './App.css';

const App = () => {
    return (
        <AppContext>
            <BrowserRouter>
                <NavBar/>
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <ItemListContainer greeting="Hola Mundo"/>
                        </Route>
                        <Route exact path="/cart">
                            <Cart/>
                        </Route>
                        <Route path="/category/:categoryId">
                            <ItemListContainer greeting="Hola Mundo"/>
                        </Route>
                        <Route path="/item/:id">
                            <ItemDetailContainer/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
            <footer>Copyright 2021</footer>
        </AppContext>
    );
};

export default App;
