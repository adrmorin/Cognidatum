import React from 'react';
import { audiences } from '../../data/audiences';

const AudienceSelector = ({ activeAudience, onSelect }) => {
    return (
        <div className="niche-selector" style={{ marginBottom: '4rem' }}>
            {audiences.map((audience) => (
                <button
                    key={audience.id}
                    className={`niche-btn ${activeAudience === audience.id ? 'active' : ''}`}
                    onClick={() => onSelect(audience.id)}
                >
                    {audience.label}
                </button>
            ))}
        </div>
    );
};

export default AudienceSelector;
