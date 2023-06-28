import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import '../Level-1 css/Addexam.css';
import axios from 'axios';

function Addexam() {
  const [formData, setFormData] = useState({
    department_id: '',
    course_id: '',
    semester: 1,
    subject_id: '',
    date_and_time: ''
  });
  const [departments, setDepartments] = useState([]);
  const [courses, setCourses] = useState([]);
  const semesters = [1, 2, 3, 4];
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
  const handleChange = (selectedOption, fieldName) => {
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
    axios.post('http://127.0.0.1:5000/api/exam', formData)
      .then(response => {
        // Handle the API response
        console.log(response.data);
        alert('Exam added successfully!');
        setFormData({
          department_id: '',
          course_id: '',
          semester: 1,
          subject_id: '',
          date_and_time: ''
        })
      })
      .catch(error => {
        // Handle error
        console.error(error);
        alert('An error occurred while adding the exam.');
      });
  };

  return (
    <div className='addexam-main'>
      <div className="title">ADD EXAM</div>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Department</td>
              <td>
                <Select
                  className='hod-select-box'
                  name='department'
                  value={departments.find((val)=>{
                    if (val.department_id === formData.department_id) {
                      return
                    }
                  })}
                  onChange={(selectedOption) => handleChange(selectedOption, 'department_id')}
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
                  name='course'
                  value={departments.find((val)=>{
                    if (val.course_id === formData.course_id) {
                      return
                    }
                  })}
                  onChange={(selectedOption) => handleChange(selectedOption, 'course_id')}
                  options={courses.map(course => ({
                    value: course.course_id,
                    label: course.course_name
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td>Semester</td>
              <td>
                <Select
                  className='hod-select-box'
                  name='semester'
                  onChange={(selectedOption) => handleChange(selectedOption, 'semester')}
                  options={semesters.map(semester => ({
                    value: semester,
                    label: semester
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td>Subject</td>
              <td>
                <Select
                  className='hod-select-box'
                  name='subject'
                  value={departments.find((val)=>{
                    if (val.subject_id === formData.subject_id) {
                      return
                    }
                  })}
                  onChange={(selectedOption) => handleChange(selectedOption, 'subject_id')}
                  options={subjects.map(subject => ({
                    value: subject.subject_id,
                    label: subject.subject_name
                  }))}
                />
              </td>
              <td>Subject code: {(formData.subject_id != '') ?<span>{formData.department_id}IT</span>: <></> }{`${formData.subject_id}`}</td>
            </tr>
            <tr>
              <td>Exam time</td>
              <td>
                <input
                  type="datetime-local"
                  name="date_and_time"
                  className='hod-select-box'
                  value={formData.date_and_time}
                  onChange={e => setFormData({ ...formData, date_and_time: e.target.value })}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="fields">
          <button type="submit" className='logout report-btn'>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Addexam;
