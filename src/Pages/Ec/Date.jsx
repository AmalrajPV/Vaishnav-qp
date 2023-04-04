import React from 'react'
import '../Ec css/Viewissue.css'
import '../hod css/Exam.css'
import '../hod css/Viewnotif.css'
function Date() {
    const colr = [1]
  return (
    <div>
        <div className="title">Date</div>
       {(colr.length >0) ? 
       <div className="notification">
         <p>Branch :</p>
         <p>Semester :</p>
         <p>Subject :</p>
         <button className='logout replay-button'>Cancel</button>
       </div> :
       <div className="exam-tile no-exam">No Exams..!!</div> }

    </div>
  )
}

export default Date