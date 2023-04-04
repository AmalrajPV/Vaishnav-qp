import React from 'react'
import '../Ec css/Viewissue.css'
import '../hod css/Exam.css'
import '../hod css/Viewnotif.css'
function Viewissue() {
  return (
    <div>
       <div className="title">View issue</div>
       <div className="notification">
         <p>Hod id :</p>
         <p>Issue :</p>
         <button className='logout replay-button'>Replay</button>
       </div>
    </div>
  )
}

export default Viewissue