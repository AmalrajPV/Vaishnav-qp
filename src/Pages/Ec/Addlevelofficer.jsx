import React, { useState } from 'react'
import axios from 'axios'
import Select from 'react-select';
import '../Level-1 css/Addexam.css'
function Addlevelofficer() {
  const [post,setPost] = useState({
    name : '',
    collagename :'',
    email : '',
    phone : '',
    department :'',
    branch : '',
    semester : '',
    subject :'',

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
      <div className="title">ADD  LEVELOFFICER</div>
        <form action="" method="post" onSubmit={handleSubmit}>
          <table>
              <tr>
                <td>Name </td>
                <td><input type="text" style={{fontSize:'16px'}} name="name" id="" className='hod-select-box' onChange={handleChange}/></td>
              </tr>
              <tr>
                <td>College Name</td>
                <td><input type="text" style={{fontSize:'16px'}} name="collagename" id="" className='hod-select-box' onChange={handleChange} /></td>
              </tr>
              <tr>
                <td>Email</td>
                <td><input type="email" style={{fontSize:'16px'}} name="email" id=""  className='hod-select-box' onChange={handleChange}/></td>
              </tr>
              <tr>
                <td>Phone</td>
                <td><input type="tel" style={{fontSize:'16px'}} name="phone" id=""  className='hod-select-box' onChange={handleChange} /></td>
              </tr>
              <tr>
                <td>Department</td>
                <td><Select className='hod-select-box' onChange={handleChange} name='department' /></td>
              </tr>
              <tr>
                  <td>Branch</td>
                  <td><Select  className='hod-select-box' onChange={handleChange} name='branch'/></td>
              </tr>
              <tr>
                  <td>Semester</td>
                  <td><Select className='hod-select-box' onChange={handleChange} name='semester'/></td>
              </tr>
              <tr>
                  <td>Subject</td>
                  <td><Select className='hod-select-box' onChange={handleChange} name='subject'/></td>
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