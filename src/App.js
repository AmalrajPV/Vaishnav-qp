import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import Login from "./Pages/Logins/Login";
import AddFaculty from "./Pages/Level-1/AddFaculty";
import AddHod from "./Pages/Level-1/AddHod";
import AddCourse from "./Pages/Level-1/AddCourse";
import Addquestion from "./Pages/Faculty/Addquestion";
import Addque from "./Pages/Faculty/Addque";
import Addlevelofficer from "./Pages/Ec/Addlevelofficer";
import { AuthProvider } from "./utils/loginContaxt";
import PrivateRoute from "./utils/PrivateRoute";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/login" Component={Login} />
            <Route element={<PrivateRoute  userType="hod"/>}>
              <Route path="/exam" Component={Exam} />
              <Route path="/reportissue" Component={Report} />
              <Route path="/pyq" Component={Previous} />
            </Route>
            <Route element={<PrivateRoute userType="exam-controller"/>}>
              <Route path="/addlevelofficer" Component={Addlevelofficer} />
              <Route path="/viewissue" Component={Viewissue} />
              <Route path="/viewquestionpaper" Component={Viewqp} />
            </Route>
            <Route element={<PrivateRoute userType="level-officer"/>}>
              <Route path="/addexam" Component={Addexam} />
              <Route path="/addhod" Component={AddHod} />
              <Route path="/addcourse" Component={AddCourse} />
              <Route path="/addfaculty" Component={AddFaculty} />
            </Route>
            <Route element={<PrivateRoute userType="faculty"/>}>
              <Route path="/Addquestion" Component={Addquestion} />
            </Route>
              <Route path="/addque" Component={Addque} />
              <Route path="/viewnotification" Component={Viewnotif} />
              <Route path="/date" Component={Date} />
              <Route path="/searchadd" Component={Searchadd} />
              <Route path="/viewcalander" Component={Viewcalander} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}
export default App;
