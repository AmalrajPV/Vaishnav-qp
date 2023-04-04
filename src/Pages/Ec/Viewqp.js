import React from 'react'
import img from '../../Assets/pdf.png'
import '../hod css/Exam.css'
import '../Ec css/Viewqp.css'
function Viewqp() {
  const exam = ['as']
  return (
    <div>
        <div className="title"> Question paper</div>
        {(exam.length >0) ? 
            <div className="exams">
                <div className="exam-tile">
                  <div className="tile-content">
                    <p>Branch:</p>
                    <p>Semester:</p>
                    <p>Subject:</p>
                    <p>Question paper code:</p>
                  </div>
                  <div className="pdf">
                    <a href="#"><img src={img} alt="" width='70px' /></a>
                     <div className="view-button">
                        <button className='logout'>Accept</button>
                        <button className='logout'>Re-generate</button>
                     </div>
                  </div>
                </div>
            </div>  :
            <div className="exam-tile no-exam">No exmas today... !!</div> }
    </div>

  )
}

export default Viewqp