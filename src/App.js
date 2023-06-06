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
import Date from "./Pages/Ec/Date";
import Addexam from "./Pages/Level-1/Addexam";
import Searchadd from "./Pages/Level-1/Searchadd";
import Login from "./Pages/Logins/Login"
import AddFaculty from "./Pages/Level-1/AddFaculty";
import AddHod from "./Pages/Level-1/AddHod";
import AddCourse from "./Pages/Level-1/AddCourse";
import Addquestion from "./Pages/Faculty/Addquestion";
import Addque from "./Pages/Faculty/Addque";
import Addlevelofficer from "./Pages/Ec/Addlevelofficer";
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" Component={Login}/>
        <Route path="/exam" Component={Exam}/>
        <Route path="/viewnotification" Component={Viewnotif}/>
        <Route path="/reportissue" Component={Report}/>
        <Route path="/pyq" Component={Previous}/>
        <Route path="/viewcalander" Component={Viewcalander}/>
        <Route path="/viewquestionpaper" Component={Viewqp}/>
        <Route path="/viewissue" Component={Viewissue}/>
        <Route path="/date" Component={Date}/>
        <Route path="/addexam" Component={Addexam}/>
        <Route path="/searchadd" Component={Searchadd}/>
        <Route path="/addfaculty" Component={AddFaculty}/>
        <Route path="/addhod" Component={AddHod}/>
        <Route path="/addcourse" Component={AddCourse}/>
        <Route path="/Addquestion" Component={Addquestion}/>
        <Route path="/addque" Component={Addque}/>
        <Route path="/addlevelofficer" Component={Addlevelofficer}/>
      </Routes> 
    </Router>
    </div>
  );
}
export default App;