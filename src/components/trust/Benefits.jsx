import React from 'react';

import * as Icons from '../ui/Icons';

const Benefits = () => {
    return (
        <section style={{ background: 'white' }}>
            <div className="container">
                <div className="section-header">
                    <h2>Beneficios Directos</h2>
                    <p>Lo que ganas tras aplicar el diagnóstico de la auditoría.</p>
                </div>
                <div className="grid grid-2" style={{ gap: '4rem' }}>
                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <Icons.CheckIcon size={18} strokeWidth={3} />
                        </div>
                        <div>
                            <h4>Claridad Total</h4>
                            <p>Saber exactamente qué ocurre en tu negocio desde que entra un lead hasta que se factura.</p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <Icons.CheckIcon size={18} strokeWidth={3} />
                        </div>
                        <div>
                            <h4>Recuperación de Tiempo</h4>
                            <p>Eliminación de un 60-80% de las tareas administrativas redundantes.</p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <Icons.CheckIcon size={18} strokeWidth={3} />
                        </div>
                        <div>
                            <h4>Escalabilidad Real</h4>
                            <p>Tu negocio deja de depender de que tú o tu equipo estéis pegados a la pantalla.</p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <Icons.CheckIcon size={18} strokeWidth={3} />
                        </div>
                        <div>
                            <h4>Experiencia de Cliente Premium</h4>
                            <p>Tiempos de respuesta inmediatos y seguimientos impecables que suben tu valor percibido.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
