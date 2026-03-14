import React from 'react';

const NextPhase = () => {
    return (
        <section>
            <div className="container">
                <div className="phase-two-card">
                    <div style={{ maxWidth: '600px' }}>
                        <h2 style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Fase 2: Ejecución Acompañada</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>Si tras recibir el Roadmap no dispones del tiempo o el equipo técnico para aplicarlo, ofrecemos un servicio de implementación delegada donde nosotros mismos configuramos los sistemas diseñados para ti.</p>
                        <p style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9rem' }}>*Solo disponible para clientes que hayan pasado por la auditoría.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NextPhase;
