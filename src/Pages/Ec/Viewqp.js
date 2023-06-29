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
      const response = await fetch('http://127.0.0.1:5000/api/question_papers');
      const data = await response.json();
      setQuestionPapers(data.question_papers);
    } catch (error) {
      console.error('Error fetching question papers:', error);
    }
  };

  const handleApprove = async (questionPaperId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/question_paper/approve?question_paper_id=${questionPaperId}`, {
        method: 'GET',
      });
      if (response.ok) {
        // Refresh the question papers list
        fetchQuestionPapers();
      } else {
        console.error('Failed to approve question paper.');
      }
    } catch (error) {
      console.error('Error approving question paper:', error);
    }
  };

  return (
    <div>
      <div className="title">Question paper</div>
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
                <a target="_blank" rel="noreferrer" href={`http://127.0.0.1:5000/api/download/question_paper?filename=${paper.question_paper_file}`}>
                  <img src={img} alt="" width="70px" />
                </a>
                <div className="view-button">
                  <button className='logout' onClick={() => handleApprove(paper.question_paper_id)}>Accept</button>
                  <button className='logout'>Re-generate</button>
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
