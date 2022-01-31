import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" exact element={<p>Logged In</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
