import React, {useState} from 'react';
import styles from './Result.module.css'



const Result = () =>{

  const resultData = [
    {
      id: 1,
      name: 'Francis Sunday',
      course_title: 'Programming I',
      course_code: 'CSC 201',
      score: '60%'
    },
    {
      id: 2,
      name: 'Francis Sunday',
      course_title: 'Programming II',
      course_code: 'CSC 204',
      score: '60%'
    },
    {
      id: 3,
      name: 'Francis Sunday',
      course_title: 'Linear Algebra',
      course_code: 'Math 201',
      score: '80%'
    },
    {
      id: 4,
      name: 'Francis Sunday',
      course_title: 'System Analysis & Design',
      course_code: 'CSC 335',
      score: '40%'
    }
  ];

  let tableHeader = () => {
    let header = Object.keys(resultData[0]);
    return header.map((key, index) => {
      return<th key={index}>{key.toUpperCase()}</th>
    })
  }

  let renderTable = (data) => {
    return data.map((result, index) => {
      return<tr key={result.id}>
        <td>{++index}</td>
        <td>{result.name}</td>
        <td>{result.course_title}</td>
        <td>{result.course_code}</td>
        <td>{result.score}</td>
      </tr>
    })
  };

  const [courseTitle, setCourseTitle] = useState('');
  const [warning, setWarning] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleDisplay = () => {
    setWarning('');
    if(courseTitle === ''){
      setWarning('Please Type Course Title in the box above.');
      return
    }
    setShowResult(true);
  }
  let filtered = resultData.filter((results) =>{
    return results.course_title.toLowerCase() === courseTitle.toLowerCase();
  })
  
  return(
    <div>
      <div className={styles.header}>
        <h1>View Exam Results</h1>
        <div className={styles.form}>
          <input type='text' name='course' placeholder='Enter Course Title' required
            onChange={(e) => setCourseTitle(e.target.value)}
          />
          <button id={styles.filter}
            onClick={() =>handleDisplay()}
          >Show Result</button>
          <button id={styles.all} 
            onClick={() => {setCourseTitle(''); setShowResult(true)}}
          >All Result</button> 
        </div> 
      </div>
      <p className={styles.warn}>{warning}</p>
      <div className={styles.tableContainer}>
        {
          showResult ?  
          <table>
            <thead>
              {tableHeader()}
            </thead>
            <tbody>
            {courseTitle !== ''?( 
              renderTable(filtered)
            ): renderTable(resultData)}
            </tbody>
          </table>: null
        }
      </div>
    </div>
  )
}
export default Result;