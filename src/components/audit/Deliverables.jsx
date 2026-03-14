import React from 'react';
import Card from '../ui/Card';

import * as Icons from '../ui/Icons';

const Deliverables = () => {
    return (
        <section id="entregables" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="section-header">
                    <h2>Entregables</h2>
                    <p>Tras la auditoría, no recibes "ideas", recibes un plan de ingeniería operativa listo para ejecutar.</p>
                </div>
                <div className="grid grid-3">
                    <Card style={{ borderTop: '4px solid var(--accent)', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ color: 'var(--accent)', marginBottom: '1.5rem', display: 'block' }}>
                            <Icons.MapIcon size={32} />
                        </div>
                        <h3 style={{ marginBottom: '1rem' }}>Mapa Crítico de Fricción</h3>
                        <p>Visualización técnica de tus procesos actuales señalando los cuellos de botella exactos.</p>
                    </Card>
                    <Card style={{ borderTop: '4px solid var(--accent)', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ color: 'var(--accent)', marginBottom: '1.5rem', display: 'block' }}>
                            <Icons.RoadmapIcon size={32} />
                        </div>
                        <h3 style={{ marginBottom: '1rem' }}>Roadmap de Automatización</h3>
                        <p>Documento estratégico indicando qué automatizar primero para obtener el máximo retorno.</p>
                    </Card>
                    <Card style={{ borderTop: '4px solid var(--accent)', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ color: 'var(--accent)', marginBottom: '1.5rem', display: 'block' }}>
                            <Icons.LayersIcon size={32} />
                        </div>
                        <h3 style={{ marginBottom: '1rem' }}>Stack Técnico Minimalista</h3>
                        <p>Selección de herramientas (con IA aplicada) que resuelven tu caso sin añadir complejidad.</p>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Deliverables;
