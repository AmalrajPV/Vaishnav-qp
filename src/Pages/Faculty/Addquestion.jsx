import React, { useEffect, useState } from "react";
import Select from "react-select";
import "../Level-1 css/Addexam.css";
import axios from "axios";

function Addexam() {
  const [formData, setFormData] = useState({
    department_id: "",
    course_id: "",
    semester: 1,
    subject_id: "",
  });
  const [departments, setDepartments] = useState([]);
  const [courses, setCourses] = useState([]);
  const semesters = [1, 2, 3, 4];
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/departments")
      .then((response) => response.json())
      .then((data) => {
        setDepartments(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (selectedOption, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: selectedOption.value,
    });
  };

  useEffect(() => {
    if (formData.department_id) {
      fetch(
        `http://127.0.0.1:5000/api/departments/${formData.department_id}/courses`
      )
        .then((response) => response.json())
        .then((data) => {
          setCourses(data);
          setFormData((prevFormData) => ({
            ...prevFormData,
            course_id: "",
            subject_id: "",
          }));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [formData.department_id]);

  useEffect(() => {
    if (formData.course_id) {
      fetch(`http://127.0.0.1:5000/api/courses/${formData.course_id}/subjects`)
        .then((response) => response.json())
        .then((data) => {
          setSubjects(data);
          setFormData((prevFormData) => ({
            ...prevFormData,
            subject_id: "",
          }));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [formData.course_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/api/question", formData)
      .then((response) => {
        console.log(response.data);
        alert("Question added successfully!");
        setFormData({
          department_id: "",
          course_id: "",
          semester: 1,
          subject_id: "",
          question_text:"",
          section:"",
          mark: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while adding the Question.");
      });
  };

  const handleChangeText = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="addexam-main">
      <div className="title">ADD QUESTION</div>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Department</td>
              <td>
                <Select
                  className="hod-select-box"
                  name="department"
                  value={departments.find(
                    (val) => {if (val.department_id === formData.department_id) {
                      return
                    }}
                  )}
                  onChange={(selectedOption) =>
                    handleChange(selectedOption, "department_id")
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
                  name="course"
                  value={courses.find(
                    (val) => {if (val.course_id === formData.course_id) {
                      return
                    }}
                  )}
                  onChange={(selectedOption) =>
                    handleChange(selectedOption, "course_id")
                  }
                  options={courses.map((course) => ({
                    value: course.course_id,
                    label: course.course_name,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td>Semester</td>
              <td>
                <Select
                  className="hod-select-box"
                  name="semester"
                  onChange={(selectedOption) =>
                    handleChange(selectedOption, "semester")
                  }
                  options={semesters.map((semester) => ({
                    value: semester,
                    label: semester,
                  }))}
                />
              </td>
            </tr>
            <tr>
              <td>Subject</td>
              <td>
                <Select
                  className="hod-select-box"
                  name="subject"
                  value={subjects.find(
                    (val) => {if (val.department_id === formData.department_id) {
                      return
                    }}
                  )}
                  onChange={(selectedOption) =>
                    handleChange(selectedOption, "subject_id")
                  }
                  options={subjects.map((subject) => ({
                    value: subject.subject_id,
                    label: subject.subject_name,
                  }))}
                />
              </td>
              <td>Subject code: {(formData.subject_id != '') ?<span>{courses.find(
                    (val) => {if (val.course_id === formData.course_id) {
                      return val
                    }}
                  ).course_name}{departments.find(
                    (val) => {if (val.department_id === formData.department_id) {
                      return val
                    }}
                  ).department_name}</span>: <></> }{`${formData.subject_id}`}</td>
              <td></td>
            </tr>
            <tr>
              <td>section : </td>
              <td>
                <input
                  type="text"
                  name="section"
                  id=""
                  className="hod-select-box"
                  onChange={handleChangeText}
                />
              </td>
            </tr>
            <tr>
              <td>mark : </td>
              <td>
                <input
                  type="text"
                  name="mark"
                  id=""
                  className="hod-select-box"
                  onChange={handleChangeText}
                />
              </td>
            </tr>
            <tr>
              <td>Question : </td>
              <td>
                <textarea
                  name="question_text"
                  id=""
                  cols="30"
                  rows="10"
                  onChange={handleChangeText}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="fields">
          <button type="submit" className="logout report-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addexam;
