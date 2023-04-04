import React from 'react'
import '../hod css/Exam.css'
import img from '../../Assets/pdf.png'
function Exam() {
  const exams = []
  return (
    <div>
        <div className="content">
            <div className="title">
             Todays Exams
            </div>
            {(exams.length >0) ? 
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
            </div>  :
            <div className="exam-tile no-exam">No exams today... !!</div> }
        </div>
    </div>
  )
}

export default Exam