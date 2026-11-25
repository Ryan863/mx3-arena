'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  AtSign,
  CheckCircle2,
  Clock,
  CreditCard,
  MapPin,
  Navigation,
  Phone,
  Share2,
  Star,
  Ticket,
  Trophy,
} from 'lucide-react';
import {
  ARENA_INFO,
  GOOGLE_REVIEWS,
  STRUCTURE_CARDS,
  TOURNAMENTS,
} from '@/data/arena';
import { BookingPreview } from '@/components/BookingPreview';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const HERO_METRICS = [
  { value: '07', label: 'Quadras Cobertas' },
  { value: '~3.000 m²', label: 'De Estrutura Indoor' },
  { value: '4.9 ★', label: 'Google (40 Avaliações)' },
  { value: '5 min', label: 'Do Centro de Caçador' },
];

export function ArenaLanding() {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.hero-stagger', {
          y: 28,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });

        const sections = gsap.utils.toArray<HTMLElement>('.reveal-section');
        sections.forEach((section) => {
          gsap.from(section, {
            y: 32,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: section,
              start: 'top 84%',
              once: true,
            },
          });
        });

        ScrollTrigger.refresh();
      });

      return () => mm.revert();
    },
    { scope: mainRef }
  );

  return (
    <main id="top" ref={mainRef}>
      {/* =====================================================================
          1. HERO EDITORIAL DE ALTO IMPACTO
      ===================================================================== */}
      <section className="relative flex min-h-[88vh] flex-col justify-between overflow-hidden bg-[#0B0D10] text-white">
        {/* Background fotográfico responsivo sem lazy-load */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/hero-desktop.webp"
            alt="Quadra coberta de padel azul com bola amarela na MX3 Arena em Caçador"
            fetchPriority="high"
            width={1920}
            height={1080}
            className="hidden h-full w-full object-cover object-center md:block"
          />
          <img
            src="/images/hero-mobile.webp"
            alt="Quadra coberta de padel azul com bola amarela na MX3 Arena em Caçador"
            fetchPriority="high"
            width={1080}
            height={1920}
            className="block h-full w-full object-cover object-center md:hidden"
          />
          {/* Scrim editorial para leitura nítida mantendo o azul da quadra vivo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/95 via-[#0B0D10]/75 to-[#112236]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-[#0B0D10]/55" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-14 pb-12 sm:px-6 lg:px-8 lg:pt-20">
          <div className="max-w-3xl">
            <p className="hero-stagger inline-flex items-center gap-2 rounded-full border border-[#F2C94C]/35 bg-[#0B0D10]/70 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-[#F2C94C] uppercase backdrop-blur-sm">
              07 Quadras Cobertas • Quase 3.000 m² • Caçador - SC
            </p>

            <h1 className="hero-stagger font-display mt-6 text-4xl leading-[0.96] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              O palco definitivo do{' '}
              <span className="text-[#F2C94C]">padel</span> em Caçador.
            </h1>

            <p className="hero-stagger mt-6 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg">
              Estrutura indoor de quase 3.000 m² com 07 quadras cobertas, aulas pela Escola Villa
              Padel, torneios oficiais e bar completo a 5 minutos do centro.
            </p>

            <div className="hero-stagger mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href={ARENA_INFO.whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[#F2C94C] px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-[#0B0D10] uppercase transition-colors hover:bg-[#EAB308]"
              >
                <span>Agendar Horário Agora</span>
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>

              <a
                href="#agendamento"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl border border-white/25 bg-[#0B0D10]/60 px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-sm transition-colors hover:border-[#F2C94C] hover:text-[#F2C94C]"
              >
                <span>Simular Reserva de Quadra</span>
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Barra Inferior de Métricas Reais */}
        <div className="relative z-10 border-t border-white/15 bg-[#0B0D10]/85 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0">
            {HERO_METRICS.map((metric) => (
              <div key={metric.label} className="px-4 py-5 sm:px-6 lg:px-8">
                <p className="font-display tabular-nums text-2xl font-bold tracking-tight text-[#F2C94C] sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs font-medium tracking-wide text-neutral-300 uppercase">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. PRÉVIA INTERATIVA DE AGENDAMENTO (#agendamento)
      ===================================================================== */}
      <BookingPreview />

      {/* =====================================================================
          3. TORNEIOS, LIGAS & GRANDES EVENTOS (#torneios)
      ===================================================================== */}
      <section
        id="torneios"
        className="scroll-mt-24 bg-[#0B0D10] py-20 text-white sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-section flex flex-col justify-between gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#F2C94C] uppercase">
                <Trophy className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                <span>Competição & Espetáculo</span>
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Palco das grandes ligas e eventos de Santa Catarina.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-neutral-300">
              Com 07 quadras cobertas e infraestrutura completa para atletas e torcida, a MX3 Arena
              recebe etapas oficiais e jogos de exibição sem depender do clima.
            </p>
          </div>

          {/* Vitrine Fotográfica Ampla */}
          <div className="reveal-section relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#112236]">
            <img
              src="/images/tournament-action.jpg"
              alt="Partida competitiva de duplas em torneio noturno dentro da quadra coberta da MX3 Arena"
              loading="lazy"
              decoding="async"
              width={1600}
              height={900}
              className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[440px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/30 to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-end sm:p-8">
              <div>
                <span className="rounded bg-[#F2C94C] px-2.5 py-1 text-[11px] font-semibold tracking-[0.16em] text-[#0B0D10] uppercase">
                  Sede Oficial
                </span>
                <h3 className="font-display mt-2.5 text-2xl font-bold text-white sm:text-3xl">
                  Atmosfera de arena indoor para atletas e público
                </h3>
              </div>
              <span className="tabular-nums text-xs font-semibold tracking-[0.18em] text-neutral-300 uppercase">
                07 Quadras • Iluminação LED
              </span>
            </div>
          </div>

          {/* Dois Blocos Editoriais: Liga Seiko + Desafio das Estrelas */}
          <div className="reveal-section mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {TOURNAMENTS.map((item) => (
              <article
                key={item.number}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#12161C] p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#F2C94C] uppercase">
                      {item.tag}
                    </span>
                    <span className="font-display tabular-nums text-sm font-bold text-neutral-500">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-display mt-5 text-2xl font-bold text-white sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#F2C94C]">{item.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                    {item.description}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-neutral-200 sm:text-sm"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#F2C94C]"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Barra Dedicada para Eventos e Ingressos */}
          <div className="reveal-section mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#F2C94C]/30 bg-gradient-to-r from-[#112236] to-[#12161C] p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-[#F2C94C]/30 bg-[#F2C94C]/10 p-3 text-[#F2C94C]">
                <Ticket className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#F2C94C] uppercase">
                  Canal Exclusivo • Eventos & Ingressos
                </p>
                <h3 className="font-display mt-1 text-xl font-bold text-white sm:text-2xl">
                  Quer acompanhar torneios, reservar ingressos ou realizar um evento?
                </h3>
                <p className="mt-1 text-sm text-neutral-300">
                  Atendimento direto para informações de ligas, entradas e torneios fechados pelo{' '}
                  <span className="tabular-nums font-semibold text-white">
                    {ARENA_INFO.whatsappEventsDisplay}
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
              <a
                href={ARENA_INFO.whatsappEventsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#F2C94C] px-5 py-3 text-xs font-semibold tracking-[0.16em] text-[#0B0D10] uppercase transition-colors hover:bg-[#EAB308]"
              >
                <span>Falar sobre Eventos</span>
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>
              <a
                href={`tel:+${ARENA_INFO.whatsappEventsPhone}`}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 tabular-nums text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:border-[#F2C94C]/50"
              >
                <Phone className="h-4 w-4 text-[#F2C94C]" strokeWidth={1.8} aria-hidden="true" />
                <span>{ARENA_INFO.whatsappEventsDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. ESTRUTURA, ESCOLA VILLA PADEL & BAR (#estrutura / #aulas)
      ===================================================================== */}
      <section
        id="estrutura"
        className="scroll-mt-24 bg-[#F6F7F9] py-20 text-[#0B0D10] sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-section flex flex-col justify-between gap-6 border-b border-slate-900/10 pb-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#112236] uppercase">
                Estrutura Completa • Quase 3.000 m²
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[#0B0D10] sm:text-4xl lg:text-5xl">
                Cada detalhe pensado para o jogo e o pós-jogo.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#4B5563]">
              Da ampliação para 07 quadras cobertas às turmas da Escola Villa Padel e área de lazer
              com bar completo: infraestrutura de clube esportivo em Caçador.
            </p>
          </div>

          <div className="reveal-section mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {STRUCTURE_CARDS.map((card) => (
              <article
                key={card.number}
                id={card.id}
                className="group flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-slate-900/10 bg-white transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#112236]">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 rounded-lg bg-[#0B0D10]/85 px-3 py-1.5 font-display tabular-nums text-xs font-bold tracking-[0.18em] text-[#F2C94C] backdrop-blur-sm">
                    {card.number}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-[#112236] uppercase">
                      {card.eyebrow}
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-[#0B0D10]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-900/10 pt-5">
                    <ul className="flex flex-wrap gap-2">
                      {card.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="rounded-lg border border-slate-900/10 bg-[#F6F7F9] px-3 py-1.5 text-xs font-medium text-[#0B0D10]"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {card.ctaLabel && card.ctaHref && (
                      <a
                        href={card.ctaHref}
                        target={card.ctaHref.startsWith('http') ? '_blank' : undefined}
                        rel={card.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#0B0D10] uppercase transition-colors hover:text-[#112236]"
                      >
                        <span>{card.ctaLabel}</span>
                        <ArrowRight className="h-4 w-4 text-[#EAB308]" strokeWidth={2} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. PROVA SOCIAL VERIFICADA (4,9 ★ GOOGLE) + MAPA & HORÁRIOS (#contato)
      ===================================================================== */}
      <section
        id="contato"
        className="scroll-mt-24 bg-white py-20 text-[#0B0D10] sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Bloco Google Reviews */}
          <div className="reveal-section flex flex-col justify-between gap-6 border-b border-slate-900/10 pb-10 lg:flex-row lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-[#F6F7F9] px-4 py-1.5 text-xs font-semibold text-[#0B0D10]">
                <div className="flex items-center gap-0.5 text-[#EAB308]" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#F2C94C] text-[#EAB308]" strokeWidth={1.8} />
                  ))}
                </div>
                <span className="tabular-nums">
                  {ARENA_INFO.googleRating} de 5 no Google ({ARENA_INFO.googleReviewsCount} avaliações)
                </span>
              </div>
              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#0B0D10] sm:text-4xl">
                Avaliação máxima de quem joga toda semana.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-[#4B5563]">
              Nota {ARENA_INFO.googleRating} baseada em {ARENA_INFO.googleReviewsCount} avaliações
              públicas verificadas no Google, com destaque para a estrutura coberta e o ambiente
              esportivo.
            </p>
          </div>

          <div className="reveal-section mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {GOOGLE_REVIEWS.map((review, index) => (
              <blockquote
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-slate-900/10 bg-[#F6F7F9] p-6"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#EAB308]" aria-label="5 de 5 estrelas">
                    {Array.from({ length: review.rating }).map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className="h-4 w-4 fill-[#F2C94C] text-[#EAB308]"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[#0B0D10]">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
                <footer className="mt-5 border-t border-slate-900/10 pt-4">
                  <p className="text-xs font-semibold text-[#0B0D10]">{review.author}</p>
                  <p className="mt-0.5 text-[11px] text-[#4B5563]">{review.context}</p>
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Split Localização, Horários & Mapa */}
          <div className="reveal-section mt-14 grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-900/10 bg-[#0B0D10] text-white lg:grid-cols-12">
            <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#F2C94C] uppercase">
                  Localização & Horários
                </p>
                <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  A 5 minutos do centro de Caçador.
                </h3>

                <div className="mt-6 flex items-start gap-3 text-sm text-neutral-300">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F2C94C]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-white">{ARENA_INFO.addressFull}</p>
                    <p className="mt-1 text-xs text-neutral-400">
                      Estacionamento próprio e acesso adaptado para cadeirantes.
                    </p>
                  </div>
                </div>

                {/* Tabela de Horários */}
                <div className="mt-7 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#F2C94C] uppercase">
                    <Clock className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                    <span>Horário de Funcionamento</span>
                  </div>
                  <dl className="mt-4 space-y-2.5 text-sm">
                    {ARENA_INFO.operatingHours.map((item) => (
                      <div
                        key={item.day}
                        className="flex flex-col justify-between gap-1 border-b border-white/10 pb-2.5 sm:flex-row sm:items-center"
                      >
                        <dt className="text-neutral-300">{item.day}</dt>
                        <dd className="tabular-nums font-semibold text-white">{item.hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Canais de Contato + Pagamento */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href={ARENA_INFO.whatsappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 transition-colors hover:border-[#F2C94C]/50"
                  >
                    <span className="block text-[10px] font-semibold tracking-[0.16em] text-[#F2C94C] uppercase">
                      Agendamentos (WhatsApp)
                    </span>
                    <span className="mt-1 block tabular-nums text-sm font-semibold text-white">
                      {ARENA_INFO.whatsappBookingDisplay}
                    </span>
                  </a>
                  <a
                    href={ARENA_INFO.whatsappEventsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 transition-colors hover:border-[#F2C94C]/50"
                  >
                    <span className="block text-[10px] font-semibold tracking-[0.16em] text-[#F2C94C] uppercase">
                      Eventos & Ingressos
                    </span>
                    <span className="mt-1 block tabular-nums text-sm font-semibold text-white">
                      {ARENA_INFO.whatsappEventsDisplay}
                    </span>
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                  <CreditCard className="h-4 w-4 text-[#F2C94C]" strokeWidth={1.8} aria-hidden="true" />
                  <span>Pagamentos: {ARENA_INFO.paymentMethods.join(' • ')}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={ARENA_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#F2C94C] px-5 py-3 text-xs font-semibold tracking-[0.16em] text-[#0B0D10] uppercase transition-colors hover:bg-[#EAB308]"
                >
                  <Navigation className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  <span>Como Chegar (Rota GPS)</span>
                </a>
                <a
                  href={ARENA_INFO.whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-[#F2C94C]/50"
                >
                  <span>Chamar no WhatsApp</span>
                  <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="min-h-[380px] w-full bg-[#112236] lg:col-span-6">
              <iframe
                title="Mapa de localização da MX3 Arena em Caçador - SC"
                src={ARENA_INFO.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[380px] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. FECHAMENTO CINEMATOGRÁFICO & FOOTER INSTITUCIONAL
      ===================================================================== */}
      <section className="relative overflow-hidden bg-[#0B0D10] py-24 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/footer-arena.jpg"
            alt="Raquete de padel e bolas amarelas na quadra indoor iluminada da MX3 Arena"
            loading="lazy"
            decoding="async"
            width={1600}
            height={900}
            className="h-full w-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/70 to-[#0B0D10]/85" />
        </div>

        <div className="reveal-section relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#F2C94C] uppercase">
            MX3 Arena • Caçador - SC
          </p>
          <h2 className="font-display mt-4 text-4xl leading-[0.98] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sua próxima partida começa aqui.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-300">
            Garanta seu horário em uma das 07 quadras cobertas ou fale com nossa equipe para aulas
            na Escola Villa Padel e eventos.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">
            <a
              href={ARENA_INFO.whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[#F2C94C] px-7 py-3.5 text-xs font-semibold tracking-[0.16em] text-[#0B0D10] uppercase transition-colors hover:bg-[#EAB308]"
            >
              <span>Reservar Quadra no WhatsApp</span>
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </a>
            <a
              href="#agendamento"
              className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-xs font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-sm transition-colors hover:border-[#F2C94C]"
            >
              <span>Ver Horários Disponíveis</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#07090B] py-12 text-neutral-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-center">
            <div className="flex items-center gap-3.5">
              <img
                src="/images/logo.webp"
                alt="Logotipo MX3 Arena"
                width={44}
                height={44}
                loading="lazy"
                className="h-11 w-11 rounded-full border border-[#F2C94C]/40 object-cover"
              />
              <div>
                <p className="font-display text-base font-bold tracking-tight text-white">
                  MX3 <span className="text-[#F2C94C]">ARENA</span>
                </p>
                <p className="mt-0.5 text-xs text-neutral-400">{ARENA_INFO.addressFull}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={ARENA_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#F2C94C]/50 hover:text-[#F2C94C]"
              >
                <AtSign className="h-4 w-4 text-[#F2C94C]" strokeWidth={1.8} aria-hidden="true" />
                <span>{ARENA_INFO.instagramHandle}</span>
              </a>

              <a
                href={ARENA_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#F2C94C]/50 hover:text-[#F2C94C]"
              >
                <Share2 className="h-4 w-4 text-[#F2C94C]" strokeWidth={1.8} aria-hidden="true" />
                <span>{ARENA_INFO.facebookName}</span>
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-3 text-xs text-neutral-500 sm:flex-row sm:items-center">
            <p className="tabular-nums">
              © 2026 MX3 Arena • CNPJ {ARENA_INFO.cnpj} • Caçador - SC
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#agendamento" className="transition-colors hover:text-neutral-300">
                Agendamento
              </a>
              <a href="#torneios" className="transition-colors hover:text-neutral-300">
                Torneios
              </a>
              <a href="#estrutura" className="transition-colors hover:text-neutral-300">
                Estrutura
              </a>
              <a href="#aulas" className="transition-colors hover:text-neutral-300">
                Escola Villa Padel
              </a>
              <a href="#contato" className="transition-colors hover:text-neutral-300">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
