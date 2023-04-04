import Navbar from "./Components/Navbar";
import './App.css'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Exam from "./Pages/Hod/Exam";
import Viewnotif from "./Pages/Hod/Viewnotif";
import Report from "./Pages/Hod/Report";
import Previous from "./Pages/Hod/Previous";
import Viewcalander from "./Pages/Ec/Viewcalander";
import Viewqp from "./Pages/Ec/Viewqp";
import Viewissue from "./Pages/Ec/Viewissue";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" Component={Exam}/>
        <Route path="/viewnotification" Component={Viewnotif}/>
        <Route path="/reportissue" Component={Report}/>
        <Route path="/pyq" Component={Previous}/>
        <Route path="/viewcalander" Component={Viewcalander}/>
        <Route path="/viewquestionpaper" Component={Viewqp}/>
        <Route path="/viewissue" Component={Viewissue}/>

      </Routes> 
    </Router>
    </div>
  );
}
export default App;