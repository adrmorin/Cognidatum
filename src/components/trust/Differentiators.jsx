import React from 'react';

const Differentiators = () => {
    return (
        <section>
            <div className="container">
                <div className="diff-grid">
                    <div>
                        <span className="diff-title">Nuestro Enfoque</span>
                        <h2 style={{ color: 'white', textAlign: 'left', marginTop: '1rem' }}>No somos una agencia de marketing genérica.</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginTop: '1.5rem' }}>Nuestro foco es la **eficiencia operativa**, no los 'likes'. Aplicamos ingeniería de procesos para que tu negocio sea más rentable, no más ruidoso.</p>
                        <ul style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '1rem' }}><span>→</span> <span>Sin promesas vacías de facturación mágica.</span></li>
                            <li style={{ display: 'flex', gap: '1rem' }}><span>→</span> <span>Sin herramientas innecesariamente caras.</span></li>
                            <li style={{ display: 'flex', gap: '1rem' }}><span>→</span> <span>Sin terminología técnica para marear.</span></li>
                        </ul>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '3rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h4 style={{ color: 'white', marginBottom: '2rem' }}>¿Por qué este método?</h4>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6 }}>He visto a decenas de empresas comprar software de IA sofisticado que termina sin usarse porque no entienden su propia fricción operativa. La auditoría resuelve ese 90% de error previo a la compra de tecnología.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentiators;
