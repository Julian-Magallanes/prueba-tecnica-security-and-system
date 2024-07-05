"use client"
import React, { useState } from 'react'
import styles from './Header.module.css'
const Header: React.FC = (): React.ReactElement => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuAnimation, setMenuAnimation] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        setMenuAnimation(!menuAnimation);
    };
    const scrollDownInterests = () => {
        window.scrollBy({
          top: window.innerHeight, 
          behavior: 'smooth', 
        });
      };
    const scrollDownContact = () => {
        window.scrollBy({
          top: window.innerHeight*2, 
          behavior: 'smooth', 
        });
    }; 
    const scrollDownInterestsMobile = () => {
        window.scrollBy({
          top: window.innerHeight, 
          behavior: 'smooth', 
        });
      };
    const scrollDownContactMobile = () => {
        window.scrollBy({
          top: window.innerHeight*1.75, 
          behavior: 'smooth', 
        });
    }; 
    return (
        <div className={styles.headerContainer}>
            <div className={styles.spaceMobile}>
            </div>
            <div className={styles.headerButtons}>
                <button className={styles.buttonMobile}>
                    <p style={{borderBottom: '2px solid #FDFDFD' }}>Sobre Mí</p>
                </button>
                <button className={styles.buttonHidden} onClick={scrollDownInterests}>
                    Mis Intereses
                </button>
            </div>
            <button className={styles.buttonHidden} onClick={scrollDownContact}>
                Contacto
            </button>
            <div className={styles.NavbarMenu}>
                <div className={styles.ToggleIcon} onClick={() => toggleDropdown()}>
                    <div className={`${styles.NavbarMenuIcon1} ${menuAnimation ? styles.Animation : ''}`} ></div>
                    <div className={`${styles.NavbarMenuIcon2} ${menuAnimation ? styles.Animation : ''}`} ></div>
                    <div className={`${styles.NavbarMenuIcon3} ${menuAnimation ? styles.Animation : ''}`}></div>
                </div>
                <ul className={`${styles.NavbarDropdown} ${dropdownVisible ? styles.Visible : ''}`}>
                    <li >
                        <p style={{borderBottom: '2px solid #FDFDFD' }}>Sobre Mí</p>
                    </li>
                    <li onClick={scrollDownInterestsMobile}>
                        Mis Intereses
                    </li>
                    <li onClick={scrollDownContactMobile}>
                        Contacto
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header