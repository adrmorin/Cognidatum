export const audiences = [
    { id: 'autonomos', label: 'Autónomos', tag: 'Autónomo / Independiente' },
    { id: 'micropyme', label: 'Micropyme', tag: 'Micropyme (< 10 empleados)' },
    { id: 'despachos', label: 'Despachos', tag: 'Despacho / Asesoría' },
    { id: 'clinicas', label: 'Clínicas', tag: 'Clínica / Centro médico' },
    { id: 'inmobiliarias', label: 'Inmobiliarias', tag: 'Inmobiliaria' }
];

export const nicheContent = {
    autonomos: {
        title: "Enfoque para Autónomos",
        description: "Recupera tu tiempo. Deja de ser el cuello de botella de tu propio negocio gestionando cada mensaje y documento a mano.",
        points: [
            { icon: "ZapIcon", title: "Captación Automática", desc: "Filtramos y agendamos leads sin que tengas que tocar el teléfono." },
            { icon: "ListIcon", title: "Auto-gestión de Tareas", desc: "Sistemas que te recuerdan qué hacer y cuándo." },
            { icon: "CreditCardIcon", title: "Facturación Express", desc: "Reducción del tiempo dedicado a cobros y gastos." }
        ],
        diagnosis: "Un autónomo medio dedica el 35% de su jornada a tareas que no facturan."
    },
    micropyme: {
        title: "Optimización para Micropymes",
        description: "Coordina a tu equipo sin fricción. Elimina el '¿Cómo va lo de...?' y las cadenas de mensajes.",
        points: [
            { icon: "SyncIcon", title: "Sincronización de Equipo", desc: "Centralizamos la comunicación para visibilidad total." },
            { icon: "ChartIcon", title: "Visibilidad Operativa", desc: "Dashboards simples para saber dónde se pierde dinero." },
            { icon: "UsersIcon", title: "Delegación Técnica", desc: "Automatizamos procesos repetitivos manuales del equipo." }
        ],
        diagnosis: "Las micropymes ganan un 20% de capacidad operativa eliminando reuniones de actualización."
    },
    despachos: {
        title: "Eficiencia para Despachos y Asesorías",
        description: "Elimina la carga administrativa que impide que tus expertos se centren en el valor real.",
        points: [
            { icon: "FileIcon", title: "Gestión Documental", desc: "Automatizamos la recepción y clasificación de expedientes." },
            { icon: "ChartIcon", title: "Reporting Recurrente", desc: "Generación automática de estados de cuenta." },
            { icon: "MessageIcon", title: "Seguimiento de Consultas", desc: "Sistemas de filtrado para que ninguna duda se olvide." }
        ],
        diagnosis: "El 60% de los despachos pierde 2 horas al día en tareas de 'copiar y pegar'."
    },
    clinicas: {
        title: "Fluidez para Clínicas y Centros",
        description: "Centra a tu equipo en el paciente, dejando que el sistema gestione la logística.",
        points: [
            { icon: "CalendarIcon", title: "Fricción en Citas", desc: "Reducimos cancelaciones con recordatorios inteligentes." },
            { icon: "FileIcon", title: "Historias Clínicas", desc: "Optimización del flujo post-visita para registro instantáneo." },
            { icon: "SyncIcon", title: "Follow-up de Pacientes", desc: "Automatización de encuestas y seguimientos preventivos." }
        ],
        diagnosis: "Aumenta la retención en un 15% mejorando el seguimiento post-cita."
    },
    inmobiliarias: {
        title: "Agilidad para Inmobiliarias",
        description: "Acelera el ciclo de venta gestionando leads de forma impecable sin esfuerzo.",
        points: [
            { icon: "TargetIcon", title: "Calificación de Leads", desc: "Filtros automáticos para hablar solo con interesados cualificados." },
            { icon: "HomeIcon", title: "Gestión de Propiedades", desc: "Sincronización entre portales y CRM sin errores." },
            { icon: "FileIcon", title: "Documentación de Cierre", desc: "Automatización de borradores y recopilación de documentos." }
        ],
        diagnosis: "La velocidad de respuesta inicial determina el 80% de las conversiones finales."
    }
};
