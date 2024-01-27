import React from 'react';
import Products from './products';
import { createBrowserHistory } from 'history';
import {BrowserRouter as Router} from "react-router-dom";

const history = createBrowserHistory();


function App() {
  return (
      <Router >
        <div className="App">
          <Products history={history}/>
        </div>
      </Router>
  );
}

export default App;
