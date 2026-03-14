import React, { useState } from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/hero/HeroSection';
import AudienceSelector from '../components/audience/AudienceSelector';
import AudienceContextPanel from '../components/audience/AudienceContextPanel';
import CommonProblems from '../components/problems/CommonProblems';
import AuditWhatItDetects from '../components/audit/AuditWhatItDetects';
import Deliverables from '../components/audit/Deliverables';
import ProcessTimeline from '../components/audit/ProcessTimeline';
import Benefits from '../components/trust/Benefits';
import Differentiators from '../components/trust/Differentiators';
import PricingPlans from '../components/audit/PricingPlans';
import NotIncluded from '../components/trust/NotIncluded';
import NextPhase from '../components/trust/NextPhase';
import FAQSection from '../components/faq/FAQSection';
import AuditForm from '../components/forms/AuditForm';
import Footer from '../components/layout/Footer';

const Home = () => {
    const [activeAudience, setActiveAudience] = useState('autonomos');

    return (
        <>
            <Header />
            <main>
                <HeroSection />

                <CommonProblems />

                <section id="especializacion">
                    <div className="container">
                        <div className="section-header">
                            <h2>Dolores específicos por sector</h2>
                            <p>Aunque la fricción es común, cada nicho la sufre de forma distinta. Selecciona tu perfil para ver el diagnóstico.</p>
                        </div>

                        <AudienceSelector
                            activeAudience={activeAudience}
                            onSelect={setActiveAudience}
                        />

                        <AudienceContextPanel activeAudience={activeAudience} />
                    </div>
                </section>

                <AuditWhatItDetects />
                <Deliverables />
                <ProcessTimeline />
                <Benefits />
                <Differentiators />
                <PricingPlans />
                <NotIncluded />
                <NextPhase />
                <FAQSection />
                <AuditForm />
            </main>
            <Footer />
        </>
    );
};

export default Home;
