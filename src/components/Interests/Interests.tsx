import React from 'react'
import styles from './Interests.module.css'
import Image from 'next/image'
import banner from '@/assets/banner.jpg'
const Interests: React.FC = (): React.ReactElement => {
    return (
        <div className={styles.interestsContainer}>
            <h1>Mis Intereses</h1>
            <ul>
                <li className={styles.interestsButtons}>
                    <p className={styles.buttonPrimary}>1. Programación</p>
                </li>
                <li className={styles.interestsButtons2}>
                    <p className={styles.buttonSecondary}>2. Viajes</p>
                </li>
                <li className={styles.interestsButtons3}>
                    <p className={styles.buttonTertiary}>3. Peliculas</p>
                </li>
                <li className={styles.interestsButtons4}>
                    <p className={styles.buttonPrimary}>4. Arquitectura</p>
                </li>
                <li className={styles.interestsButtons5}>
                    <p className={styles.buttonSecondary}>5. Video Juegos</p>
                </li>
            </ul>
            <Image src={banner} alt="foto de perfil" width={410} height={410} className={styles.interestsImg}/>
        </div>
    )
}
export default Interests