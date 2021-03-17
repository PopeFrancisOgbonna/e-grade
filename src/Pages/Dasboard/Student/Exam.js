import React from 'react';
import styles from './Exam.module.css'
import cx from 'classname';
import {FaChevronLeft, FaChevronRight, FaRegPaperPlane } from 'react-icons/fa';



const Exam = () =>{

  return(
    <div>
      <div className={styles.qBanner}>
        <p>5/10</p>
      </div>
      <div className={styles.ExamWrap}>
        <div>
          <div className={styles.quest}>
            <p>What is force?</p>
          </div>
        </div>
        <div className='ansContainer'>
          <div className={styles.ans}>
            <textarea cols='4' rows='3' placeholder="Enter Your Answer Here." />
          </div>
          <div className={styles.toggle}>
            <button className={styles.back}> <FaChevronLeft className={styles.icons} />Back</button>
            <button className={styles.next}>Next <FaChevronRight className={styles.icons}/></button>
          </div>
          <div>
            <button className={cx(styles.submit)}><FaRegPaperPlane className={styles.iconssub}/>Submit Answer</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Exam;