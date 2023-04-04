import React from 'react'
import '../hod css/Report.css'
function Report() {
  return (
    <div>
        <div className="report-issue">
            <div className="title">Report Issue</div>
            <div className="report-box">
              <textarea name="" id="" rows="10" placeholder='Enter issue...' ></textarea>
            </div>
            <div className="report-btn">
              <button className='logout report-btn'>Submit</button>
            </div>
        </div>
    </div>
  )
}
export default Report