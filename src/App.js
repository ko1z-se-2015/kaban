
import './styles/App.css';
import Home from '../src/pages/Home'
import Profile from '../src/pages/Profile'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Authorization from "./pages/Authorization";

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" caseSensitive={false} element={<Home/>}/>
                <Route exact path="/profile" caseSensitive={false} element={<Profile/>}/>
                <Route exact path="/" caseSensitive={false} element={<Home/>}/>
                <Route exact path="/auth" caseSensitive={false} element={<Authorization/>}/>
                <Route exact path="/auth" caseSensitive={false} element={<Authorization/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
