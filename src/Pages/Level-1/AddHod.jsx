import React from 'react'
import Select from 'react-select';
import '../Level-1 css/Addexam.css';
const course = [
    { value: 1, label: "UG" },
    { value: 2, label: "PG" }
  ]
function AddHod() {
  return (
    <div className='addexam-main'>
      <div className="title">ADD  HOD</div>
        <form action="" method="post">
          <table>
              <tr>
                <td>UG/PG </td>
                <td><Select options={course} className='hod-select-box' /></td>
              </tr>
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
          </table>
          <div className="fields">
            <button className='logout report-btn'>ADD HOD</button>
          </div>
        </form>
    </div>
  )
}

export default AddHod

//////////////////////////
{/* <div className="form">
        <div className="fields">
          <p>UG/PG:</p>
          
        </div>
        <div className="fields">
          <p>Name:</p>
          
        </div>
        <div className="fields">
          <p>College Name:</p>
          <input type="text" style={{fontSize:'16px'}} name="" id="" className='hod-select-box' />
        </div>
        <div className="fields">
          <p>Email:</p>
          <input type="email" style={{fontSize:'16px'}} name="" id=""  className='hod-select-box'/>
        </div>
        <div className="fields">
          <p>Phone :</p>
          <input type="tel" style={{fontSize:'16px'}} name="" id=""  className='hod-select-box' />
        </div>
        <div className="fields">
          <p>Department:</p>
          <Select className='hod-select-box'  />
        </div>
        
      </div> */}