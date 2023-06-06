import React from 'react'
import Select from 'react-select';
import '../Level-1 css/Addexam.css'
function Addexam() {
  const course = [
    { value: 1, label: "UG" },
    { value: 2, label: "PG" }
  ]
  return (
    <div className='addexam-main'>
      <div className="title">ADD EXAM</div>
        <form action="" method="post">
            <table>
              <tr>
                <td>UG/PG</td>
                <td><Select options={course} className='hod-select-box' /></td>
              </tr>
              <tr>
                <td>Department</td>
                <td><Select className='hod-select-box'/></td>
              </tr>
              <tr>
                <td>Branch</td>
                <td><Select className='hod-select-box'/></td>
              </tr>
              <tr>
                <td>Semester</td>
                <td><Select className='hod-select-box'/></td>
              </tr>
              <tr>
                <td>Subject</td>
                <td><Select className='hod-select-box'/></td>
              </tr>
              <tr>
                <td>Start time</td>
                <td><input type="time" name="" id=""  className='hod-select-box' /></td>
              </tr>
              <tr>
                <td>End time</td>
                <td><input type="time" name="" id=""  className='hod-select-box' /></td>
              </tr>
              <tr>
                <td>Duration</td>
                <td><input type="text" name="" id="" className='hod-select-box' disabled /></td>
              </tr>
            </table>
            <div className="fields">
              <button className='logout report-btn'>Add</button>
            </div>    
        </form>
    </div>
  )
}
export default Addexam

