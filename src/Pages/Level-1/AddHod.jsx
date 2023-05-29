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
      <div className="title">Add Head of Department</div>
      <div className="form">
        <div className="fields">
          <p>UG/PG:</p>
          <Select options={course} className='hod-select-box' />
        </div>
        <div className="fields">
          <p>Name:</p>
          <input type="text" style={{fontSize:'16px'}} name="" id="" className='hod-select-box' />
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
        <div className="fields">
          <button className='logout report-btn'>Add HOD</button>
        </div>
      </div>
    </div>
  )
}

export default AddHod