"use client"
import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import ValidateForms from '../../middleware/ValidateForms'
import ErrorMessage from './ErrorMessage';
import { FormErrors, FormData } from './ContactForm.type';
import Swal from 'sweetalert2'
const initialState: FormData = {
    name: "",
    lastname: "",
    affair: "",
    description: "",
    email: "",
};

const ContactForm: React.FC = (): React.ReactElement => {
    const [errors, setErrors] = useState<FormErrors>({});
    const [formsData, setFormsData] = useState<FormData>(initialState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormsData({
            ...formsData,
            [name]: value,
        });
        setErrors(ValidateForms({
            ...formsData,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const validationErrors = ValidateForms(formsData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) { 
            setTimeout(() => {
                Swal.fire({
                    title: "Enviado",
                    text: "Se a enviado el mensaje!",
                    icon: "success"
                  });
            },1500)
         }
    };

    return (
        <div className={styles.contactFormContainer}>
            <h1>Contacto</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className={styles.formTwoColumns}>
                    <div className={styles.formInputSmall}>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" id="name" value={formsData.name} onChange={handleChange} />
                        <div className={styles.errorMessageContainer}>
                            <ErrorMessage name="name" errors={errors} />
                        </div>
                    </div>
                    <div className={styles.formInputSmall2}>
                        <label htmlFor="lastname">Apellido</label>
                        <input type="text" name="lastname" id="lastname" value={formsData.lastname} onChange={handleChange} />
                        <div className={styles.errorMessageContainer}>
                            <ErrorMessage name="lastname" errors={errors} />
                        </div>
                    </div>
                </div>
                <div className={styles.formInput}>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="text" name="email" id="email" value={formsData.email} onChange={handleChange} />
                    <div className={styles.errorMessageContainer}>
                        <ErrorMessage name="email" errors={errors} />
                    </div>
                </div>
                <div className={styles.formInput}>
                    <label htmlFor="affair">Asunto</label>
                    <input type="text" name="affair" id="affair" value={formsData.affair} onChange={handleChange} />
                    <div className={styles.errorMessageContainer}>
                        <ErrorMessage name="affair" errors={errors} />
                    </div>
                </div>
                <div className={styles.formInput}>
                    <label htmlFor="description">Mensaje</label>
                    <textarea name="description" id="description" value={formsData.description} onChange={handleChange} />
                    <div className={styles.errorMessageContainer}>
                        <ErrorMessage name="description" errors={errors} />
                    </div>
                </div>
                <button type="submit" disabled={Object.keys(errors).length > 0}>Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;