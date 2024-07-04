import React from 'react'
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
const Footer: React.FC = (): React.ReactElement => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContainerIcons}>
                <a href="https://www.linkedin.com/in/juli%C3%A1n-magallanes-2b074a187/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className={styles.footerIcon} />
                </a>
                <a href="https://github.com/Julian-Magallanes" target="_blank">
                    <FontAwesomeIcon icon={faSquareGithub} className={styles.footerIcon}/>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=542613012708&text&type=phone_number&app_absent=0" target="_blank">
                    <FontAwesomeIcon icon={faSquareWhatsapp} className={styles.footerIcon}/>
                </a>
            </div>
        </div>
    )
}
export default Footer