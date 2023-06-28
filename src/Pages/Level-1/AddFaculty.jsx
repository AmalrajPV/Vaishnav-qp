import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import '../Level-1 css/Addexam.css';

function AddFaculty() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    department_id: '',
    course_id: '',
    subject_id: ''
  });
  const [departments, setDepartments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [subjects, setSubjects] = useState([]);

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

  const handleSelectChange = (selectedOption, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: selectedOption.value
    });
  };

  useEffect(() => {
    if (formData.department_id) {
      fetch(`http://127.0.0.1:5000/api/departments/${formData.department_id}/courses`)
        .then(response => response.json())
        .then(data => {
          setCourses(data);
          setFormData({
            ...formData,
            course_id: '',
            subject_id: ''
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [formData.department_id]);

  useEffect(() => {
    if (formData.course_id) {
      fetch(`http://127.0.0.1:5000/api/courses/${formData.course_id}/subjects`)
        .then(response => response.json())
        .then(data => {
          setSubjects(data);
          setFormData({
            ...formData,
            subject_id: ''
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [formData.course_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the API
    fetch('http://127.0.0.1:5000/api/faculty', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the API response
        console.log(data);
        alert('Faculty added successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          password: '',
          department_id: '',
          course_id: '',
          subject_id: ''
        });
      })
      .catch(error => {
        // Handle error
        console.error(error);
        alert('An error occurred while adding faculty.');
      });
  };

  return (
    <div className='addexam-main'>
      <div className="title">ADD FACULTY</div>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  style={{ fontSize: '16px' }}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className='hod-select-box'
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  style={{ fontSize: '16px' }}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className='hod-select-box'
                />
              </td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>
                <input
                  type="tel"
                  style={{ fontSize: '16px' }}
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className='hod-select-box'
                />
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                <input
                  type="tel"
                  style={{ fontSize: '16px' }}
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className='hod-select-box'
                />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input
                  type="password"
                  style={{ fontSize: '16px' }}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className='hod-select-box'
                />
              </td>
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
                  onChange={(selectedOption) => handleSelectChange(selectedOption, 'department_id')}
                  options={departments.map(department => ({
                    value: department.department_id,
                    label: department.department_name
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td>Course</td>
              <td>
                <Select
                  className='hod-select-box'
                  value={departments.find((val)=>{
                    if (val.course_id === formData.course_id) {
                      return
                    }
                  })}
                  onChange={(selectedOption) => handleSelectChange(selectedOption, 'course_id')}
                  options={courses.map(course => ({
                    value: course.course_id,
                    label: course.course_name
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td>Subject</td>
              <td>
                <Select
                  className='hod-select-box'
                  value={departments.find((val)=>{
                    if (val.subject_id === formData.subject_id) {
                      return
                    }
                  })}
                  onChange={(selectedOption) => handleSelectChange(selectedOption, 'subject_id')}
                  options={subjects.map(subject => ({
                    value: subject.subject_id,
                    label: subject.subject_name
                  }))}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="fields">
          <button type="submit" className='logout report-btn'>ADD FACULTY</button>
        </div>
      </form>
    </div>
  );
}

export default AddFaculty;
