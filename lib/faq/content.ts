export type FaqItem = {
  question: string
  answer: string[]
}

export const generalFaqs: FaqItem[] = [
  {
    question: '¿Qué es la Ley 21.719 y a quién aplica?',
    answer: [
      'Es la nueva ley chilena de protección de datos personales. Aplica a prácticamente todas las organizaciones que tratan datos de personas —clientes, trabajadores o proveedores—, incluidas las PyMEs, independientemente de su tamaño o rubro.',
    ],
  },
  {
    question: '¿Necesito conocimientos legales para usar Codatra?',
    answer: [
      'No. Codatra está diseñado para personas sin formación jurídica. Traducimos los requisitos de la ley a un lenguaje simple y te guiamos paso a paso, con preguntas claras y plantillas listas para usar.',
    ],
  },
  {
    question: '¿Codatra es una consultora o un software?',
    answer: [
      'Codatra es una plataforma de software. No reemplazamos la asesoría legal cuando la necesites, pero te permitimos avanzar de forma autónoma, ordenada y económica en la mayor parte del proceso de cumplimiento.',
    ],
  },
  {
    question: '¿Codatra solo sirve para la Ley 21.719?',
    answer: [
      'No. Codatra es una plataforma de cumplimiento normativo y gestión de información para organizaciones chilenas. Hoy, nuestro principal módulo está orientado a la preparación para la Ley 21.719, pero la plataforma está diseñada para crecer con nuevas capacidades de procesos, evidencia y auditoría.',
    ],
  },
  {
    question: '¿Qué es el Registro de Actividades de Tratamiento (RAT)?',
    answer: [
      'El RAT es un documento que describe qué datos personales trata tu empresa, con qué finalidad, bajo qué base legal y con quién se comparten. Codatra te ayuda a construirlo con plantillas y preguntas asistidas.',
    ],
  },
  {
    question: '¿Qué son las solicitudes ARSOP?',
    answer: [
      'Son los derechos que pueden ejercer las personas sobre sus datos: Acceso, Rectificación, Supresión, Oposición y Portabilidad. Codatra te permite recibir, gestionar y responder estas solicitudes dentro de los plazos exigidos.',
    ],
  },
  {
    question: '¿Cuándo debo empezar a prepararme?',
    answer: [
      'Cuanto antes. La ley será plenamente exigible el 1 de diciembre de 2026 y la preparación toma tiempo. Empezar hoy te permite avanzar sin apuros y llegar con tu empresa lista.',
    ],
  },
]

export const conceptFaqs: FaqItem[] = [
  {
    question: '¿Qué es un DPA?',
    answer: [
      'Un DPA —Data Processing Agreement, o acuerdo de tratamiento de datos— es un contrato entre tu empresa y un proveedor que procesa datos personales por tu cuenta.',
      'Cuando contratas un software de remuneraciones, un correo corporativo o una nube para guardar archivos, ese proveedor trata datos de tu empresa y de tus trabajadores. El DPA establece qué puede hacer con esos datos, cómo los protege y qué ocurre si hay un incidente.',
      'Ejemplos habituales en PyMEs chilenas: Buk, Microsoft 365 o Google Workspace. Si usas herramientas así, conviene saber si tienes un acuerdo de tratamiento de datos vigente con cada proveedor.',
    ],
  },
  {
    question: '¿Qué es un DPO?',
    answer: [
      'El DPO —Delegado de Protección de Datos— es la persona encargada de supervisar el cumplimiento en materia de protección de datos dentro de una organización. Actúa como punto de contacto interno y, en algunos casos, con la autoridad de supervisión.',
      'En empresas grandes suele ser un rol dedicado. En una PyME, muchas veces recae en alguien del equipo de administración, RRHH o gerencia que además cumple otras funciones.',
      'La buena noticia para PyMEs: en una primera etapa de preparación, probablemente no necesites designar un DPO formal. Lo importante es comenzar a ordenar tus procesos, documentar tratamientos y saber quién responde por los datos en tu empresa.',
    ],
  },
  {
    question: '¿Qué es una EIPD o DPIA?',
    answer: [
      'La EIPD —Evaluación de Impacto en Protección de Datos—, también conocida como DPIA en inglés, es un análisis previo que evalúa los riesgos para las personas cuando un tratamiento de datos puede ser de alto impacto.',
      'No todas las PyMEs necesitan hacer una EIPD desde el primer día. Suele aplicarse cuando el tratamiento implica datos sensibles, decisiones automatizadas, monitoreo sistemático o procesos que pueden afectar significativamente a las personas.',
      'Un ejemplo sencillo: una empresa que instala cámaras con reconocimiento facial en sus instalaciones podría necesitar evaluar el impacto antes de implementarlo. Para la mayoría de las actividades cotidianas —nóminas, clientes, proveedores— lo primero es tener el RAT en orden.',
    ],
  },
  {
    question: '¿Qué se considera una brecha de datos?',
    answer: [
      'Una brecha de datos —o brecha de seguridad— ocurre cuando datos personales se ven comprometidos de forma no autorizada. Puede tratarse de una filtración, pérdida, acceso indebido o divulgación accidental.',
      'No siempre implica un ataque hacker. A veces es algo más cotidiano: enviar un correo con datos de clientes a la persona equivocada, perder un pendrive con información de trabajadores o dejar una planilla con RUTs en una impresora compartida.',
      'Lo relevante para una PyME no es solo evitar el incidente, sino tener claridad sobre qué datos manejas, quién accede a ellos y qué harías si algo sale mal. Esa preparación reduce el riesgo y facilita una respuesta ordenada.',
    ],
  },
  {
    question: '¿Qué significa base de licitud?',
    answer: [
      'La base de licitud —o base legal— es la razón válida que tiene tu organización para utilizar datos personales. Toda empresa necesita poder explicar por qué trata cada dato y no solo qué dato trata.',
      'Las bases más comunes en el día a día de una PyME son: la ejecución de un contrato (por ejemplo, datos de un cliente para entregarle un servicio), el cumplimiento de una obligación legal (como retener ciertos registros laborales), el consentimiento de la persona y el interés legítimo de la empresa, cuando corresponda.',
      'En el RAT, cada actividad de tratamiento debería indicar cuál es su base de licitud. Eso ayuda a demostrar que tu empresa no usa datos “porque sí”, sino con un fundamento claro.',
    ],
  },
  {
    question: '¿Qué es un responsable del tratamiento?',
    answer: [
      'El responsable del tratamiento es la organización que decide para qué se utilizan los datos personales y cómo se tratan. En la mayoría de los casos, esa organización es tu propia empresa.',
      'Si tú defines qué datos recopilas de clientes, cómo los guardas, cuánto tiempo los conservas y con quién los compartes, tu empresa actúa como responsable del tratamiento.',
      'Por ejemplo, una tienda online que administra nombres, direcciones y datos de pago de sus clientes es responsable de ese tratamiento. Los proveedores que le prestan servicios —hosting, correo, plataforma de pago— suelen actuar como encargados, no como responsables.',
    ],
  },
  {
    question: '¿Qué es un encargado del tratamiento?',
    answer: [
      'El encargado del tratamiento es un tercero que procesa datos personales por cuenta del responsable, siguiendo sus instrucciones. No decide para qué se usan los datos; los trata en nombre de tu empresa.',
      'En una PyME esto es muy frecuente: casi todas usan herramientas externas que almacenan o procesan datos de trabajadores y clientes.',
      'Ejemplos concretos: un software de remuneraciones que guarda datos de tus trabajadores, un proveedor cloud donde respaldas archivos, o un CRM donde registras contactos comerciales. Por eso es importante saber qué proveedores tratan tus datos y contar con acuerdos claros con ellos.',
    ],
  },
  {
    question: '¿Qué son los datos sensibles?',
    answer: [
      'Los datos sensibles —también llamados datos de categorías especiales— son información que requiere mayor protección porque puede afectar de forma más directa la privacidad o la dignidad de las personas.',
      'Incluyen, entre otros, datos sobre salud, biometría, origen racial o étnico, creencias religiosas u otra información especialmente protegida por la normativa.',
      'En una PyME, es común tratar algunos de estos datos sin darse cuenta: certificados médicos en RRHH, huellas en sistemas de control de asistencia o información sobre creencias en formularios internos. Conviene identificarlos en tu RAT y tratarlos con especial cuidado.',
    ],
  },
  {
    question: '¿Qué es la Agencia de Protección de Datos Personales?',
    answer: [
      'La Agencia de Protección de Datos Personales —APDP— es el organismo público encargado de supervisar el cumplimiento de la normativa de protección de datos en Chile.',
      'Entre sus funciones estarán orientar a las organizaciones, recibir denuncias, fiscalizar el cumplimiento y aplicar sanciones cuando corresponda. Su objetivo no es perseguir a las empresas, sino velar por que los datos personales se traten con respeto y responsabilidad.',
      'Para una PyME, lo más sensato es ver a la APDP como una referencia de buenas prácticas: ordenar tus procesos, documentar tratamientos y responder adecuadamente a las personas. Eso reduce riesgos y demuestra madurez organizacional.',
    ],
  },
]

export function faqsToJsonLd(items: FaqItem[]) {
  return items.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer.join(' '),
    },
  }))
}
