import React from 'react'
import styles from './AboutMe.module.css'
import Image from 'next/image'
import perfil from '@/assets/perfil.png'
const AboutMe: React.FC = (): React.ReactElement => {
    return (
        <div className={styles.aboutMeContainer}>
            <Image src={perfil} alt="foto de perfil" width={220} height={220} className={styles.aboutMeImg}/>
            <h1>Julian Magallanes</h1>
            <p>¡Hola! Soy Julian, un entusiasta Fullstack Developer. Me especializo tanto en el frontend, utilizando tecnologías como React.js, Next y Astro, como en el backend con Node.js con Express.js utilizando base de datos con Mongo DB y Postgress SQL . Mi enfoque es crear soluciones tecnológicas efectivas y centradas en el usuario. Me interesa el contacto entre equipos y el cliente, tengo experciencia en esto por mi background de arquitecto en donde realice de manera integral mas de 20 obras completas, muchas de estas en simultaneo.</p>
        </div>
    )
}
export default AboutMe