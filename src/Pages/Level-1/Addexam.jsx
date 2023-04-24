import React from 'react'

function Addexam() {
  return (
    <div>
      <div className="title">Add exam</div>
      <div className="form">
        <div className="fields">
            <p>UG/PG :</p>
            
        </div>
        <div className="fields">
          <p>Branch :</p>
        </div>
        <div className="fields">
          <p>Semester :</p>
        </div>
        <div className="fields">
          <p>Subject :</p>
        </div>
        <div className="fields">
           <p>Start time :</p>
           <input type="time" name="" id="" />
        </div>
        <div className="fields">
          <p>End time :</p>
          <input type="time" name="" id="" />
        </div>
        <div className="fields">
           <p>Duration :</p>
        </div>
      </div>
    </div>
  )
}

export default Addexam