import {Fragment} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'normalize.css/normalize.css';
import 'basscss/css/basscss.min.css';
import 'basscss-btn/index.css';
import 'basscss-btn-outline/index.css';
import 'basscss-background-colors/index.css';
import 'basscss-colors/index.css';
import 'basscss-ui-utility-groups/index.css';
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer greeting="Categoria 1"/>
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
        </Fragment>
    );
};

export default App;
