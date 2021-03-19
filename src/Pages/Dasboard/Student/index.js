import React,{useState} from 'react';
// import Particles from 'react-particles-js';
import styles from './Student.module.css';
import Header from '../../Dasboard/Header';
import Footer from '../../../Components/Footer/Footer';
import Register from './RegisterCourse';
import cx from 'classname';
import Exam from './Exam';
import Result from './Result';
import UserHome from './UserHome';
import {BsCollectionFill,BsPencilSquare, BsFillHouseFill} from 'react-icons/bs';
import {AiOutlineFilePdf, AiOutlineLogout } from 'react-icons/ai';

const Student = () => {

  const [nav, setNav] =useState('');
  const handleNav = (nav) =>{
    setNav(nav);
  }
  //logout
  const logout = () => {
   setTimeout(() => {
    window.location.href='/';
   }, 2000);
  }

  const particlesOptions = {
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }
  return(
    <div>
      <Header handleNav={handleNav} username='Sunny Frank ogbonna' />
    <div className={styles.mainWrap}>
        <div className={styles.sideNav}>
          <span className={styles.container}>
            <hr />
            <div className={styles.btnWrap}>
              <button className={cx(styles.sideNavBtn,styles.home)} onClick={()=>handleNav('')}>
                <BsFillHouseFill className={cx(styles.btnIcon)}/>
              </button>
              <button className={styles.sideNavBtn} onClick={()=>handleNav('register')}>
                <BsCollectionFill className={styles.btnIcon}/>
                <p className={styles.tooltip}>Register Course</p>
              </button>
              <button className={styles.sideNavBtn} onClick={()=>handleNav('exam')}>
                <BsPencilSquare className={styles.btnIcon}/>
                <p className={styles.tooltip}>Take Exam</p>
              </button>
              <button className={styles.sideNavBtn} onClick={()=>handleNav('result')}>
                <AiOutlineFilePdf className={styles.btnIcon}/>
                <p className={styles.tooltip}> View Results</p>
              </button>
            </div>
            <hr />
            <button id={styles.sideNavLogout} className={styles.sideNavBtn}
              onClick={() =>logout()}
            >
              <AiOutlineLogout className={styles.btnIcon}/>
              <p className={styles.tooltip}>Logout</p>
            </button>
          </span>
        </div>
        <div className={styles.paperWrap}> 
          {/* <Particles params={particlesOptions} /> */}
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