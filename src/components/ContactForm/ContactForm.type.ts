export interface FormData {
    name: string;
    lastname: string;
    affair: string;
    description: string;
    email: string;
}

export interface FormErrors {
    [key: string]: string | undefined;
}