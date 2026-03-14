import React from 'react';
import Card from '../ui/Card';

const FAQSection = () => {
    return (
        <section>
            <div className="container">
                <div className="section-header">
                    <h2>Dudas Frecuentes</h2>
                </div>
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Card style={{ padding: '1.5rem' }}>
                        <h4 style={{ marginBottom: '0.5rem' }}>¿Es para mí si solo soy yo solo (autónomo)?</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Exactamente. Eres quien más sufre la falta de tiempo al tener que hacerlo todo. La auditoría te liberará de la carga operativa.</p>
                    </Card>
                    <Card style={{ padding: '1.5rem' }}>
                        <h4 style={{ marginBottom: '0.5rem' }}>¿Tengo que saber de IA o programación?</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>No. Nuestro trabajo es simplificar lo complejo. Te entregaremos un plan que entenderás a la primera.</p>
                    </Card>
                    <Card style={{ padding: '1.5rem' }}>
                        <h4 style={{ marginBottom: '0.5rem' }}>¿Garantizas resultados?</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Garantizamos un diagnóstico técnico impecable y un plan de acción concreto que reducirá drásticamente tu caos operativo.</p>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
