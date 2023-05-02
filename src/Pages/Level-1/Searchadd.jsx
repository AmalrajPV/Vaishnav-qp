import React from 'react'
import '../hod css/Exam.css'
function Searchadd() {
  return (
    <div>
      <div className="exams">
        <div className="title">Add exam</div>
        <div className="exam-tile">
          <div className="tile-content">
            <p>Branch:</p>
            <p>Semester:</p>
            <p>Subject:</p>
            <p>Question paper code:</p>
          </div>
        </div>
        <div className="searchadd-button">
          <button className='logout report-btn'>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Searchadd