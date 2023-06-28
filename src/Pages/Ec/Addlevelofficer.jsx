import React, { useState } from 'react';
import axios from 'axios';
import '../Level-1 css/Addexam.css';

function Addlevelofficer() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://127.0.0.1:5000/api/level-officer', formData)
      .then(response => {
        console.log(response.data);
        alert("Created successfully");
        setFormData({
          name: '',
          address: '',
          email: '',
          phone: '',
          password: ''
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='addexam-main'>
      <div className="title">ADD LEVELOFFICER</div>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td><input type="text" style={{ fontSize: '16px' }} name="name" value={formData.name} className='hod-select-box' onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Address</td>
              <td><input type="text" style={{ fontSize: '16px' }} name="address" value={formData.address} className='hod-select-box' onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Email</td>
              <td><input type="email" style={{ fontSize: '16px' }} name="email" value={formData.email} className='hod-select-box' onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Phone</td>
              <td><input type="tel" style={{ fontSize: '16px' }} name="phone" value={formData.phone} className='hod-select-box' onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Password</td>
              <td><input type="password" style={{ fontSize: '16px' }} name="password" value={formData.password} className='hod-select-box' onChange={handleChange} /></td>
            </tr>
          </tbody>
        </table>
        <div className="fields">
          <button type="submit" className='logout report-btn'>ADD</button>
        </div>
      </form>
    </div>
  );
}

export default Addlevelofficer;
