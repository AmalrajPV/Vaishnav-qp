import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import '../Level-1 css/Addexam.css';

function AddHod() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    department_id: '',
    password: ''
  });
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/departments')
      .then(response => response.json())
      .then(data => {
        // Set the department options in the state
        setDepartments(data);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, department_id: selectedOption.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:5000/api/hod', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(data => {
        console.log(data);
        if (data.ok) {
          alert("HOD created successfully..!")
          setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            department_id: '',
            password: ''
          })
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='addexam-main'>
      <div className="title">ADD HOD</div>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td><input type="text" style={{ fontSize: '16px' }} name="name" value={formData.name} onChange={handleInputChange} className='hod-select-box' /></td>
            </tr>
            <tr>
              <td>Email</td>
              <td><input type="email" style={{ fontSize: '16px' }} name="email" value={formData.email} onChange={handleInputChange} className='hod-select-box' /></td>
            </tr>
            <tr>
              <td>Phone</td>
              <td><input type="tel" style={{ fontSize: '16px' }} name="phone" value={formData.phone} onChange={handleInputChange} className='hod-select-box' /></td>
            </tr>
            <tr>
              <td>Address</td>
              <td><input type="text" style={{ fontSize: '16px' }} name="address" value={formData.address} onChange={handleInputChange} className='hod-select-box' /></td>
            </tr>
            <tr>
              <td>Department</td>
              <td>
                <Select
                  className='hod-select-box'
                  value={departments.find((val)=>{
                    if (val.department_id === formData.department_id) {
                      return
                    }
                  })}
                  onChange={handleSelectChange}
                  options={departments.map(department => ({
                    value: department.department_id,
                    label: department.department_name
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td><input type="password" style={{ fontSize: '16px' }} name="password" value={formData.password} onChange={handleInputChange} className='hod-select-box' /></td>
            </tr>
          </tbody>
        </table>
        <div className="fields">
          <button type="submit" className='logout report-btn'>ADD HOD</button>
        </div>
      </form>
    </div>
  );
}

export default AddHod;
