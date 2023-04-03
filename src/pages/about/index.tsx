import React from 'react';

interface Props {
    children?: React.ReactNode;
}

const About: React.FC<Props> = ({ children, ...props }) => {
    return (
        <>
            <h1>Este bloco representa o componente About</h1>
        </>
    )
}

export default About