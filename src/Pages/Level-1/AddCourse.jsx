import React from 'react'
import Select from 'react-select';
import '../Level-1 css/Addexam.css';
import axios from 'axios'
import { useState } from 'react';
function AddCourse() {
  const course = [
    { value: 1, label: "UG" },
    { value: 2, label: "PG" }
  ]
  const [post, setPost] = useState({
    coursetype: '',
    department: '',
    branch: '',
    semester: '',
    subject: '',
  })
  const handleChange = (e) => {

    setPost({ ...post, [e.target.id]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts', { post })
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <div className='addexam-main'>
        <div className="title">ADD COURSE</div>
        <form action="" method="post" onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>UG/PG :</td>
              <td>
                {/* <Select options={course}  className='hod-select-box' id='coursetype' onChange={handleChange}/> */}
                <select value={post.coursetype} id='coursetype' onChange={handleChange}>
                  {course.map((option) => (
                    <option value={option.label}>{option.label}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Department :</td>
              <td><Select className='hod-select-box' id='department' onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Branch :</td>
              <td><Select className='hod-select-box' id='branch' onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Semester :</td>
              <td><Select className='hod-select-box' id='semester' onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Subject :</td>
              <td><input type="text" style={{ fontSize: '16px' }} name="" id="subject" className='hod-select-box' onChange={handleChange} /></td>
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