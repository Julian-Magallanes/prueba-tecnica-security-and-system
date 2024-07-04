import { FormErrors, FormData } from "../components/ContactForm/ContactForm.type";
export default function ValidateForms(formsData: FormData): FormErrors {
    const errors: FormErrors = {};

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!formsData.name) {
        errors.name = "Debe ingresar un nombre";
    } else if (formsData.name.length < 4) {
        errors.name = "El nombre debe contener más de 4 caracteres";
    } else if (formsData.name.length > 20) {
        errors.name = "El nombre debe contener menos de 20 caracteres";
    }

    if (!formsData.lastname) {
        errors.lastname = "Debe ingresar un apellido";
    } else if (formsData.lastname.length < 4) {
        errors.lastname = "El apellido debe contener más de 4 caracteres";
    } else if (formsData.lastname.length > 20) {
        errors.lastname = "El apellido debe contener menos de 20 caracteres";
    }

    if (!formsData.email) {
        errors.email = "Debe ingresar su email";
    } else if (!emailRegex.test(formsData.email)) {
        errors.email = "Debe ingresar un formato de email válido ejemplo@ejemplo.com";
    }

    if (!formsData.affair) {
        errors.affair = "Debe ingresar un asunto";
    }

    if (!formsData.description) {
        errors.description = "Debe ingresar una descripción";
    }

    return errors;
}