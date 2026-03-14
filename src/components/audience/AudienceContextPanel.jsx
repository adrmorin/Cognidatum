import React from 'react';
import { nicheContent } from '../../data/audiences';
import Card from '../ui/Card';

import * as Icons from '../ui/Icons';

const AudienceContextPanel = ({ activeAudience }) => {
    const data = nicheContent[activeAudience];

    if (!data) return null;

    return (
        <div id="niche-content" className="card" style={{ padding: '4rem', borderRadius: '32px', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)', transition: 'opacity 0.3s' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{data.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', fontSize: '1.1rem' }}>{data.description}</p>
                </div>
                <div className="grid grid-3">
                    {data.points.map((p, index) => {
                        const IconComponent = Icons[p.icon] || Icons.ZapIcon;
                        return (
                            <div key={index} style={{ padding: '1.5rem', border: '1px solid var(--border-subtle)', borderRadius: '12px', background: 'white' }}>
                                <div style={{ marginBottom: '1rem', color: 'var(--accent)' }}>
                                    <IconComponent size={32} />
                                </div>
                                <h4 style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{p.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{p.desc}</p>
                            </div>
                        );
                    })}
                </div>
                <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent)', borderRadius: '0 12px 12px 0', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Icons.ChartIcon size={20} color="var(--accent)" />
                    <span style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600 }}>{data.diagnosis}</span>
                </div>
            </div>
        </div>
    );
};

export default AudienceContextPanel;
