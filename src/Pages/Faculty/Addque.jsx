import React from 'react'
import '../Level-1 css/Addexam.css';

function Addque() {
  return (
    <div>
        <div className='addexam-main'>
             <div className="title">ADD QUESTIONS</div>
             <form action="" method="post">
                <table>
                    <tr>
                        <td> TableName  :</td>
                        <td><input type="text" name="" id="" className='hod-select-box' /></td>
                    </tr>
                    <tr>
                        <td>section : </td>
                        <td><input type="text" name="" id="" className='hod-select-box'/></td>
                    </tr>
                    <tr>
                        <td>Question : </td>
                        <td><textarea name="" id="" cols="30" rows="10"></textarea></td>
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