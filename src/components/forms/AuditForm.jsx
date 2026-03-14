import React from 'react';
import Button from '../ui/Button';
import { audiences } from '../../data/audiences';

const AuditForm = () => {
    return (
        <section id="contacto" style={{ background: 'var(--text-primary)', color: 'white', paddingBottom: 0 }}>
            <div className="container" style={{ borderRadius: '40px 40px 0 0', background: 'var(--surface)', color: 'var(--text-primary)', padding: '5rem' }}>
                <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                    <div>
                        <h2 style={{ textAlign: 'left', color: 'var(--text-primary)', fontSize: '3rem' }}>Ordena tu negocio esta misma semana.</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginTop: '1.5rem' }}>Solicita tu auditoría y eliminaremos la fricción que frena tu crecimiento actual.</p>
                        <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
                            <div>
                                <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>72h</div>
                                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Tiempo de análisis</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>100%</div>
                                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Estratégico</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontWeight: 700, fontSize: '0.85rem' }}>Nombre y Empresa</label>
                                <input type="text" placeholder="Ej. Carlos - Agencia Inmo" style={{ padding: '1rem', border: '1px solid var(--border-subtle)', borderRadius: '8px', fontFamily: 'var(--font-main)' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontWeight: 700, fontSize: '0.85rem' }}>Email Profesional</label>
                                <input type="email" placeholder="carlos@empresa.com" style={{ padding: '1rem', border: '1px solid var(--border-subtle)', borderRadius: '8px', fontFamily: 'var(--font-main)' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontWeight: 700, fontSize: '0.85rem' }}>Perfil de negocio</label>
                                <select style={{ padding: '1rem', border: '1px solid var(--border-subtle)', borderRadius: '8px', fontFamily: 'var(--font-main)', background: 'white' }}>
                                    {audiences.map(audience => (
                                        <option key={audience.id} value={audience.id}>{audience.tag}</option>
                                    ))}
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                            <Button type="submit" variant="primary" style={{ padding: '1.25rem', fontSize: '1.1rem', boxShadow: '0 20px 30px -10px rgba(37, 99, 235, 0.2)' }}>
                                Enviar Solicitud de Auditoría
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuditForm;
