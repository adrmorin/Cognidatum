import React from 'react';

const Badge = ({ children, className = '', style = {} }) => {
    return (
        <span className={`badge ${className}`} style={{ padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600, ...style }}>
            {children}
        </span>
    );
};

export default Badge;
