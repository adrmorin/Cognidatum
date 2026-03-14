import React from 'react';

const CommonProblems = () => {
    return (
        <section style={{ background: 'white', borderBottom: '1px solid var(--border-subtle)' }}>
            <div className="container grid grid-2" style={{ alignItems: 'center', gap: '6rem' }}>
                <div style={{ background: 'var(--bg-secondary)', borderRadius: '24px', padding: '4rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', top: '-1.5rem', left: '2rem', background: 'var(--text-primary)', color: 'white', padding: '0.4rem 1.2rem', borderRadius: '4px', fontWeight: 700, fontSize: '0.8rem' }}>REALIDAD ACTUAL</span>
                    <h2 style={{ textAlign: 'left', marginBottom: '2rem' }}>La fricción invisible: la causa real del estancamiento.</h2>
                    <p className="mb-4" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Muchos negocios no fallan por falta de talento, sino por la incapacidad de gestionar el flujo de información sin que el equipo se queme. La IA no es la solución mágica, es el medio para recuperar el orden.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%', marginTop: '0.6rem' }}></div>
                            <p><strong>Información fragmentada:</strong> Datos en WhatsApp, emails, Excel y recordatorios mentales.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%', marginTop: '0.6rem' }}></div>
                            <p><strong>Saturación administrativa:</strong> Profesionales cualificados dedicando horas a tareas que no aportan valor.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%', marginTop: '0.6rem' }}></div>
                            <p><strong>Falta de trazabilidad:</strong> No saber en qué estado exacto está cada gestión o cliente.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>Impacto en el negocio</h3>
                    <p style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.3 }}>"Sentimos que pasamos más tiempo reportando lo que hacemos que haciéndolo realmente."</p>
                    <div style={{ marginTop: '3rem', padding: '2rem', border: '1px solid var(--border-subtle)', borderRadius: '12px' }}>
                        <div style={{ fontWeight: 700, fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>-40%</div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Eficiencia operativa promedio debido a procesos manuales y redundantes.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommonProblems;
