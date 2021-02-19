import React,{useState} from 'react';
import styles from './Student.module.css';
import Header from '../../Dasboard/Header';
import {FaSuitcase } from 'react-icons/fa';
import Footer from '../../../Components/Footer/Footer';
import Register from './RegisterCourse';
import Exam from './Exam';
import Result from './Result';
import UserHome from './UserHome';

const Student = () => {

    const [nav, setNav] =useState('');
    const handleNav = (nav) =>{
        setNav(nav);
    }
    return(
        <div>
             <Header handleNav={handleNav} username='Sunny Frank' />
            <div className={styles.mainWrap}>
                <div className={styles.sideNav}>
                    <FaSuitcase />
                    <hr />
                    <div className={styles.btnWrap}>
                        <button className={styles.sideNavBtn} onClick={()=>handleNav('register')}>Register Course</button>
                        <button className={styles.sideNavBtn} onClick={()=>handleNav('exam')}>Take Examination</button>
                        <button className={styles.sideNavBtn} onClick={()=>handleNav('result')}>View Results</button>
                    </div>
                    <hr />
                    <button id={styles.sideNavLogout} className={styles.sideNavBtn}>Logout</button>
                </div>
                <div className={styles.paperWrap}> 
                    {nav === 'register'? <Register /> :
                        nav === 'exam'? <Exam /> :
                        nav === 'result'? <Result />:
                        nav === ''?<UserHome />: null
                    } 
                </div>
                
            </div>
            <Footer />
        </div>
    )
}
export default Student;