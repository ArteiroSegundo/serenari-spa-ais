export interface Therapy {
  id: string;
  title: string;
  slug: string;
  image: string;
  galleryImages?: string[];
  shortDescription: string;
  fullDescription: string;
  quote?: string;
  duration: string;
  benefits: string[];
  tag?: string;
  category: "relaxamento" | "terapeutica" | "estetica" | "especial";
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  comment: string;
  rating: number;
  badge: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  aspectRatio: "aspect-[4/3]" | "aspect-[3/4]" | "aspect-[16/9]" | "aspect-square";
  colSpan?: string;
}

export const SPA_INFO = {
  name: "Serenari Spa",
  phone: "(11) 5108-1983",
  phoneRaw: "551151081983",
  whatsappUrl: "https://wa.me/551151081983?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20momento%20de%20bem-estar%20no%20Serenari%20SPA.",
  instagramUrl: "https://instagram.com/serenarispa",
  facebookUrl: "https://facebook.com/serenarispa",
  address: "R. Mal. Rondon, 192 - Jardim Santa Helena, Suzano/SP",
  streetAddress: "R. Mal. Rondon, 192",
  neighborhood: "Jardim Santa Helena",
  city: "Suzano",
  state: "SP",
  postalCode: "08674-060",
  country: "BR",
  geo: {
    latitude: -23.5387114,
    longitude: -46.3130283
  },
  hours: "Segunda a Sábado: 09:00hr - 19:00hr | Domingo: Fechado",
  email: "atendimento@serenarispa.com.br",
  cnpj: "59.668.646/0001-94",
  razaoSocial: "SERENARI SPA LTDA",
  reviewsCount: "+ de 139 avaliações 5 estrelas no Google!",
  ratingValue: 5.0,
  reviewCountNum: 139,
  logoHeader: "/logo-about-us.png",
  logoAboutUs: "/logo-about-us.png",
  logoWhite: "/logo-about-us.png",
  tagline: "Aqui nós transformamos o toque em bem-estar, e entregamos reconexão, presença e leveza através de experiências de cuidado com o corpo e com a mente."
};

// 14 Therapies with corrected image paths
export const THERAPIES: Therapy[] = [
  {
    id: "relaxante",
    title: "Massagem Relaxante",
    slug: "massagem-relaxante",
    image: "/services/massagem-relaxante/01.jpg",
    galleryImages: [
      "/services/massagem-relaxante/01.jpg",
      "/services/massagem-relaxante/02.jpg",
      "/services/massagem-relaxante/03.jpg",
      "/services/massagem-relaxante/04.jpg"
    ],
    shortDescription: "Desconecte-se da rotina com toques suaves, aliviando o estresse, a ansiedade e renovando suas energias por completo.",
    fullDescription: "A Massagem Relaxante do Serenari SPA utiliza manobras suaves, fluidadas e ritmo constante associados a óleos essenciais terapêuticos. Promove a diminuição dos níveis de cortisol, acalma o sistema nervoso, melhora a circulação sanguínea e alivia tensões musculares superficiais acumuladas pelo estresse diário.",
    quote: "Desconectar para reconectar com o que realmente importa: a sua paz interior.",
    duration: "50 min / 80 min",
    category: "relaxamento",
    benefits: [
      "Alívio profundo do estresse e ansiedade",
      "Estimula a liberação de serotonina e endorfinas",
      "Melhora a qualidade do sono",
      "Sensação prolongada de leveza e tranquilidade"
    ],
    tag: "Assinatura"
  },
  {
    id: "terapeutica",
    title: "Massagem Terapêutica",
    slug: "massagem-terapeutica",
    image: "/services/massagem-terapeutica/01.jpg",
    galleryImages: [
      "/services/massagem-terapeutica/01.jpg",
      "/services/massagem-terapeutica/02.jpg",
      "/services/massagem-terapeutica/03.jpg"
    ],
    shortDescription: "Focada em aliviar dores musculares crônicas e contraturas, restaurando sua mobilidade, conforto e bem-estar físico.",
    fullDescription: "Combinação de manobras de pressão moderada a profunda voltadas para o alívio de nós de tensão, contraturas e dores crônicas. O terapeuta atua especificamente nas áreas afetadas, restaurando o alinhamento das fibras musculares e devolvendo a amplitude de movimento.",
    quote: "Tratamento profundo focado em liberar pontos-gatilho e devolver a liberdade aos seus movimentos.",
    duration: "50 min / 80 min",
    category: "terapeutica",
    benefits: [
      "Combate dores e rigidez muscular",
      "Desfaz contraturas e pontos-gatilho",
      "Aumenta a flexibilidade e mobilidade",
      "Melhora a postura corporal"
    ],
    tag: "Foco em Dores"
  },
  {
    id: "pedras-quentes",
    title: "Massagem com Pedras Quentes",
    slug: "pedras-quentes",
    image: "/services/pedras-quentes/01.jpg",
    galleryImages: [
      "/services/pedras-quentes/01.jpg",
      "/services/pedras-quentes/02.jpg",
      "/services/pedras-quentes/03.jpg"
    ],
    shortDescription: "Sinta o calor terapêutico das pedras vulcânicas aliviando tensões profundas em um relaxamento incomparável.",
    fullDescription: "Combinação do toque manual com a aplicação de pedras vulcânicas aquecidas em pontos estratégicos do corpo. O calor penetra nas camadas musculares mais profundas, proporcionando um estado de relaxamento ímpar e acalmando a mente.",
    quote: "O calor vulcânico que derrete as tensões e envolve o corpo em um aconchego supremo.",
    duration: "60 min / 80 min",
    category: "especial",
    benefits: [
      "Vasodilatação e melhora da circulação sanguínea",
      "Relaxamento muscular profundo sem desconforto",
      "Harmonização energética dos centros vitais",
      "Induz a um sono reparador"
    ],
    tag: "Experiência Sensorial"
  },
  {
    id: "localizada",
    title: "Massagem Localizada",
    slug: "massagem-localizada",
    image: "/services/massagem-localizada/01.jpg",
    shortDescription: "Alívio direcionado para áreas específicas de tensão ou dor, como pescoço, ombros ou lombar, proporcionando conforto imediato.",
    fullDescription: "Focada exclusivamente na região de maior desconforto do cliente (como pescoço, ombros, trapézio ou região lombar). Proporciona alívio rápido e direcionado em sessões dinâmicas.",
    duration: "30 min / 45 min",
    category: "terapeutica",
    benefits: [
      "Foco direto no ponto exato da dor",
      "Alívio acelerado de tensões de trabalho/postura",
      "Recuperação funcional rápida para o dia a dia"
    ]
  },
  {
    id: "desportiva",
    title: "Massagem Desportiva",
    slug: "massagem-desportiva",
    image: "/services/massagem-desportiva/01.jpg",
    shortDescription: "Ideal para atletas, foca na prevenção de lesões e na recuperação muscular, melhorando o desempenho e a flexibilidade.",
    fullDescription: "Técnica dinâmica que utiliza fricções, percussões e alongamentos passivos para preparar os músculos antes de treinos ou acelerar a remoção de ácido lático após atividades físicas intensas.",
    duration: "50 min / 80 min",
    category: "terapeutica",
    benefits: [
      "Acelera a recuperação muscular pós-treino",
      "Previne lesões e estiramentos musculares",
      "Melhora a oxigenação dos tecidos",
      "Aumenta a flexibilidade e o desempenho físico"
    ],
    tag: "Para Atletas"
  },
  {
    id: "drenagem-corporal",
    title: "Drenagem Linfática Corporal",
    slug: "drenagem-corporal",
    image: "/services/drenagem-corporal/01.jpg",
    shortDescription: "Estimule o sistema linfático para reduzir a retenção de líquidos, promovendo uma sensação de leveza e bem-estar.",
    fullDescription: "Movimentos muito suaves e ritmados direcionados aos gânglios linfáticos. Estimula a eliminação de toxinas e o excesso de líquidos retidos no organismo, indicada também para pós-operatório e gestantes.",
    duration: "60 min",
    category: "estetica",
    benefits: [
      "Reduz edemas e retenção hídrica",
      "Estimula a eliminação de toxinas",
      "Sensação imediata de desinchamento",
      "Combate o cansaço nas pernas"
    ]
  },
  {
    id: "ventosa-terapia",
    title: "Ventosa Terapia",
    slug: "ventosa-terapia",
    image: "/services/ventosa-terapia/01.jpg",
    shortDescription: "Alivie tensões e melhore a circulação com a antiga técnica de Ventosaterapia, promovendo bem-estar e alívio muscular.",
    fullDescription: "Utilização de copos de sucção que criam um vácuo sobre a pele, estimulando a circulação sanguínea local, liberando fáscias e oxigenando os tecidos muscular e conjuntivo.",
    duration: "45 min / 60 min",
    category: "terapeutica",
    benefits: [
      "Alívio de dores nas costas e contraturas",
      "Aumento do fluxo sanguíneo local",
      "Liberação de aderências na fáscia",
      "Acelera a desintoxicação muscular"
    ]
  },
  {
    id: "reflexologia-podal",
    title: "Reflexologia Podal",
    slug: "reflexologia-podal",
    image: "/services/reflexologia-podal/01.jpg",
    shortDescription: "Estimule pontos de energia nos pés que correspondem a órgãos e sistemas do corpo, promovendo equilíbrio e relaxamento.",
    fullDescription: "Pressionamento de micropontos reflexos específicos localizados nos pés, estimulando os terminais nervosos que se conectam aos órgãos vitais e trazendo equilíbrio para todo o sistema neurovegetativo.",
    duration: "45 min",
    category: "especial",
    benefits: [
      "Alívio imediato do cansaço nos pés",
      "Harmonização de órgãos e sistemas",
      "Redução de cefaleias e ansiedade",
      "Relaxamento corporal integrado"
    ]
  },
  {
    id: "shiatsu",
    title: "Shiatsu",
    slug: "shiatsu",
    image: "/services/shiatsu/01.jpg",
    shortDescription: "Experimente a tradicional massagem japonesa que utiliza pressão dos dedos para reequilibrar a energia vital do corpo.",
    fullDescription: "Terapia de origem oriental baseada na pressão ritmada com os polegares, palmas das mãos e cotovelos ao longo dos meridianos de energia do corpo, liberando bloqueios e restaurando a vitalidade.",
    duration: "60 min",
    category: "especial",
    benefits: [
      "Reequilíbrio da energia vital (Ki)",
      "Alívio de tensões físicas e mentais",
      "Regulação do ritmo biológico",
      "Sensação de renovação completa"
    ]
  },
  {
    id: "drenagem-facial",
    title: "Drenagem Linfática Facial",
    slug: "drenagem-facial",
    image: "/services/drenagem-facial/01.jpg",
    shortDescription: "Reduza inchaços e melhore a circulação facial, promovendo uma pele mais radiante, saudável e com aspecto descansado.",
    fullDescription: "Manobras delicadas na região do rosto, pescoço e colo que ativam os linfonodos faciais, drenando edemas (inchaços abaixo dos olhos e contorno facial) e aumentando o aporte de nutrientes para as células da pele.",
    duration: "40 min",
    category: "estetica",
    benefits: [
      "Redução de bolsas abaixo dos olhos",
      "Ativação do brilho e viço facial",
      "Estímulo à microcirculação da pele",
      "Efeito descansado e revitalizado"
    ]
  },
  {
    id: "esfoliacao-corporal",
    title: "Esfoliação Corporal",
    slug: "esfoliacao-corporal",
    image: "/services/esfoliacao-corporal/esfoliacao-corporal.png",
    shortDescription: "Renove sua pele com uma esfoliação profunda, removendo células mortas e deixando-a macia, suave e luminosa.",
    fullDescription: "Tratamento de renovação celular com esfoliantes naturais seguidos de uma hidratação cremosa intensiva. Prepara a pele para melhor absorção de ativos e devolve o toque aveludado.",
    duration: "50 min",
    category: "estetica",
    benefits: [
      "Remoção de células mortas e impurezas",
      "Estimula a renovação celular natural",
      "Pele aveludada e hidratação profunda",
      "Uniformidade de textura da pele"
    ]
  },
  {
    id: "revitalizacao-facial",
    title: "Revitalização Facial",
    slug: "revitalizacao-facial",
    image: "/services/revitalizacao-facial/01.jpg",
    shortDescription: "Proporcione nutrição e hidratação intensa para sua pele, restaurando o brilho natural e a vitalidade do seu rosto.",
    fullDescription: "Procedimento nutritivo com séruns concentrados, máscaras com ativos botânicos e massagem facial modeladora que devolve o tônus, elasticidade e radiância da face.",
    duration: "50 min",
    category: "estetica",
    benefits: [
      "Hidratação profunda e nutrição celular",
      "Restauro do brilho natural da pele",
      "Aumento da elasticidade e firmeza",
      "Aparência rejuvenescida e fresca"
    ]
  },
  {
    id: "liberacao-miofascial",
    title: "Liberação Miofascial",
    slug: "liberacao-miofascial",
    image: "/services/liberacao-miofascial/01.jpg",
    shortDescription: "Terapia profunda para liberar tensões e restrições nas fáscias musculares, melhorando a flexibilidade e reduzindo dores.",
    fullDescription: "Técnica manual focada no tecido conjuntivo (fáscia) que envolve os músculos. Desfaz aderências causadas por má postura, movimentos repetitivos ou estresse estático.",
    duration: "50 min / 80 min",
    category: "terapeutica",
    benefits: [
      "Liberação de aderências fasciais profundas",
      "Aumento significativo da amplitude de movimento",
      "Alívio de dores posturais crônicas",
      "Restauração da eficiência muscular"
    ]
  },
  {
    id: "limpeza-de-pele-natural",
    title: "Limpeza de Pele Natural",
    slug: "limpeza-de-pele-natural",
    image: "/services/limpeza-de-pele-natural/limpeza-de-pele-natural.png",
    shortDescription: "Purifique e hidrate sua pele com produtos naturais, removendo impurezas e promovendo um toque fresco e saudável.",
    fullDescription: "Higiene facial profunda utilizando insumos naturais, vapor de ozônio, extração suave de comedões e aplicação de máscara calmante de argila purificante com óleos essenciais.",
    duration: "75 min",
    category: "estetica",
    benefits: [
      "Remoção de cravos e impurezas acumuladas",
      "Desobstrução e refinamento dos poros",
      "Equilíbrio da oleosidade sem ressecar",
      "Sensação de pele purificada e renovada"
    ]
  }
];

export const FEATURED_DISCOVERY_TERAPIES = [
  THERAPIES.find((t) => t.id === "relaxante")!,
  THERAPIES.find((t) => t.id === "terapeutica")!,
  THERAPIES.find((t) => t.id === "pedras-quentes")!
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, image: "/sobre-nos/01.jpg", title: "Lounge de espera acolhedor Serenari Spa", aspectRatio: "aspect-[16/9]", colSpan: "sm:col-span-2 lg:col-span-2" },
  { id: 2, image: "/sobre-nos/02.jpg", title: "Recepção com iluminação suave", aspectRatio: "aspect-[4/3]" },
  { id: 3, image: "/sobre-nos/03.jpg", title: "Estação de infusões & boas-vindas", aspectRatio: "aspect-[4/3]" },
  { id: 4, image: "/sobre-nos/04.jpg", title: "Espaço de relaxamento Serenari", aspectRatio: "aspect-[4/3]" },
  { id: 5, image: "/sobre-nos/05.jpg", title: "Sala de massagem preparada com carinho", aspectRatio: "aspect-[16/9]", colSpan: "sm:col-span-2" },
  { id: 6, image: "/sobre-nos/06.jpg", title: "Detalhe da bandeja sensorial", aspectRatio: "aspect-[4/3]" },
  { id: 7, image: "/sobre-nos/07.jpg", title: "Sala de massagem individual em Suzano", aspectRatio: "aspect-[4/3]" },
  { id: 8, image: "/sobre-nos/08.jpg", title: "Óleos essenciais puros e elementos botânicos", aspectRatio: "aspect-[4/3]" },
  { id: 9, image: "/sobre-nos/09.jpg", title: "Acolhimento com frutas frescas", aspectRatio: "aspect-[4/3]" },
  { id: 10, image: "/sobre-nos/10.jpg", title: "Ambiente reservado para massoterapia", aspectRatio: "aspect-[16/9]", colSpan: "sm:col-span-2 lg:col-span-2" },
  { id: 11, image: "/sobre-nos/11.jpg", title: "Sala dupla para momentos a dois", aspectRatio: "aspect-[4/3]" },
  { id: 12, image: "/sobre-nos/12.jpg", title: "Preparação impecável para sua sessão", aspectRatio: "aspect-[4/3]" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "thauani",
    name: "Thauani Cris",
    avatar: "/avatars/thauani-cris.png",
    comment: "Eu amei a experiência! Foi incrível, sem dúvidas voltarei mais vezes, recomendo muito. Ambiente super agradável, fui muito bem atendida.",
    rating: 5,
    badge: "Avaliação verificada no Google",
    featured: true
  },
  {
    id: "dyana",
    name: "Dyana Dyh",
    avatar: "/avatars/dyana-dyh.png",
    comment: "Tive uma experiência maravilhosa no spa! O ambiente é extremamente agradável, limpo e acolhedor, transmitindo uma sensação de tranquilidade desde a chegada. A massagem foi simplesmente excelente, muito atenciosa e profissional. Saí renovada e com certeza voltarei mais vezes. Recomendo de olhos fechados!",
    rating: 5,
    badge: "Avaliação verificada no Google"
  },
  {
    id: "gabrielle",
    name: "Gabrielle Fernandes",
    avatar: "/avatars/gabrielle-fernandes.png",
    comment: "Serenari experiência incrível, recomendo demais! O atendimento foi impecável, atencioso e com aquele cuidado que faz a gente se sentir especial. O ambiente é lindo, tranquilo e muito aconchegante. Fiz uma massagem relaxante e saí sem sentir absolutamente nada das dores. Com certeza voltarei e já indiquei para amigos e familiares.",
    rating: 5,
    badge: "Avaliação verificada no Google"
  },
  {
    id: "junior",
    name: "Junior Nascimento",
    avatar: "/avatars/junior-nascimento.png",
    comment: "Se você está em dúvida sobre ir ou não ir, quero deixar minha avaliação positivíssima para a Serenari. Atendimento impecável, muito atencioso, educado e extremamente competente. A sessão foi ao mesmo tempo relaxante e revigorante. Recomendo sem medo!",
    rating: 5,
    badge: "Avaliação verificada no Google"
  },
  {
    id: "amanda",
    name: "Amanda Fernandes",
    avatar: "/avatars/amanda-fernandes.png",
    comment: "Sem dúvidas, o lugar mais aconchegante e acolhedor que já estive em toda a minha vida! Profissionais extremamente qualificados, tratamento ímpar, ambiente aconchegante e lindo! Experiência excelente! Sucesso!",
    rating: 5,
    badge: "Avaliação verificada no Google"
  },
  {
    id: "maxwell",
    name: "Maxwell da Cruz Santos",
    avatar: "/avatars/maxwell-santos.png",
    comment: "Local aconchegante, ótimo atendimento e serviço super profissional.",
    rating: 5,
    badge: "Avaliação verificada no Google"
  },
  {
    id: "fernando",
    name: "Fernando Comitre",
    avatar: "/avatars/fernando-comitre.png",
    comment: "Ótima experiência. A massagem foi certeira nos pontos de tensão e ajudou demais a aliviar a dor nas costas. Com certeza retornarei.",
    rating: 5,
    badge: "Avaliação verificada no Google"
  }
];

export const ACROSTIC_POEM = [
  { letter: "S", text: "Santuário de paz onde o corpo encontra alívio," },
  { letter: "E", text: "Equilíbrio entre mente, espírito e energia ativa." },
  { letter: "R", text: "Renascimento em cada toque, liberação de tensões," },
  { letter: "E", text: "Essência de serenidade em cada sessão." },
  { letter: "N", text: "Nutrição da alma, espaço acolhedor e sagrado," },
  { letter: "A", text: "Acolhimento ao presente, na consciência focado." },
  { letter: "R", text: "Reconexão com o ser, presença plena e liberta," },
  { letter: "I", text: "Integração de harmonia, onde a cura é certa." }
];

export const MANIFESTO_PILLARS = [
  {
    title: "PRESENÇA & ESCUTA",
    description: "Escutamos antes de cuidar. Cada corpo traz uma história e uma necessidade única. O silêncio e a atenção plena guiam nossas mãos.",
    highlight: "Atendimento 100% humanizado"
  },
  {
    title: "CUIDADO HUMANO",
    description: "Acreditamos que autocuidado é um direito, não um luxo. Cada detalhe sensorial é desenhado para abraçar a sua individualidade.",
    highlight: "Experiência tátil & aromática"
  },
  {
    title: "QUALIDADE CONTÍNUA",
    description: "Técnicas aprimoradas continuamente com respeito às tradições milenares e à anatomia humana. Excelência em cada movimento.",
    highlight: "Terapeutas capacitados"
  },
  {
    title: "AUTENTICIDADE & LEVEZA",
    description: "Nada precisa parecer artificial. Proporcionamos uma pausa consciente para que você retorne à sua essência com leveza.",
    highlight: "Sua pausa em Suzano/SP"
  }
];
