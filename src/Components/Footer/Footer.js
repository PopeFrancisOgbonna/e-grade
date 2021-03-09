import React from 'react';
import styles from './Footer.module.css';
import Images from '../../Assets/Images/Images';


const Footer = ()=>{

    return(
        <div className={styles.wrap}>
            <div >
                <img className={styles.logo} src={Images.ebsu} alt='school logo' />
                <div>
                    <h4>Get Lattest EBSU News!</h4>
                    <form>
                        <div className={styles.inputDiv}>
                            <input type='text' placeholder='Enter your Email Address' required 
                                className={styles.email}
                            />
                            <button type='submit' className={styles.sub}>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <p> &copy; 2021 EBSU. All Rights Reserved.</p>
        </div>
    )
}
export default Footer;