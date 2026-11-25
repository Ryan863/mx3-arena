import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ARENA_INFO } from '@/data/arena';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mx3-arena.vercel.app'),
  title: 'MX3 Arena | Complexo Indoor de Padel em Caçador - SC (07 Quadras Cobertas)',
  description:
    'O maior complexo de padel coberto de Caçador: quase 3.000 m² de estrutura, 07 quadras cobertas, aulas pela Escola Villa Padel, torneios oficiais (Liga Seiko) e bar completo a 5 min do centro.',
  keywords: [
    'MX3 Arena',
    'padel Caçador',
    'quadra de padel coberta Caçador SC',
    'Escola Villa Padel',
    'Liga Seiko padel',
    'aluguel quadra padel Caçador',
  ],
  openGraph: {
    title: 'MX3 Arena | O palco definitivo do padel em Caçador - SC',
    description:
      'Quase 3.000 m² de estrutura indoor, 07 quadras cobertas, Escola Villa Padel, torneios oficiais e bar completo na Rod. Osvaldo Olsen, 1100.',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/hero-desktop.webp',
        width: 1200,
        height: 630,
        alt: 'Quadra coberta de padel azul com bola amarela na MX3 Arena em Caçador - SC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MX3 Arena | 07 Quadras Cobertas de Padel em Caçador - SC',
    description:
      'Quase 3.000 m² de estrutura indoor, aulas pela Escola Villa Padel, Liga Seiko e bar completo a 5 min do centro.',
    images: ['/images/hero-desktop.webp'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['SportsActivityLocation', 'LocalBusiness'],
  name: ARENA_INFO.brandName,
  description:
    'O maior complexo de padel coberto de Caçador: quase 3.000 m² de estrutura, 07 quadras cobertas de alto nível, aulas pela Escola Villa Padel, torneios oficiais e área de lazer completa.',
  image: '/images/hero-desktop.webp',
  telephone: '+55-49-98904-6771',
  priceRange: '$$',
  paymentAccepted: 'Pix, Cartão de Crédito, Cartão de Débito, Aproximação (NFC)',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rodovia Osvaldo Olsen, 1100 - Bairro Gioppo',
    addressLocality: 'Caçador',
    addressRegion: 'SC',
    postalCode: '89507-597',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -26.7753,
    longitude: -51.015,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '23:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '12:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '14:00',
      closes: '18:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '14:00',
      closes: '18:30',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '40',
  },
  sameAs: [ARENA_INFO.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable}`}
    >
      <body className="antialiased selection:bg-[#F2C94C] selection:text-[#0B0D10]">
        <div className="grain-overlay" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
