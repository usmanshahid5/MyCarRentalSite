import React             from 'react';
import ReactDOM          from 'react-dom/client';
import App               from "./App"
import store             from "./components/store"
import { Provider }      from 'react-redux';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App/>
    </BrowserRouter>
  </Provider>
);
