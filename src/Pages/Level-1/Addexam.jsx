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
      <div className="title">Add exam</div>
      <div className="form">
        <div className="fields">
          <p>UG/PG:</p>
          <Select options={course} className='select-box' />
        </div>
        <div className="fields">
          <p>Branch:</p>
          <Select className='select-box'/>
        </div>
        <div className="fields">
          <p>Semester:</p>
          <Select className='select-box'/>
        </div>
        <div className="fields">
          <p>Subject:</p>
          <Select className='select-box'/>
        </div>
        <div className="fields">
          <p>Start time:</p>
          <input type="time" name="" id=""  className='select-box' />
        </div>
        <div className="fields">
          <p>End time:</p>
          <input type="time" name="" id="" className='select-box' />
        </div>
        <div className="fields">
          <p>Duration:</p>
          <input type="text" name="" id="" className='select-box' disabled />
        </div>
        <div className="fields">
          <button className='logout report-btn'>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Addexam