'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Menu, Star, X } from 'lucide-react';
import { ARENA_INFO } from '@/data/arena';

const NAV_LINKS = [
  { label: 'Agendamento', href: '#agendamento' },
  { label: 'Torneios', href: '#torneios' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Aulas', href: '#aulas' },
  { label: 'Contato', href: '#contato' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0B0D10]/90 backdrop-blur-md">
      {/* Topbar discreta */}
      <div className="border-b border-white/10 bg-[#07090B]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[11px] font-medium tracking-wide text-neutral-300 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 truncate">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-[#F2C94C]" strokeWidth={1.8} aria-hidden="true" />
            <span className="truncate">{ARENA_INFO.addressShort}</span>
          </div>
          <a
            href="#contato"
            className="hidden items-center gap-1.5 text-neutral-200 transition-colors hover:text-[#F2C94C] sm:inline-flex"
          >
            <Star className="h-3.5 w-3.5 fill-[#F2C94C] text-[#F2C94C]" strokeWidth={1.8} aria-hidden="true" />
            <span className="tabular-nums font-semibold text-white">{ARENA_INFO.googleRating}</span>
            <span className="text-neutral-400">no Google ({ARENA_INFO.googleReviewsCount} avaliações)</span>
          </a>
        </div>
      </div>

      {/* Navbar principal */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C94C]"
          aria-label="MX3 Arena - Início"
        >
          <img
            src="/images/logo.webp"
            alt="Logotipo MX3 Arena"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border border-[#F2C94C]/40 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="leading-none">
            <span className="font-display block text-base font-bold tracking-tight text-white sm:text-lg">
              MX3 <span className="text-[#F2C94C]">ARENA</span>
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold tracking-[0.2em] text-neutral-400 uppercase">
              Padel Indoor • Caçador
            </span>
          </div>
        </a>

        {/* Navegação Desktop */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-[0.14em] text-neutral-300 uppercase transition-colors hover:text-[#F2C94C]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={ARENA_INFO.whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[44px] items-center gap-2 rounded-xl bg-[#F2C94C] px-5 py-2.5 text-xs font-semibold tracking-[0.16em] text-[#0B0D10] uppercase transition-colors hover:bg-[#EAB308] sm:inline-flex"
          >
            <span>Reservar Quadra</span>
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:border-[#F2C94C]/50 hover:text-[#F2C94C] lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Drawer Mobile Fullscreen */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação móvel"
          className="fixed inset-0 top-[97px] z-50 flex flex-col justify-between overflow-y-auto bg-[#0B0D10] px-6 py-8 lg:hidden"
        >
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[52px] items-center justify-between border-b border-white/10 py-3 font-display text-2xl font-bold tracking-tight text-white transition-colors hover:text-[#F2C94C]"
              >
                <span>{link.label}</span>
                <span className="tabular-nums text-xs font-semibold tracking-[0.2em] text-[#F2C94C]">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
            <a
              href={ARENA_INFO.whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#F2C94C] px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-[#0B0D10] uppercase transition-colors hover:bg-[#EAB308]"
            >
              <span>Agendar Quadra • {ARENA_INFO.whatsappBookingDisplay}</span>
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </a>
            <a
              href={ARENA_INFO.whatsappEventsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-[#F2C94C]/50"
            >
              <span>Eventos & Ingressos • {ARENA_INFO.whatsappEventsDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
