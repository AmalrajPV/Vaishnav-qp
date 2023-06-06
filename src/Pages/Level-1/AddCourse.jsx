import React from 'react'
import Select from 'react-select';
import '../Level-1 css/Addexam.css';
function AddCourse() {
  return (
    <div>
      <div className='addexam-main'>
        <div className="title">ADD COURSE</div>
           <form action="" method="post">
              <table>
                  <tr>
                    <td>UG/PG :</td>
                    <td><Select  className='hod-select-box'/></td>
                  </tr>
                  <tr>
                    <td>Department :</td>
                    <td><Select  className='hod-select-box'/></td>
                  </tr>
                  <tr>
                    <td>Branch :</td>
                    <td><Select  className='hod-select-box'/></td>
                  </tr>
                  <tr>
                    <td>Semester :</td>
                    <td><Select  className='hod-select-box'/></td>
                  </tr>
                  <tr>
                    <td>Subject :</td>
                    <td><input type="text" style={{fontSize:'16px'}} name="" id="" className='hod-select-box'/></td>
                  </tr>
              </table>
              <div className="fields">
                <button className='logout report-btn'>ADD COURSE</button>
              </div>
           </form>
      </div>
    </div>
  )
}

export default AddCourse