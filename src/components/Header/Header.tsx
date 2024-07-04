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
    return (
        <div className={styles.headerContainer}>
            <div className={styles.spaceMobile}>
            </div>
            <div className={styles.headerButtons}>
                <button className={styles.buttonMobile}>
                    Sobre Mí
                </button>
                <button className={styles.buttonHidden}>
                    Mis Intereses
                </button>
            </div>
            <button className={styles.buttonHidden}>
                Contacto
            </button>
            <div className={styles.NavbarMenu}>
                <div className={styles.ToggleIcon} onClick={() => toggleDropdown()}>
                    <div className={`${styles.NavbarMenuIcon1} ${menuAnimation ? styles.Animation : ''}`} ></div>
                    <div className={`${styles.NavbarMenuIcon2} ${menuAnimation ? styles.Animation : ''}`} ></div>
                    <div className={`${styles.NavbarMenuIcon3} ${menuAnimation ? styles.Animation : ''}`}></div>
                </div>
                <ul className={`${styles.NavbarDropdown} ${dropdownVisible ? styles.Visible : ''}`}>
                    <li>
                        Sobre Mí
                    </li>
                    <li>
                        Mis Intereses
                    </li>
                    <li>
                        Contacto
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header