import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";
import Games from "./Pages/Games/Games";
import Purchase from "./Pages/Purchase/Purchase";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/games' element={<Games showButton={true} isNavbar={true}/>} />
          <Route path='/purchase/:id' element={<Purchase/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />

          {/* <Route path='*' element={<NotFound />} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
