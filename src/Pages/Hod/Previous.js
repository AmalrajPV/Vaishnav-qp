import React from 'react'
import img from '../../Assets/pdf.png'
import '../hod css/Exam.css'
function Previous() {
  return (
    <div>
        <div className="exams">
                <div className="exam-tile">
                  <div className="tile-content">
                    <p>Branch:</p>
                    <p>Semester:</p>
                    <p>Subject:</p>
                    <p>Question paper code:</p>
                  </div>
                  <div className="pdf">
                    <img src={img} alt="" width='70px' />
                     <div className="btn1">
                      <a href="#">Download</a>
                     </div>
                  </div>
                </div>
            </div> 
    </div>
  )
}

export default Previous