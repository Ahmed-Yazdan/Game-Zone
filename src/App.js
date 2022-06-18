import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";
import Games from "./Pages/Games/Games";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/games' element={<Games />} />
          {/* <Route path='*' element={<NotFound />} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
