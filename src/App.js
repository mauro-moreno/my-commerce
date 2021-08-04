import {Fragment} from "react";
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
            <NavBar/>
            <ItemListContainer greeting="Hola Mundo"/>
            <ItemDetailContainer/>
            <footer className="clearfix mt2 p2 white bg-black center">Copyright 2021</footer>
        </Fragment>
    );
};

export default App;
