import React from 'react';
import cx from 'classname';
import styles from './Login.module.css';
import Images from '../../../Assets/Images/Images'
import { Link } from 'react-router-dom';


const Login = () =>{

    return(
        <div className={styles.loginWrap}>
            <img id={styles.logos} src={Images.ebsu} alt='school logo' />
            <h4>Welcome Back</h4>
            <p>Login to access portal</p>
            <div>
                <form className={styles.logForm}>
                    <div className={styles.inputContainer}>
                        <input type='text' placeholder='Enter Reg.No / Staff ID' required />
                    </div>
                    <div className={styles.inputContainer}>
                        <input type='password' placeholder='Enter Password' required />
                    </div>
                    <div className={cx(styles.remDiv)}>
                        <p><input type='checkbox' />Remember Me.</p>
                        <p>Forgot Password?</p>
                    </div>
                    <div className={styles.authDiv}>
                        <button className={cx(styles.logBtn)}>Login</button>
                    </div>
                    <p>Don't have an Account? <Link to='/register' className={styles.reg}>Register Here.</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Login;