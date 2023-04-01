import React from 'react';

interface Props {
    children?: React.ReactNode;
}

const Services: React.FC<Props> = ({ children, ...props }) => {
    return (
        <>
            <h1>Este bloco representa o componente <b style={{color:"#f00"}} >Services</b></h1>
        </>
    )
}

export default Services;