import React from 'react';
import styles from './Lecturer.module.css';
import Images from '../../../Assets/Images/Images';
import Header from '../Header';
import {FaSuitcase, FaUser, FaMenuBar } from 'react-icons/fa'
import Home from './Home';
import LoadQuestion from './LoadQuestion';
import ViewResult from './ViewResult';
import { useState } from 'react';


const Lecturer = () =>{

    const [nav, setNav] =useState('');
    const handleNav = (nav) =>{
        setNav(nav);
    }
    return(
        <div>
            <Header username='Sunny Frank' />
            <div className={styles.mainWrap}>
                <div className={styles.sideNav}>
                    <FaSuitcase />
                    <hr />
                    <div className={styles.btnWrap}>
                        <button className={styles.sideNavBtn} onClick={()=>handleNav('')}>Profile</button>
                        <button className={styles.sideNavBtn} onClick={()=>handleNav('load question')}>Upload Questions</button>
                        <button className={styles.sideNavBtn} onClick={()=>handleNav('result')}>View Results</button>
                    </div>
                    <hr />
                    <button id={styles.sideNavLogout} className={styles.sideNavBtn}>Logout</button>
                </div>
                <div className={styles.paperWrap}> 
                    {nav === ''? <Home /> :
                        nav === 'load question'?<LoadQuestion /> :
                        nav === 'result'? <ViewResult />: null
                    }
                </div>
            </div>
            <div className={styles.footer}>
                <p>&copy; copyright EBSU. All Rights Reserved</p>
            </div>
        </div>
    )
}
export default Lecturer;