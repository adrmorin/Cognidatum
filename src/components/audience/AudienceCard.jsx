import React from 'react';

const AudienceCard = ({ title, description, icon }) => {
    return (
        <div className="card">
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default AudienceCard;
