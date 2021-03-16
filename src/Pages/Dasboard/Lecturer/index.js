import React from 'react';
import styles from './Lecturer.module.css';
import Header from '../Header';
import {BsCollectionFill,BsPencilSquare, BsFillHouseFill, BsPersonPlusFill, BsPersonBoundingBox, BsPerson, BsPersonDashFill, BsFillPersonFill, BsUpload, BsCloudUpload} from 'react-icons/bs';
import {AiOutlineFilePdf, AiOutlineLogout } from 'react-icons/ai';
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
            <Header handleNav={handleNav} username='Sunny Frank' />
            <div className={styles.mainWrap}>
                <div className={styles.sideNav}>
                   
                    <hr />
                    <button className={styles.menuBtn} onClick={()=>handleNav('')}>
                        <BsFillHouseFill className={styles.menu} />
                    </button>
                    <div className={styles.btnWrap}>
                        <button className={styles.sideNavBtn} onClick={()=>handleNav('')}>
                            <BsFillPersonFill className={styles.icons} />
                            <p className={styles.tooltip}>Profile</p>
                        </button>
                        <button className={styles.sideNavBtn} onClick={()=>handleNav('load question')}>
                            <BsCloudUpload className={styles.icons} />
                            <p className={styles.tooltip}>Upload Questions</p>
                        </button>
                        <button className={styles.sideNavBtn} onClick={()=>handleNav('result')}>
                            <AiOutlineFilePdf className={styles.icons} />
                            <p className={styles.tooltip}>View Results</p>
                        </button>
                    </div>
                    <hr />
                    <button id={styles.sideNavLogout} className={styles.sideNavBtn}>
                        <AiOutlineLogout className={styles.icons} />
                        <p className={styles.tooltip}>Logout</p>
                        </button>
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