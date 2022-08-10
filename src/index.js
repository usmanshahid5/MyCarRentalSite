import React             from 'react';
import ReactDOM          from 'react-dom/client';
import App               from "./App"
import store             from "./components/store"
import { Provider }      from 'react-redux';
import { HashRouter, Link } from "react-router-dom";
import Header from "./header/Header"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <HashRouter>
      {/*<App/>*/}
      <Header/>
    </HashRouter>
  </Provider>
);
