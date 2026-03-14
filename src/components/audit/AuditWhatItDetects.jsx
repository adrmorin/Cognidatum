import React from 'react';
import Card from '../ui/Card';

import * as Icons from '../ui/Icons';

const AuditWhatItDetects = () => {
    return (
        <section>
            <div className="container">
                <div className="section-header">
                    <h2>Capacidad de diagnóstico</h2>
                    <p>En solo 72 horas levantamos el capó de tu negocio para mostrarte qué está fallando.</p>
                </div>
                <div className="grid grid-3">
                    <Card>
                        <div style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>
                            <Icons.AlertIcon size={32} />
                        </div>
                        <h3 style={{ marginBottom: '1rem' }}>Fugas de Ingresos</h3>
                        <p>Leads que no se contactan, presupuestos no seguidos y clientes que se "enfrían" por falta de respuesta.</p>
                    </Card>
                    <Card>
                        <div style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>
                            <Icons.ListIcon size={32} />
                        </div>
                        <h3 style={{ marginBottom: '1rem' }}>Burocracia Manual</h3>
                        <p>Documentación repetitiva, carga de datos manual en CRMs o excels y envío de información estándar.</p>
                    </Card>
                    <Card>
                        <div style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>
                            <Icons.SyncIcon size={32} />
                        </div>
                        <h3 style={{ marginBottom: '1rem' }}>Caos de Captación</h3>
                        <p>Canales de entrada (WhatsApp, RRSS, Web) que no están conectados y generan duplicidad de trabajo.</p>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default AuditWhatItDetects;
