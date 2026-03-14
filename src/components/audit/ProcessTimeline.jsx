import React from 'react';

const ProcessTimeline = () => {
    return (
        <section id="proceso">
            <div className="container">
                <div className="section-header">
                    <h2>Cronograma Express</h2>
                    <p>Un proceso diseñado para obtener resultados en menos de una semana laboral.</p>
                </div>
                <div className="timeline" style={{ marginTop: '4rem' }}>
                    <div className="timeline-item" data-step="Día 1">
                        <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', fontWeight: 700 }}>Toma de Datos</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Sesión estratégica de 45 min para desgranar tu operativa actual.</p>
                    </div>
                    <div className="timeline-item" data-step="Día 2">
                        <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', fontWeight: 700 }}>Análisis Silencioso</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Estudio interno de tus herramientas y flujos de información.</p>
                    </div>
                    <div className="timeline-item" data-step="Día 3">
                        <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', fontWeight: 700 }}>Diseño de Solución</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Desarrollo técnico del plan de acción y mapa de automatización.</p>
                    </div>
                    <div className="timeline-item" data-step="Final">
                        <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', fontWeight: 700 }}>Entrega y Roadmap</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Presentación de resultados y plan de ejecución inmediato.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
