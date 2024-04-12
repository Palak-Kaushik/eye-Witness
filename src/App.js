//import './App.css';
import LandingPage from './pages/landing.js'
import ReportCrime from './pages/reportcrime.js'
import Chatroom from './pages/chatroom.js'


import Navbar from "./navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
  return (
    
    <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/reportcrime" element={<ReportCrime />} />
                <Route path="/chatroom" element={<Chatroom />} />
                
            </Routes>
        </Router>


  );
}

export default App;


