import React from 'react';

const SectionWrapper = ({ children, id, className = '', style = {} }) => {
    return (
        <section id={id} className={className} style={style}>
            {children}
        </section>
    );
};

export default SectionWrapper;
