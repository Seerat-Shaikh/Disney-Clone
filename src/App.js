import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      {/* header will not change other component will change */}
      {/* anything inside router will always be visible */}

      <Router>
        <Header />
        <Routes>

          {/* ANything inside routes/switch can be changed */}
          
          <Route path="/detail">
            <Route path='/detail' element={<Detail />} />
          </Route>
          <Route path="/">
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
