import React from 'react';
import styles from './Header.module.css';
import cx from 'classname';
import Images from '../../Assets/Images/Images'
import {FaFacebook, FaTwitter, FaInstagramSquare, FaUserAlt, FaHome} from 'react-icons/fa';
import { Nav, Navbar } from 'react-bootstrap';

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
            <Navbar collapseOnSelect expand="lg" className={styles.bg} variant="dark">
                <Navbar.Brand href="#">
                    <img src={Images.eLogo} alt='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link to="/dashboard/user" >
                            <FaHome id={styles.a_link} onClick={()=>props.handleNav('')}/>
                        </Nav.Link>
                        <Nav.Link  className={styles.a_link}>{props.username}</Nav.Link>
                        <Nav.Link className={styles.a_link}>
                            <FaUserAlt />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Header;