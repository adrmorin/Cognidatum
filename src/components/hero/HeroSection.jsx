import React from 'react';
import Button from '../ui/Button';
import { audiences } from '../../data/audiences';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="text-gradient">Detecta en 72 horas dónde tu negocio pierde tiempo entre mensajes, seguimiento y tareas repetitivas.</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginTop: '2rem', maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5 }}>
                    Auditoría Express de Fricción Operativa para autónomos, micropyme, despachos, clínicas e inmobiliarias. Analizamos tu operación diaria y entregamos un plan claro para reducir fricción y aplicar automatización práctica.
                </p>
                <div className="hero-actions">
                    <a href="#contacto"><Button variant="primary">Solicitar auditoría</Button></a>
                    <a href="#proceso"><Button variant="secondary">Ver cómo funciona</Button></a>
                </div>

                <div className="audience-ident">
                    {audiences.map(audience => (
                        <span key={audience.id} className="audience-tag">{audience.label}</span>
                    ))}
                </div>
            </div>

            <div className="hero-visual">
                <div className="video-overlay"></div>
                <div className="status-badge">
                    <span className="pulse-dot"></span>
                    SISTEMA ACTIVO: DETECTANDO FRICCIÓN OPERATIVA
                </div>

                {/* BRANDING OVERLAY */}
                <div className="hero-logo-overlay">
                    <div className="metallic-logo-wrapper">
                        <img src={`${import.meta.env.BASE_URL}logo-original.png`} className="logo-base" alt="Cognidatum Metallic Logo" />
                        <div className="logo-shine-layer" style={{ '--logo-url': `url(${import.meta.env.BASE_URL}logo-original.png)` }}></div>
                    </div>
                </div>

                <img src={`${import.meta.env.BASE_URL}consultant-hero.png`} alt="Consultor profesional analizando procesos operativos" />
            </div>
        </section>
    );
};

export default HeroSection;
