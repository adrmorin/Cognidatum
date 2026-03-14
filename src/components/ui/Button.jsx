import React, { useRef, useState } from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const btnRef = useRef(null);
    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = btnRef.current.getBoundingClientRect();
        setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const baseClass = 'btn';
    const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

    return (
        <button
            ref={btnRef}
            className={`${baseClass} ${variantClass} ${className} interactive-btn`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setCoords({ x: -1, y: -1 });
            }}
            {...props}
        >
            {isHovered && (
                <span
                    className="btn-glow"
                    style={{
                        left: coords.x,
                        top: coords.y
                    }}
                />
            )}
            <span className="btn-content">{children}</span>
        </button>
    );
};

export default Button;
