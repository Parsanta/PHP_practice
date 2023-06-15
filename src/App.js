import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Faculty } from "./Pages/Faculty";
import { Home } from "./Pages/Home";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Schoolinfo } from "./Pages/school";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Faculty" element={<Faculty />} />
          <Route path="/school" element={<Schoolinfo/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;