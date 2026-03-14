import React from 'react';

import * as Icons from '../ui/Icons';

const NotIncluded = () => {
    return (
        <section style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontFamily: 'var(--font-heading)' }}>Qué no incluye la auditoría</h3>
                <div className="negative-list">
                    <div className="negative-item">
                        <Icons.AlertIcon size={18} color="#ef4444" />
                        <span>Implementación técnica del software.</span>
                    </div>
                    <div className="negative-item">
                        <Icons.AlertIcon size={18} color="#ef4444" />
                        <span>Gestión de campañas publicitarias.</span>
                    </div>
                    <div className="negative-item">
                        <Icons.AlertIcon size={18} color="#ef4444" />
                        <span>Redacción de contenidos para RRSS.</span>
                    </div>
                    <div className="negative-item">
                        <Icons.AlertIcon size={18} color="#ef4444" />
                        <span>Diseño gráfico o branding.</span>
                    </div>
                </div>
                <p style={{ textAlign: 'center', margin: '2rem 0 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>La auditoría es un servicio de diagnóstico y estrategia operativa, no una agencia de implementación masiva.</p>
            </div>
        </section>
    );
};

export default NotIncluded;
