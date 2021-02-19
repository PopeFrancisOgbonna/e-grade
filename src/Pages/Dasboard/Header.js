import React from 'react';
import styles from './Header.module.css';
import cx from 'classname';
import Images from '../../Assets/Images/Images'
import {FaFacebook, FaTwitter, FaInstagramSquare, FaUserAlt, FaHome} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = (props) =>{

    return(
        <div>
            <div className={styles.imageDiv}>
                <img className={cx(styles.ebsu)} src={Images.ebsu} alt='EBSU ' />
                <span className={cx(styles.icon_container)}>
                    <FaFacebook className={cx(styles.icons)} />
                    <FaTwitter className={cx(styles.icons)} />
                    <FaInstagramSquare className={cx(styles.icons)} />
                </span>
            </div>
            <div className={cx(styles.headWrap)}>
                <img className={cx(styles.logo)} src={Images.eLogo} alt='logo' />
                <div className={styles.adminNav}>
                    <FaHome onClick={()=>props.handleNav('')} className={cx(styles.icon, styles.iconLink)}/> 
                    <p>{props.username}</p>
                    <FaUserAlt className={styles.icon}/>
                </div>
            </div>
        </div>
    )
}
export default Header;