import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../App.css';

function ViewCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [examDetails, setExamDetails] = useState(null);
  const [exams, setExams] = useState([]);
  const [examDates, setExamDates] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/exams')
      .then(response => response.json())
      .then(data => {
        setExams(data);
        // Create an array of dates from the exams data
        const dates = data.map(exam => {
          const examDate = new Date(exam.date_and_time);
          return new Date(examDate.getFullYear(), examDate.getMonth(), examDate.getDate());
        });

        setExamDates(dates);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const selectedExam = exams.find(exam => {
      const examDate = new Date(exam.date_and_time);
      return (
        examDate.getDate() === date.getDate() &&
        examDate.getMonth() === date.getMonth() &&
        examDate.getFullYear() === date.getFullYear()
      );
    });
    setExamDetails(selectedExam);
  };

  const highlightExamDates = ({ date }) => {
    const formattedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    if (examDates.some(examDate => examDate.getTime() === formattedDate.getTime())) {
      return 'highlight';
    }
    return null;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div style={{ marginRight: '2rem' }}>
        <h1>View Calendar</h1>
        <div style={{ marginTop: '2rem' }}>
          <Calendar onClickDay={handleDateClick} tileClassName={highlightExamDates} />
        </div>
      </div>
      {selectedDate && examDetails && (
        <div style={{ backgroundColor: '#f2f2f2', padding: '1rem', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
          <h2 style={{ marginBottom: '1rem' }}>Exam Details</h2>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Date:</strong> {selectedDate.toDateString()}
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Department:</strong> {examDetails.department.department_name}
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Course:</strong> {examDetails.course.course_name}
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Semester:</strong> {examDetails.semester}
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Subject:</strong> {examDetails.subject.subject_name}
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewCalendar;
