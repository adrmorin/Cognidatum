import React from 'react';

const Logo = ({ className = '', height = 40, ...props }) => {
    return (
        <div
            className={`logo-container ${className}`}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                ...props.style
            }}
            {...props}
        >
            <img
                src={`${import.meta.env.BASE_URL}logo-original.png`}
                alt="Cognidatum Logo"
                style={{
                    height: `${height}px`,
                    width: 'auto',
                    display: 'block'
                }}
            />
        </div>
    );
};

export default Logo;
