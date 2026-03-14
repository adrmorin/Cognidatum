import React from 'react';

const InputField = ({ label, ...props }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {label && <label style={{ fontWeight: 700, fontSize: '0.85rem' }}>{label}</label>}
            <input
                style={{ padding: '1rem', border: '1px solid var(--border-subtle)', borderRadius: '8px', fontFamily: 'var(--font-main)' }}
                {...props}
            />
        </div>
    );
};

export default InputField;
