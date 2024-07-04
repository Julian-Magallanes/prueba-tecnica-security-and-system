import React from 'react'
import styles from './Header.module.css'
const Header: React.FC = (): React.ReactElement => {
    return (
        <div className={styles.headerContainer}>
            <div>
                <button>
                    Sobre Mí
                </button>
                <button>
                    Mis Intereses
                </button>
            </div>
            <button>
                Contacto
            </button>
        </div>
    )
}
export default Header