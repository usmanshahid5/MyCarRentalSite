import React             from 'react';
import ReactDOM          from 'react-dom/client';
import App               from "./App"
import store             from "./components/store"
import { Provider }      from 'react-redux';
import { BrowserRouter, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <BrowserRouter basename="/MyCarRentalSite">
      <Link to="/"/>
      <App/>
    </BrowserRouter>
  </Provider>
);
