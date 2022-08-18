
import './styles/App.css';

import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";


function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" caseSensitive={false} element={<Home/>}/>
                <Route exact path="/profile" caseSensitive={false} element={<Profile/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
