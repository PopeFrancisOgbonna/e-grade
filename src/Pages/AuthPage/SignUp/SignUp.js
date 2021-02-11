import React, { useState } from 'react';
import style from './SignUp.module.css';
import Images from '../../../Assets/Images/Images';
import { Link } from 'react-router-dom';


const SignUp = () =>{

    const [student, setStudent] = useState(true);
    const userStatus = student ? 'Lecturer': 'Student';
    return(
        <div className={style.signupWrap}>
            <div className={style.headerText}>
                <img src={Images.ebsu} alt='school logo' />
                <h4>Welcome </h4>
                <p>Create an Account to get started.</p>
            </div>
            <p id={style.s_log}>{userStatus}? <span onClick={()=>setStudent(!student)} className={style.staff}>Signup Here.</span></p>
            <form className={style.sForm}>
                <div className={style.inputDiv}>
                    <input type='text' placeholder='Full Name' required name='FullName' />
                    <input type='text' placeholder={student? 'Reg No.' : 'Staff ID'} required name={student? 'RegNo' : 'StaffID'} />
                </div>
                <div className={student? style.inputDiv : style.hide}>
                    <input type='text' placeholder='Department' name='Department'/>
                    <input type='text' placeholder='Level' name='Level'/>
                </div>
                <div className={style.inputDiv}>
                    <input type='password' placeholder='Password' required name='Password'/>
                    <input type='password' placeholder='Confirm Password' required name='confirmPassword'/>
                </div>
                <div>
                    <button id={style.sendBtn}>Create Account</button>
                </div>
                <p>Already have an Account?<Link className={style.login} to='/login'>Login Here.</Link></p>
            </form>

        </div>
    )
}
export default SignUp;