import React, { useEffect, useState } from 'react';
import img from '../../Assets/pdf.png';
import '../hod css/Exam.css';
import '../Ec css/Viewqp.css';

function Viewqp() {
  const [questionPapers, setQuestionPapers] = useState([]);

  useEffect(() => {
    fetchQuestionPapers();
  }, []);

  const fetchQuestionPapers = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/accepted_question_papers');
      const data = await response.json();
      setQuestionPapers(data.question_papers);
    } catch (error) {
      console.error('Error fetching question papers:', error);
    }
  };

  return (
    <div>
      <div className="title">Exam</div>
      {questionPapers.length > 0 ? (
        <div className="exams">
          {questionPapers.map((paper) => (
            <div className="exam-tile" key={paper.question_paper_id}>
              <div className="tile-content">
                <p>Branch: {paper.exam.course}</p>
                <p>Semester: {paper.exam.semester}</p>
                <p>Subject: {paper.exam.subject}</p>
                <p>Question paper code: {paper.question_paper_id}</p>
              </div>
              <div className="pdf">
                <a target='_blank'  rel="noreferrer" href={`http://127.0.0.1:5000/api/download/question_paper?filename=${paper.question_paper_file}`}><img src={img} alt="" width="70px" /></a>
                <div className="view-button">

                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="exam-tile no-exam">No exams today... !!</div>
      )}
    </div>
  );
}

export default Viewqp;
