class Member {
    constructor(name, src, position, description, cv, email, phone, linkedin){
        this.name = name;
        this.src = src;
        this.position = position;
        this.description = description;
        this.cv = cv;
        this.email = email;
        this.phone = phone;
        this.linkedin = linkedin;
    }
}

class MemberCV {
    constructor(title, description){
        this.title = title;
        this.description = description;
    }
}

const cv_es = [
    new MemberCV('TITULO/CARGO (PERÍODO DE TIEMPO)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
    new MemberCV('TITULO/CARGO (PERÍODO DE TIEMPO)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
    new MemberCV('TITULO/CARGO (PERÍODO DE TIEMPO)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
    new MemberCV('TITULO/CARGO (PERÍODO DE TIEMPO)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
]

const cv_es_sequeira = [
    new MemberCV('ESTUDIO AMORÍN (2021-2024)', 'Abogado - Socio'),
    new MemberCV('ESTUDIO POSADAS, POSADAS & VECINO (2004-2021)', 'Abogado - Socio (desde 2011). Especialista en Derecho Corporativo, Financiero y Mercado de Capitales, con especial énfasis en el área de Real Estate. Ha representado a diversos clientes multinacionales especialmente en la estructuración de fideicomisos, emisión de obligaciones negociables, estructuración de condo hoteles, inversiones en Viviendas de Interés Social y reestructuración de pasivos, entre otros asuntos. Además, cuenta con amplia experiencia en aspectos regulatorios de entidades financieras y en la gestión de licencias ante el Banco Central del Uruguay. '),
    new MemberCV('NUEVO BANCO COMERCIAL S.A. (2003-2004)', 'Gerente de Casa Central desempeñando funciones de Asesor Letrado del Banco, Gerente del Departamento Juridico Notarial, Asesor del Directorio e Integrante del Comité Gerencial de Nuevo Banco Comercial.'),
    new MemberCV('BANCO COMERCIAL S.A. (1993-2002)', 'Fue integrante del equipo de trabajo que participó en la creación del Nuevo Banco Comercial. Ha trabajado como: GERENTE DE CASA CENTRAL: Responsable de la Asesoría Letrada del Banco reportando al Directorio de la Institución; GERENTE DEL DEPARTAMENTO DE RECUPERACION DE ACTIVOS: Fue responsable de la recuperación de la cartera vencida del Banco reportando al Controller de la Institución; ABOGADO: Realizaba la coordinación de los Abogados externos del Banco encargados de la recuperación de activos, reportando directamente al  Gerente del Departamento; PROCURADOR: era responsable de la procuración en los juicios entablados contra el Banco, reportando directamente al Asesor Letrado del Banco; JEFE: con funciones de responsable de las garantías hipotecarias en Préstamos Inmobiliarios reportando al Escribano Jefe del Banco; SUBJEFE: además de las funciones señaladas en el numeral anterior, era responsable en la concesión de créditos reportando al Gerente del Departamento; AUXILIAR: tenia funciones de responsable de las garantías en Préstamos Amortizables por compra de vehículos reportando directamente al Gerente del Departamento.'),
    new MemberCV('ESTUDIO JURIDICO CARLOS M. FREIRA SERRAT (1984-1992)', 'Ha trabajado realizando tareas de Ayudante, Procurador, Abogado.'),
]

const cv_en = [
    new MemberCV('TITLE/CHARGE (TIME PERIOD)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
    new MemberCV('TITLE/CHARGE (TIME PERIOD)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
    new MemberCV('TITLE/CHARGE (TIME PERIOD)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
    new MemberCV('TITLE/CHARGE (TIME PERIOD)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.'),
]


export const members = {
    es : [
        new Member('Pablo Sequeira', '/menza-studio/assets/images/sequeira-foto.png', 'Abogado', 'Abogado – Universidad de la República. Máster en Derecho – Universidad de Montevideo. Pablo es socio del estudio y cuenta con más de veinte años de experiencia en derecho comercial, real estate, finanzas y negocios estructurados, participando en varios de los desarrollos y negocios más importantes de plaza.', cv_es_sequeira, 'example@example.com', '+1234567890', 'https://uy.linkedin.com/in/pablo-sequeira-576410307'),
        new Member('Federico Menza', '/menza-studio/assets/images/menza-foto.png', 'Abogado', 'Abogado – Universidad de Montevideo. Estudiante de Notariado – Universidad de Montevideo. Federico es un joven abogado y socio del estudio, sin perjuicio de que cuenta con varios años de experiencia en materia comercial, propiedad intelectual, societaria, regulatoria, y real estate.', cv_es, 'example@example.com', '+1234567890', 'https://uy.linkedin.com/in/federicomenza'),
    ],
    en: [
        new Member('Name Lastname', '/menza-studio/assets/images/sequeira-foto.png', 'Position/Profession', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.',cv_en, 'example@example.com', '+1234567890', 'https://uy.linkedin.com/in/pablo-sequeira-576410307'),
        new Member('Name Lastname', '/menza-studio/assets/images/menza-foto.png', 'Position/Profession', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet.',cv_en, 'example@example.com', '+1234567890', 'https://uy.linkedin.com/in/federicomenza'),
    ]
}