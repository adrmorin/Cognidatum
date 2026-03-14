import React from 'react';

const SelectField = ({ label, options = [], ...props }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {label && <label style={{ fontWeight: 700, fontSize: '0.85rem' }}>{label}</label>}
            <select
                style={{ padding: '1rem', border: '1px solid var(--border-subtle)', borderRadius: '8px', fontFamily: 'var(--font-main)', background: 'white' }}
                {...props}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
