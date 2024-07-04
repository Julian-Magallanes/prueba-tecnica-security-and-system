import React from 'react'
import styles from './ContactForm.module.css'
const ContactForm: React.FC = (): React.ReactElement => {
    return (
        <div className={styles.contactFormContainer}>
            <h1>Contacto</h1>
            <form action="">
                <div className={styles.formTwoColumns}>
                    <div className={styles.formInputSmall}>
                        <label htmlFor="">Nombre</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className={styles.formInputSmall2}>
                        <label htmlFor="">Apellido</label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className={styles.formInput}>
                    <label htmlFor="">Correo Electrónico</label>
                    <input type="text" name="" id="" />
                </div>
                <div className={styles.formInput}>
                    <label htmlFor="">Asunto</label>
                    <input type="text" name="" id="" />
                </div>
                <div className={styles.formInput}>
                    <label htmlFor="">Mensaje</label>
                    <textarea name="" id="" />
                </div>
                <button type="submit" >Enviar</button>
            </form>
        </div>
    )
}
export default ContactForm