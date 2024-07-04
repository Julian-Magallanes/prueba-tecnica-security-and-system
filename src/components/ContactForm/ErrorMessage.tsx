import React from 'react';

interface ErrorMessageProps {
    name: string;
    errors: { [key: string]: string | undefined };
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ name, errors }) => {
    return errors[name] ? <p>{errors[name]}</p> : null;
};

export default ErrorMessage;