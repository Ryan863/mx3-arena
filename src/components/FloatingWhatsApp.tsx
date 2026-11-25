'use client';

import { MessageCircle } from 'lucide-react';
import { ARENA_INFO } from '@/data/arena';

export function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6"
    >
      <a
        href={ARENA_INFO.whatsappBookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reservar quadra pelo WhatsApp da MX3 Arena"
        className="group relative flex min-h-[48px] items-center justify-center gap-2.5 rounded-full border border-[#F2C94C]/50 bg-[#0B0D10]/95 px-4 py-3 text-white shadow-xl backdrop-blur-md transition-all duration-200 hover:border-[#F2C94C] hover:bg-[#112236] active:scale-95 sm:px-5"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F2C94C] opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F2C94C]" />
        </span>
        <MessageCircle
          className="h-5 w-5 text-[#F2C94C] transition-transform group-hover:scale-105"
          strokeWidth={1.8}
          aria-hidden="true"
        />
        <span className="hidden text-xs font-semibold tracking-[0.14em] uppercase sm:inline">
          Reservar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
