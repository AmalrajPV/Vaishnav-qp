import React from 'react'
import '../Ec css/Viewissue.css'
import '../hod css/Exam.css'
import '../hod css/Viewnotif.css'
function Viewissue() {
  const issue = []
  return (
    <div>
       <div className="title">View issue</div>
       {(issue.length >0) ? 
       <div className="notification">
         <p>Hod id :</p>
         <p>Issue :</p>
         <button className='logout replay-button'>Replay</button>
       </div> :
       <div className="exam-tile no-exam">No issues reported !!</div> }

    </div>
  )
}

export default Viewissue