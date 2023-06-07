import React from 'react'
import { useState } from 'react';
import '../hod css/Report.css'
import axios from 'axios';
function Report() {
  const [post,setPost] = useState({
        issue:''
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
    <div>
        <div className="report-issue">
            <div className="title">Report Issue</div>
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="report-box">
                  <textarea name="issue" id="" rows="10" placeholder='Enter issue...' onChange={handleChange} ></textarea>
                </div>
                <div className="report-btn">
                  <button className='logout report-btn'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}
export default Report