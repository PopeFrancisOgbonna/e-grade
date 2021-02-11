import React from 'react';
import cx from 'classname';
import styles from './Login.module.css';
import Images from '../../../Assets/Images/Images'


const Login = () =>{

    return(
        <div>
            <img src={Images.ebsu} alt='school logo' />
            <h4>Welcome Back</h4>
            <p>Login to access portal</p>
            <div>
                <form>
                    <div>
                        <div>
                            <input type='text' placeholder='Enter Reg.No / Staff ID' required />
                            <input type='password' placeholder='Enter Password' required />
                        </div>
                        <div>
                            <p><input type='checkbox' />Remember Me.</p>
                            <p>Forgot Password?</p>
                        </div>
                        <div>
                            <button>Login</button>
                            <p>Don't have an Account? <span>Register Here.</span></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;