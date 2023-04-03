import React from 'react';

interface Props {
    children?: React.ReactNode;
}

const Contact: React.FC<Props> = ({ children, ...props }) => {
    return (
        <>
            <h1>Este bloco representa o componente Contact</h1>
        </>
    )
}

export default Contact;