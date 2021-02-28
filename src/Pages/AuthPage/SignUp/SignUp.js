import React, { useState } from 'react';
import style from './SignUp.module.css';
import Images from '../../../Assets/Images/Images';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Loader from 'react-loader-spinner';


const SignUp = () =>{
    // spiner loader
    const [loader, setLoader] = useState(false);
    const [student, setStudent] = useState(true);
    const userStatus = student ? 'Lecturer': 'Student'; //For alternation the login options
    const [errorMsg, setErrorMsg] = useState(''); // For handling error events
    
    // dataset
    const [fullName, setFullName] = useState('');
    const [staffID, setStaffID] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [regNo, setRegNo] = useState('');
    const [dept, setDept] = useState('');
    const [level, setLevel] = useState('');

    const staffData ={
        fullName,
        staffID,
        password
    }
    const studentData ={
        name:'',
        regNo:'',
        department:'',
        level:'',
        password:''
    }
    //password validation
    const handleSubmit =(e) =>{
        setLoader(true);
        if(password === confirmPassword){
            setErrorMsg('');
            // Handling Lecturers registration 
            if(!student){
                Axios('/register',staffData)
                .then(console.log(staffData))
                .catch(err =>console.log(err))
            }
            
            return
        }
        setErrorMsg('Password do not match.');
        setTimeout(() => {
            setLoader(false)
        }, 3000);

    }
    return(
        <div className={style.signupWrap}>
            <div className={style.headerText}>
                <img src={Images.ebsu} alt='school logo' />
                <h4>Welcome </h4>
                <p>Create an Account to get started.</p>
            </div>
            <p id={style.s_log}>{userStatus}? <span onClick={()=>{setStudent(!student);setLoader(false);setErrorMsg('')}} className={style.staff}>Signup Here.</span></p>
            <form className={style.sForm}  onSubmit={(e)=>e.preventDefault()}>
                <div className={style.inputDiv}>
                    <input type='text' placeholder='Full Name' required name='FullName' 
                        onChange={(e)=>setFullName(e.target.value)}
                    />
                    <input type='text' placeholder={student? 'Reg No.' : 'Staff ID'} required name={student? 'RegNo' : 'StaffID'} 
                        onChange={student ? (e)=>setRegNo(e.target.value) : (e) =>setStaffID(e.target.value)}
                    />
                </div>
                <div className={student? style.inputDiv : style.hide}>
                    <input type='text' placeholder='Department' name='Department'/>
                    <input type='text' placeholder='Level' name='Level'/>
                </div>
                <div className={style.inputDiv}>
                    <input type='password' placeholder='Password' required name='Password'
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <input type='password' placeholder='Confirm Password' required name='confirmPassword'
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                </div>
                <p id={style.error}>{errorMsg}</p>
                <div>
                    {!loader ? <button id={style.sendBtn} onClick={()=>handleSubmit()}>Create Account</button> :
                   
                    <Loader  style={{margin:'2px auto'}}
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                    }
                </div>
                <p>Already have an Account?<Link className={style.login} to='/login'>Login Here.</Link></p>
            </form>

        </div>
    )
}
export default SignUp;