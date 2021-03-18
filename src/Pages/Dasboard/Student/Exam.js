import React, { useState } from 'react';
import styles from './Exam.module.css'
import cx, { setTo } from 'classname';
import {FaChevronLeft, FaChevronRight, FaRegPaperPlane } from 'react-icons/fa';
import  Modals  from '../../../Components/Modal/Modals';



const Exam = () =>{

  //exan questions
  const exam = [
    {
      id: 1,
      question: 'What is Force?',
      ans: 'Force is the product of mass and acceleration due to gravity',
      keyword: ['mass', 'acceleration', 'gravity','product']
    },
    {
      id: 2,
      question: 'Define scalar quantity.',
      ans: 'A Scalar  is underived quantity having magnitude but without direction.',
      keyword: ['magnitude', 'direction', 'without','underived quantity']
    },
    {
      id: 3,
      question: 'List the two types of forces',
      ans: 'contact force and Force fields',
      keyword: ['contact', 'field', 'force',]
    },
    {
      id: 4,
      question: 'What do you understand by Inertia?',
      ans: 'The inertia of a body is its reluctance to  come to rest when in motion or move when at rest as a result of force applied',
      keyword: ['reluctance', 'rest', 'force applied','mass', 'velocity']
    },
  ];
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //for submit button toggle
  const [showSubmit, setShowSubmit] = useState(false);
  const handleSubmitBtn = (option) => setShowSubmit(option);

  let [nextQuest, setNextQuest] = useState(0);
  let [score, setScore] = useState([]);
  let [answer, setAns] = useState('');
  let [total, setTotal] = useState(0);
  
  //submit answer
  const ansQust = () => {
    let mark = null;
    let unitScore = null;
    for (let i = 0; i < exam[nextQuest].keyword.length; i++) {
      if(answer.toLowerCase().includes(exam[nextQuest].keyword[i].toLowerCase())){
        mark  = 25;
        unitScore  += (mark/100)* 5;
        // console.log(score);
        // console.log(mark, exam[nextQuest].keyword[i] );
        mark = ''
      }
      setAns('') 
    }
    //Prevents the addition of empty score when question length is exceeded.
    if(score.length === exam.length){
      return;
    }
    setScore(score =>([...score, unitScore]));
  }

  //compute total score
  const totalScore = () => {
    let t = 0;
    console.log(`the score is ${score}`)
    score.forEach(value => {
      // console.log(value);
      t += value;
      
    });
    setTotal(t)
    // console.log(`Total score is ${t} about ${(t/(exam.length * 5)) * 100}%`);
  }

  //handle exam questions
  const toggleQuestions = (option) => {
    if((exam.length -1) !== nextQuest && option ==='next'){
      ansQust();
      setNextQuest(nextQuest + 1);
      // console.log(score);
      return;
    }
    if(option ==='next' && (exam.length - 1) === nextQuest){
      ansQust();
      setShowSubmit(true);
      return;
    }
    if(option === 'back' && nextQuest > 0){
      score.pop();
      // console.log(score);
      setNextQuest(nextQuest - 1);
      setShowSubmit(false);
      return;
    }
    if(option === 'back' && score.length === 1){
      score.pop();
      // console.log(score);
    }
  }


  return(
    <div>
      <div className={styles.qBanner}>
        <p>{nextQuest + 1}/{exam.length}</p>
      </div>
      <div className={styles.ExamWrap}>
        <div>
          <div className={styles.quest}>
            <p>{exam[nextQuest].question}</p>
          </div>
        </div>
        <div className='ansContainer'>
          <div className={styles.ans}>
            <textarea cols='4' rows='3' placeholder="Enter Your Answer Here." 
              value={answer}
              onChange={(e) => setAns(e.target.value)}
            />
          </div>
          <div className={styles.toggle}>
            <button className={styles.back}
              onClick={() => toggleQuestions('back')}
            > <FaChevronLeft className={styles.icons} />Back</button>
            <button className={styles.next}
              onClick={() => toggleQuestions('next')}
            >Next <FaChevronRight className={styles.icons}/></button>
          </div>
          <div>
            <button className={!showSubmit ? cx(styles.hide): cx(styles.submit) }
              onClick={() =>{totalScore(); handleShow()}}
            ><FaRegPaperPlane className={styles.iconssub}/>Submit Answer</button>
          </div>
          <Modals show={show} handleClose={handleClose} handleShow={handleShow} title='Your Exam Score'>
            <p>Congratulations! You scored {total} </p>
            <p className='lead display-3'>{(total/(exam.length * 5)) * 100}%</p>
          </Modals>
        </div>
      </div>
    </div>
  )
}
export default Exam;