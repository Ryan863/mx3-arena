export interface CourtOption {
  id: string;
  name: string;
  shortName: string;
  spec: string;
  badge?: string;
}

export interface DaySchedule {
  id: string;
  label: string;
  shortLabel: string;
  hoursLabel: string;
  slots: string[];
  popularSlots: string[];
}

export interface StructureCard {
  number: string;
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface TournamentItem {
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface ReviewItem {
  author: string;
  context: string;
  rating: number;
  quote: string;
}

export const ARENA_INFO = {
  brandName: 'MX3 Arena',
  cnpj: '48.645.194/0001-09',
  city: 'Caçador - SC',
  addressShort: 'Rod. Osvaldo Olsen, 1100 • 5 min do Centro',
  addressFull: 'Rodovia Osvaldo Olsen, nº 1100 – Bairro Gioppo, Caçador – SC, CEP 89507-597',
  proximityNote: 'A cerca de 5 minutos do centro de Caçador',
  mapsQuery: 'Rodovia Osvaldo Olsen, 1100 - Gioppo, Caçador - SC, 89507-597',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Rod.+Osvaldo+Olsen,+1100+-+Gioppo,+Ca%C3%A7ador+-+SC&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Rodovia%20Osvaldo%20Olsen%2C%201100%20-%20Gioppo%2C%20Ca%C3%A7ador%20-%20SC%2C%2089507-597',
  whatsappBookingPhone: '5549989046771',
  whatsappBookingDisplay: '(49) 98904-6771',
  whatsappBookingUrl:
    'https://wa.me/5549989046771?text=Ol%C3%A1%2C+MX3+Arena%21+Vim+pelo+site+e+gostaria+de+reservar+uma+quadra+ou+saber+mais+sobre+hor%C3%A1rios.',
  whatsappEventsPhone: '554999113799',
  whatsappEventsDisplay: '(49) 99911-3799',
  whatsappEventsUrl:
    'https://wa.me/554999113799?text=Ol%C3%A1%2C+MX3+Arena%21+Gostaria+de+informa%C3%A7%C3%B5es+sobre+eventos%2C+torneios+e+ingressos.',
  whatsappClassesUrl:
    'https://wa.me/5549989046771?text=Ol%C3%A1%2C+MX3+Arena%21+Gostaria+de+saber+mais+sobre+as+aulas+de+padel+na+Escola+Villa+Padel.',
  instagramUrl: 'https://www.instagram.com/mx3arena/',
  instagramHandle: '@mx3arena',
  facebookUrl: 'https://www.facebook.com/search/top/?q=Mx3%20Arena%20Ca%C3%A7ador%20SC',
  facebookName: 'Mx3 Arena Caçador SC',
  googleRating: '4,9',
  googleReviewsCount: 40,
  operatingHours: [
    { day: 'Segunda a Sexta', hours: '09h00 às 23h30' },
    { day: 'Sábado', hours: '09h00 às 12h00 • 14h00 às 18h30' },
    { day: 'Domingo', hours: '14h00 às 18h30' },
  ],
  paymentMethods: [
    'Pix',
    'Cartão de Crédito',
    'Cartão de Débito',
    'Aproximação (NFC)',
  ],
} as const;

export const COURTS: CourtOption[] = [
  {
    id: 'quadra-01',
    name: 'Quadra 01',
    shortName: 'Q01',
    spec: 'Coberta • Padrão Oficial',
    badge: 'Quadra Central',
  },
  {
    id: 'quadra-02',
    name: 'Quadra 02',
    shortName: 'Q02',
    spec: 'Coberta • Vidro Panorâmico',
  },
  {
    id: 'quadra-03',
    name: 'Quadra 03',
    shortName: 'Q03',
    spec: 'Coberta • Iluminação LED',
  },
  {
    id: 'quadra-04',
    name: 'Quadra 04',
    shortName: 'Q04',
    spec: 'Coberta • Gramado Azul',
  },
  {
    id: 'quadra-05',
    name: 'Quadra 05',
    shortName: 'Q05',
    spec: 'Coberta • Padrão Oficial',
  },
  {
    id: 'quadra-06',
    name: 'Quadra 06',
    shortName: 'Q06',
    spec: 'Coberta • Nova Ala',
    badge: 'Nova Ampliação',
  },
  {
    id: 'quadra-07',
    name: 'Quadra 07',
    shortName: 'Q07',
    spec: 'Coberta • Nova Ala',
    badge: 'Nova Ampliação',
  },
];

const WEEKDAY_SLOTS = [
  '09:00',
  '10:30',
  '12:00',
  '14:00',
  '15:30',
  '17:00',
  '18:00',
  '19:30',
  '21:00',
  '22:00',
];

const WEEKDAY_POPULAR = ['18:00', '19:30', '21:00'];

export const WEEKLY_SCHEDULE: DaySchedule[] = [
  {
    id: 'segunda',
    label: 'Segunda-feira',
    shortLabel: 'Seg',
    hoursLabel: '09h00 às 23h30',
    slots: WEEKDAY_SLOTS,
    popularSlots: WEEKDAY_POPULAR,
  },
  {
    id: 'terca',
    label: 'Terça-feira',
    shortLabel: 'Ter',
    hoursLabel: '09h00 às 23h30',
    slots: WEEKDAY_SLOTS,
    popularSlots: WEEKDAY_POPULAR,
  },
  {
    id: 'quarta',
    label: 'Quarta-feira',
    shortLabel: 'Qua',
    hoursLabel: '09h00 às 23h30',
    slots: WEEKDAY_SLOTS,
    popularSlots: WEEKDAY_POPULAR,
  },
  {
    id: 'quinta',
    label: 'Quinta-feira',
    shortLabel: 'Qui',
    hoursLabel: '09h00 às 23h30',
    slots: WEEKDAY_SLOTS,
    popularSlots: WEEKDAY_POPULAR,
  },
  {
    id: 'sexta',
    label: 'Sexta-feira',
    shortLabel: 'Sex',
    hoursLabel: '09h00 às 23h30',
    slots: WEEKDAY_SLOTS,
    popularSlots: WEEKDAY_POPULAR,
  },
  {
    id: 'sabado',
    label: 'Sábado',
    shortLabel: 'Sáb',
    hoursLabel: '09h00 às 12h00 • 14h00 às 18h30',
    slots: ['09:00', '10:30', '14:00', '15:30', '17:00'],
    popularSlots: ['09:00', '15:30'],
  },
  {
    id: 'domingo',
    label: 'Domingo',
    shortLabel: 'Dom',
    hoursLabel: '14h00 às 18h30',
    slots: ['14:00', '15:30', '17:00'],
    popularSlots: ['15:30', '17:00'],
  },
];

export const STRUCTURE_CARDS: StructureCard[] = [
  {
    number: '01',
    eyebrow: 'Infraestrutura Indoor',
    title: '07 Quadras Cobertas em quase 3.000 m²',
    description:
      'Complexo recentemente ampliado de 5 para 07 quadras cobertas de padrão oficial. Piso azul de alta aderência, vidros panorâmicos e iluminação LED de arena para jogar o ano inteiro, sem depender do clima.',
    highlights: ['07 quadras cobertas', 'Quase 3.000 m² cobertos', 'Iluminação LED profissional'],
    image: '/images/courts-indoor.jpg',
    imageAlt: 'Vista interna das quadras cobertas de padel com piso azul na MX3 Arena em Caçador',
    ctaLabel: 'Simular reserva de quadra',
    ctaHref: '#agendamento',
  },
  {
    number: '02',
    id: 'aulas',
    eyebrow: 'Formação & Evolução',
    title: 'Escola Villa Padel — Adultos, Jovens e Crianças',
    description:
      'Metodologia estruturada em parceria com a Escola Villa Padel. Turmas divididas por faixa etária e nível técnico, do primeiro contato com a raquete ao aperfeiçoamento tático e competitivo.',
    highlights: ['Turmas para adultos', 'Formação para jovens e crianças', 'Do iniciante ao competitivo'],
    image: '/images/villa-padel-classes.jpg',
    imageAlt: 'Aula de padel em quadra coberta na Escola Villa Padel dentro da MX3 Arena',
    ctaLabel: 'Consultar horários de aulas',
    ctaHref: ARENA_INFO.whatsappClassesUrl,
  },
  {
    number: '03',
    eyebrow: 'Pós-Jogo & Convivência',
    title: 'Bar Completo & Área de Lazer',
    description:
      'O terceiro set acontece fora do vidro. Nossa área social conta com bar completo, visibilidade privilegiada para as partidas e ambiente pensado para confraternizações entre atletas, amigos e famílias.',
    highlights: ['Bar completo no complexo', 'Visão direta das quadras', 'Espaço para confraternizações'],
    image: '/images/lounge-bar.jpg',
    imageAlt: 'Bar completo e área de convivência com vista para as quadras cobertas da MX3 Arena',
  },
  {
    number: '04',
    eyebrow: 'Acesso & Conveniência',
    title: 'Estacionamento, Acessibilidade & Pagamentos',
    description:
      'Localização estratégica na Rodovia Osvaldo Olsen, nº 1100, a 5 minutos do centro de Caçador. Estacionamento próprio, entrada acessível para cadeirantes e pagamento facilitado.',
    highlights: ['Estacionamento no local', 'Acesso para cadeirantes', 'Pix, NFC, Crédito e Débito'],
    image: '/images/arena-facility.jpg',
    imageAlt: 'Fachada e acesso com estacionamento e acessibilidade na MX3 Arena em Caçador',
  },
];

export const TOURNAMENTS: TournamentItem[] = [
  {
    number: '01',
    tag: 'Calendário Oficial',
    title: 'Liga Seiko',
    subtitle: 'Etapas Regionais, Estaduais & Etapa Master',
    description:
      'A MX3 Arena é sede oficial de etapas da Liga Seiko em Santa Catarina, reunindo duplas de diversas categorias em chaves eliminatórias com estrutura indoor completa para atletas e público.',
    details: [
      '07 quadras cobertas simultâneas sem risco de adiamento por chuva',
      'Estrutura de apoio completa para atletas, técnicos e torcida',
      'Bar e área de convivência integrados durante todo o fim de semana',
    ],
  },
  {
    number: '02',
    tag: 'Evento Especial',
    title: 'Desafio das Estrelas',
    subtitle: 'Jogos de Exibição & Grandes Encontros',
    description:
      'Noites especiais de alto nível técnico que colocam atletas convidados em quadra diante do público de Caçador e região, com clima de arena profissional e experiência social completa.',
    details: [
      'Confrontos de exibição com atmosfera noturna de estádio indoor',
      'Atendimento dedicado para reservas de ingressos e eventos corporativos',
      'Canal exclusivo de Eventos & Ingressos via WhatsApp e telefone',
    ],
  },
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    author: 'Avaliação verificada no Google',
    context: 'Estrutura Coberta • Caçador - SC',
    rating: 5,
    quote:
      'Excelente estrutura coberta para a prática do padel. Quadras muito bem cuidadas, iluminação ótima e espaço amplo para jogar em qualquer clima.',
  },
  {
    author: 'Avaliação verificada no Google',
    context: 'Ambiente & Convivência • Caçador - SC',
    rating: 5,
    quote:
      'Ambiente ideal para jogar com os amigos e ficar depois da partida. O bar e a área de lazer deixam o pós-jogo muito agradável.',
  },
  {
    author: 'Avaliação verificada no Google',
    context: 'Acesso & Organização • Caçador - SC',
    rating: 5,
    quote:
      'Fácil acesso saindo do centro, estacionamento tranquilo e atendimento ágil na reserva dos horários. Complexo referência na região.',
  },
];
