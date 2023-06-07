import React, { useState } from 'react'
import axios from 'axios';
import Select from 'react-select';
import '../Level-1 css/Addexam.css'
function Addquestion() {
  const [post,setPost] = useState({
    coursetype : '',
    deaprtment:'',
    branch:'',
    semester:'',
    subject:''
  })
  const handleChange=(e)=>{
    setPost({...post,[e.target.name]:[e.target.value]})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts',{post})
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
  return (
    <div className='addexam-main'>
      <div className="title">ADD QUESTIONS</div>
        <form action="" method="post" onSubmit={handleSubmit}>
          <table>
              <tr>
                  <td>UG/PG</td>
                  <td><Select  className='hod-select-box' name='coursetype' onChange={handleChange}/></td>
              </tr>
              <tr>
                  <td>Department</td>
                  <td><Select className='hod-select-box' name='department' onChange={handleChange}/></td>
              </tr>
              <tr>
                  <td>Branch</td>
                  <td><Select  className='hod-select-box' name='branch' onChange={handleChange}/></td>
              </tr>
              <tr>
                  <td>Semester</td>
                  <td><Select className='hod-select-box' name='semester' onChange={handleChange}/></td>
              </tr>
              <tr>
                  <td>Subject</td>
                  <td><Select className='hod-select-box' name='subject' onChange={handleChange}/></td>
              </tr>
          </table>
          <div className="fields">
            <button className='logout report-btn'>Next</button>
          </div>
        </form>
    </div>
  )
}

export default Addquestion