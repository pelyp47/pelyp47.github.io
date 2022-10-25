import React from "react"
import ReactDom from "react-dom/client"
import App from "./App.jsx"
import { Provider } from 'react-redux';
import store from './store.js'


let container=ReactDom.createRoot(document.querySelector(".container"));
container.render(<Provider store={store}>
                    <App/>
                </Provider>);
