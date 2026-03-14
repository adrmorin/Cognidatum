import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const PricingPlans = () => {
    return (
        <section id="precios">
            <div className="container">
                <div className="section-header">
                    <h2>Inversión Transparente</h2>
                    <p>Elige el nivel de profundidad que tu estructura necesita hoy.</p>
                </div>
                <div className="grid grid-3" style={{ alignItems: 'stretch' }}>
                    <Card className="pricing-card">
                        <h3>Diagnóstico Core</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, margin: '1rem 0' }}>490€</div>
                        <p className="mb-4">Ideal para autónomos que necesitan ordenar su día a día.</p>
                        <ul style={{ marginBottom: '25px', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li>✓ Análisis de 1 proceso crítico</li>
                            <li>✓ Mapa de Fricción</li>
                            <li>✓ Recomendación de Stack</li>
                        </ul>
                        <div style={{ marginTop: 'auto' }}>
                            <a href="#contacto"><Button variant="secondary" style={{ width: '100%' }}>Empezar</Button></a>
                        </div>
                    </Card>
                    <Card className="pricing-card featured">
                        <div className="featured-label">MÁS SOLICITADO</div>
                        <h3>Auditoría Full</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, margin: '1rem 0' }}>950€</div>
                        <p className="mb-4">Para micropymes y negocios de servicios consolidados.</p>
                        <ul style={{ marginBottom: '25px', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li>✓ Auditoría 360º de operativa</li>
                            <li>✓ Roadmap de Automatización completo</li>
                            <li>✓ Análisis de CRM y canales entrada</li>
                            <li>✓ Sesión de resolución 60 min</li>
                        </ul>
                        <div style={{ marginTop: 'auto' }}>
                            <a href="#contacto"><Button variant="primary" style={{ width: '100%' }}>Solicitar Ahora</Button></a>
                        </div>
                    </Card>
                    <Card className="pricing-card">
                        <h3>Business Plus</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, margin: '1rem 0' }}>1.800€</div>
                        <p className="mb-4">Para despachos o clínicas con equipo y procesos complejos.</p>
                        <ul style={{ marginBottom: '25px', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li>✓ Todo lo de Auditoría Full</li>
                            <li>✓ Entrevistas con responsables</li>
                            <li>✓ Prototipo de flujo automatizado</li>
                            <li>✓ Soporte post-entrega (15 días)</li>
                        </ul>
                        <div style={{ marginTop: 'auto' }}>
                            <a href="#contacto"><Button variant="secondary" style={{ width: '100%' }}>Ver detalles</Button></a>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;
