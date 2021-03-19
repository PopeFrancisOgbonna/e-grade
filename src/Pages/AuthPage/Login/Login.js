import React, { useState } from 'react';
import cx from 'classname';
import styles from './Login.module.css';
import Images from '../../../Assets/Images/Images'
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Axios from 'axios';

const Login = () =>{
    
  const [loading, setLoading] = useState(false);
  const [password, setPassword] =useState('');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');
  const [student, setStudent] = useState(true);

  //login credentials
  const payload = {
    userName,
    password
  }

  const handleSubmit = () =>{
    setError('');
    setLoading(true);
    //validate input data
    if(password === '' || userName === ''){
      setTimeout(() => {
        setError('Please Enter Username and Password.');
        setLoading(false);
      }, 1500);
      return;
    }
    Axios.post('/login',payload)
      .then(console.log(payload))
      .catch(err =>console.log(err));
      console.log(student);
    setTimeout(() => {
      if(!student){
        localStorage.setItem("admin",true);
        window.location.href='/dashboard/user/lecturer';
        return;
      }
      localStorage.setItem("userType","user");
      window.location.href='/dashboard/user';
    }, 3000);

  }
  return(
    <div className={styles.loginWrap}>
      <img id={styles.logos} src={Images.ebsu} alt='school logo' />
      <h4>Welcome Back</h4>
      <p>Login to access portal</p>
      <div>
        <Link to='/' id={styles.link} className='display-5'>Home</Link>
        <p className={styles.loginOption}
          onClick={() => setStudent(!student)}
        >{student ? 'Not a Student?': <>Not a Lecturer?</>} <span>Login Here.</span></p>

        <form className={styles.logForm} onSubmit={(e)=>e.preventDefault()}>
          <div className={styles.inputContainer}>
            <input type='text' placeholder={student?'Enter Reg.No' :'Staff ID'} required 
              onChange={(e) =>setUserName(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <input type='password' placeholder='Enter Password' required 
              onChange={(e) =>setPassword(e.target.value)}
            />
          </div>
          <div className={cx(styles.remDiv)}>
            <p><input type='checkbox' />Remember Me.</p>
            <p>Forgot Password?</p>
          </div>
          <p className={styles.error}>{error}</p>
          <div className={styles.authDiv}>
            {!loading ? <button className={cx(styles.logBtn)} onClick={()=>handleSubmit()}>Login</button>:
              <Loader  style={{margin:'2px auto'}}
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
              />
            }
          </div>
          <p>Don't have an Account? <Link to='/register' className={styles.reg}>Register Here.</Link></p>
        </form>
      </div>
    </div>
  )
}
export default Login;