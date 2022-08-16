
import './styles/App.css';

import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" caseSensitive={false} element={<Home/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
