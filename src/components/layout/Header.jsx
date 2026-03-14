import React from 'react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

const Header = () => {
    return (
        <header className="container" style={{ padding: '2rem', position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Logo height={32} />
            <nav style={{ display: 'flex', gap: '2.5rem', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <a href="#proceso">Proceso</a>
                <a href="#entregables">Entregables</a>
                <a href="#precios">Precios</a>
            </nav>
            <a href="#contacto">
                <Button variant="primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', borderRadius: '4px' }}>
                    Solicitar Auditoría
                </Button>
            </a>
        </header>
    );
};

export default Header;
