import Logo from '../ui/Logo';

const Footer = () => {
    return (
        <footer style={{ padding: '4rem 2rem', background: 'var(--surface)', textAlign: 'center', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Logo height={28} style={{ marginBottom: '1.5rem' }} />
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                &copy; 2026 Auditoría Express de Fricción Operativa. Diseño y Estrategia para la Era de la Eficiencia.
            </p>
        </footer>
    );
};

export default Footer;
