import React, { useEffect } from 'react';
import cx from 'classname';
import styles from './Home.module.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Carousels from './Carousels'
import Images from '../../Assets/Images/Images';


const Home = () =>{
    useEffect(() =>{

    })
    return(
        <div>
            <Header />
            <Carousels />
            <div className={cx(styles.divWrap)}>
                <div className={cx(styles.cardWrap,)}>
                    <div className={styles.flex}>
                        <img className={styles.cardImg} src={Images.adminIcon} alt='staff' />
                        <h2>Digital Assessment</h2>
                    </div>
                    <p>
                        Plan, design, deliver and mark assessments seamlessly for the entire academic session. 
                    </p>
                    <button className={styles.cardBtn}>Get Started</button>
                </div>
                <div className={cx(styles.cardWrap,)}>
                    <div className={styles.flex}>
                        <img className={styles.cardImg} src={Images.studentIcon} alt='staff' />
                        <h2>Zero<br/> Missing Script</h2>
                    </div>
                    <p>
                        Break free from missing script and outstanding result stress View exam records and grade at a go.
                    </p>
                    <button className={styles.cardBtn}>View Results</button>
                </div>
                <div className={cx(styles.cardWrap,)}>
                    <div className={styles.flex}>
                        <img className={styles.cardImg} src={Images.repoIcon} alt='staff' />
                        <h2>Digital Repository</h2>
                    </div>
                    <p>
                    Get access to resource materials, past question and answers to help you prepare better for your exams. 
                    </p>
                    <button className={styles.cardBtn}>Get Started</button>
                </div>
            </div>
            <hr />
            <div className={styles.flex1}>
                <div className={styles.schoolDiv}>
                    <h3 className={styles.title}>About the University</h3>
                    <img className={styles.school} src={Images.schoolBuilding} alt='EBSU Building'/>
                </div>
                <div className={styles.info}>
                    <p>
                        what is today known as Ebonyi State University started with a resolution 
                        of the then Military Administration of Anambra State which was later upheld 
                        under Chief Jim Nwobodo civilian administration.
                        <br />
                        On July 30 1980, the then Anambra State Government established the 
                        Anambra State University of Science and Technology (ASUTECH) by law no 7 of 1980 
                        thereby establishing the first University of Science and Technology in Nigeria...
                    </p>
                    <button className={styles.more}>Read More...</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;