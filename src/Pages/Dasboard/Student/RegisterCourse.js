import React from 'react';
import styles from './RegisterCourse.module.css';



const Register = () =>{

    return(
        <div>
            <div className={styles.formWrap}>
                <form >
                    <div className={styles.inputDiv}>
                        <input type='text' name='courseTitle' placeholder='Enter Course Title' required/>
                        <input type='text' name='CourseCode' placeholder='Enter Course Code' required />
                    </div>
                    <div className={styles.inputDiv}>
                        <input type='text' name='semester' placeholder='Enter Semester' required/>
                        <input type='text' name='level' placeholder='Enter Level' required />
                    </div>
                    <div className={styles.btnDiv}>
                        <button className={styles.cancel}>Cancel</button>
                        <button className={styles.reg}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register;