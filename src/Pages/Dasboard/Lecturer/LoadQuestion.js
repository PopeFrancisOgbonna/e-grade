import React from 'react';
import styles from './Question.module.css';
import {FaPaperPlane} from 'react-icons/fa';


const LoadQuestion = () =>{

    return(
        <div className={styles.wrapDiv}>
           <div className={styles.titleText}>
                <h1>Upload Exam Questions</h1>
                <p >* Don't try to upload Bulk Questions</p>
           </div>
           <hr />
            <div className={styles.questForm}>
                <div className={styles.leftDiv}>
                    <div className={styles.inputDiv}>
                        <input type='text' name='Department' placeholder='Enter Department' required />
                    </div>
                    <div className={styles.inputDiv}>
                        <textarea cols='3' rows='4' placeholder='Enter Exam Question' name='question' required />
                    </div>
                    <div className={styles.inputDiv}>
                        <textarea cols='3' rows='5' placeholder='Enter Expected Answer' name='answer' required />
                    </div>
                </div>


                <div className={styles.rightDiv}>
                    <div className={styles.inputDiv}>
                        <input type='text' name='Level' placeholder='Enter Level' required />
                    </div>
                    <div className={styles.inputDiv}>
                        <input type='text' name='CourseCode' placeholder='Enter Course Code' required />
                    </div>
                    <div className={styles.inputDiv}>
                        <div className={styles.keyDiv}>
                            <input className={styles.key} type='text' name='keyword1' placeholder='Enter Keyword' required />
                            <input className={styles.key} type='text' name='keyword2' placeholder='Enter Keyword' required />
                            <input className={styles.key} type='text' name='keyword3' placeholder='Enter Keyword' />
                            <input className={styles.key} type='text' name='keyword4' placeholder='Enter Keyword' />
                        </div>
                    </div>
                    <div>
                        <button className={styles.uploadBtn}><FaPaperPlane /> Upload Question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoadQuestion;