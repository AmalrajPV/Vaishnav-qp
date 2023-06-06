import React from 'react'
import Select from 'react-select';
import '../Level-1 css/Addexam.css'
function Addlevelofficer() {
  return (
    <div className='addexam-main'>
      <div className="title">ADD  LEVELOFFICER</div>
        <form action="" method="post">
          <table>
              <tr>
                <td>Name </td>
                <td><input type="text" style={{fontSize:'16px'}} name="" id="" className='hod-select-box' /></td>
              </tr>
              <tr>
                <td>College Name</td>
                <td><input type="text" style={{fontSize:'16px'}} name="" id="" className='hod-select-box' /></td>
              </tr>
              <tr>
                <td>Email</td>
                <td><input type="email" style={{fontSize:'16px'}} name="" id=""  className='hod-select-box'/></td>
              </tr>
              <tr>
                <td>Phone</td>
                <td><input type="tel" style={{fontSize:'16px'}} name="" id=""  className='hod-select-box' /></td>
              </tr>
              <tr>
                <td>Department</td>
                <td><Select className='hod-select-box'  /></td>
              </tr>
              <tr>
                  <td>Branch</td>
                  <td><Select  className='hod-select-box'/></td>
              </tr>
              <tr>
                  <td>Semester</td>
                  <td><Select className='hod-select-box'/></td>
              </tr>
              <tr>
                  <td>Subject</td>
                  <td><Select className='hod-select-box'/></td>
              </tr>
          </table>
          <div className="fields">
            <button className='logout report-btn'>ADD</button>
          </div>
        </form>
    </div>
  )
}

export default Addlevelofficer