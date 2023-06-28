import React, { useEffect } from "react";
import Select from "react-select";
import "../Level-1 css/Addexam.css";
import axios from "axios";
import { useState } from "react";
function AddCourse() {
  const [formData, setFormData] = useState({
    department_id: "",
    course_id: "",
    semester: "",
    subject_name: "",
  });
  const [departments, setDepartments] = useState([]);
  const [courses, setCourses] = useState([]);
  const semesters = [1, 2, 3, 4];

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/departments")
      .then((response) => response.json())
      .then((data) => {
        // Set the department options in the state
        setDepartments(data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (formData.department_id) {
      fetch(
        `http://127.0.0.1:5000/api/departments/${formData.department_id}/courses`
      )
        .then((response) => response.json())
        .then((data) => {
          setCourses(data);
          setFormData({
            ...formData,
            course_id: "",
            subject_id: "",
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [formData.department_id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (selectedOption, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: selectedOption.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    fetch("http://127.0.0.1:5000/api/subject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((data) => {
        console.log(data);
        if (data.ok) {
          alert("Subject created successfully..!");
          setFormData({
            department_id: "",
            course_id: "",
            semester: "",
            subject_name: "",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="addexam-main">
        <div className="title">ADD SUBJECT</div>
        <form action="" method="post" onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>Department</td>
              <td>
                <Select
                  className="hod-select-box"
                  value={departments.find((val) => {
                    if (val.department_id === formData.department_id) {
                      return;
                    }
                  })}
                  onChange={(selectedOption) =>
                    handleSelectChange(selectedOption, "department_id")
                  }
                  options={departments.map((department) => ({
                    value: department.department_id,
                    label: department.department_name,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td>Course</td>
              <td>
                <Select
                  className="hod-select-box"
                  value={departments.find((val) => {
                    if (val.course_id === formData.course_id) {
                      return;
                    }
                  })}
                  onChange={(selectedOption) =>
                    handleSelectChange(selectedOption, "course_id")
                  }
                  options={courses.map((course) => ({
                    value: course.course_id,
                    label: course.course_name,
                  }))}
                />
              </td>
            </tr>

            {/* <tr>
              <td>Branch :</td>
              <td><Select className='hod-select-box' id='branch' onChange={handleChange} /></td>
            </tr> */}
            <tr>
              <td>Semester :</td>
              <td>
                <Select
                  className="hod-select-box"
                  name="semester"
                  onChange={(selectedOption) =>
                    handleSelectChange(selectedOption, "semester")
                  }
                  options={semesters.map((semester) => ({
                    value: semester,
                    label: semester,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td>Subject Name :</td>
              <td>
                <input
                  type="text"
                  style={{ fontSize: "16px" }}
                  value={formData.course_name}
                  name="subject_name"
                  id="subject"
                  className="hod-select-box"
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          </table>
          <div className="fields">
            <button className="logout report-btn">ADD COURSE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
