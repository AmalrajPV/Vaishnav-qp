import React from 'react'
import Select from 'react-select';
import '../Level-1 css/Addexam.css'
import axios from 'axios'
import { useState } from 'react';
function Addexam() {
  const course = [
    { value: 1, label: "UG" },
    { value: 2, label: "PG" }
  ]
  const [post,setPost] = useState({
    coursetype:'',
    department :'',
    branch : '',
    semester : '',
    subject :'',
    starttime:'',
    endtime:''
  })
const handleChange=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})
  }
const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts',{post})
    .then(response => console.log(response))
    .catch(err => console.log(err))   
}
  return (
    <div className='addexam-main'>
      <div className="title">ADD EXAM</div>
        <form action="" method="post" onSubmit={handleSubmit}>
            <table>
              <tr>
                <td>UG/PG</td>
                <td><Select options={course} className='hod-select-box' name='coursetype' onChange={handleChange} /></td>
              </tr>
              <tr>
                <td>Department</td>
                <td><Select className='hod-select-box' name='department' onChange={handleChange}/></td>
              </tr>
              <tr>
                <td>Branch</td>
                <td><Select className='hod-select-box' name='branch' onChange={handleChange}/></td>
              </tr>
              <tr>
                <td>Semester</td>
                <td><Select className='hod-select-box' name='semester' onChange={handleChange}/></td>
              </tr>
              <tr>
                <td>Subject</td>
                <td><Select className='hod-select-box' name='subject' onChange={handleChange}/></td>
              </tr>
              <tr>
                <td>Start time</td>
                <td><input type="time" name="starttime" id=""  className='hod-select-box' onChange={handleChange} /></td>
              </tr>
              <tr>
                <td>End time</td>
                <td><input type="time" name="endtime" id=""  className='hod-select-box'  onChange={handleChange}/></td>
              </tr>
              {/* <tr>
                <td>Duration</td>
                <td><input type="text" name="" id="" className='hod-select-box' disabled /></td>
              </tr> */} 
            </table>
            <div className="fields">
              <button className='logout report-btn'>Add</button>
            </div>    
        </form>
    </div>
  )
}
export default Addexam

