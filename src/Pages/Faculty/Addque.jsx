import React from 'react'
import { useState } from 'react';
import '../Level-1 css/Addexam.css';
import axios from 'axios'
function Addque() {
    const [post,setPost] = useState({
        tablename : '',
        section:'',
        question:'',
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
        <div className='addexam-main'>
             <div className="title">ADD QUESTIONS</div>
             <form action="" method="post" onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td> TableName  :</td>
                        <td><input type="text" name="tablename" id="" className='hod-select-box'  onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>section : </td>
                        <td><input type="text" name="section" id="" className='hod-select-box' onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Question : </td>
                        <td><textarea name="question" id="" cols="30" rows="10" onChange={handleChange}></textarea></td>
                    </tr>
                </table>
                <div className="fields">
                    <button className='logout report-btn'>Add Question</button>
                 </div>
             </form>
        </div>
    </div>
  )
}

export default Addque