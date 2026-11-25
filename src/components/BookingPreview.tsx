'use client';

import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Info,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { ARENA_INFO, COURTS, WEEKLY_SCHEDULE } from '@/data/arena';

const DURATIONS = ['60 min', '90 min'] as const;

export function BookingPreview() {
  const [selectedCourtId, setSelectedCourtId] = useState<string>(COURTS[0].id);
  const [selectedDayId, setSelectedDayId] = useState<string>(WEEKLY_SCHEDULE[2].id);
  const [selectedSlot, setSelectedSlot] = useState<string>('19:30');
  const [selectedDuration, setSelectedDuration] = useState<(typeof DURATIONS)[number]>('90 min');

  const selectedCourt = useMemo(
    () => COURTS.find((c) => c.id === selectedCourtId) ?? COURTS[0],
    [selectedCourtId]
  );

  const selectedDay = useMemo(
    () => WEEKLY_SCHEDULE.find((d) => d.id === selectedDayId) ?? WEEKLY_SCHEDULE[0],
    [selectedDayId]
  );

  const handleSelectDay = (dayId: string) => {
    setSelectedDayId(dayId);
    const nextDay = WEEKLY_SCHEDULE.find((d) => d.id === dayId);
    if (nextDay && !nextDay.slots.includes(selectedSlot)) {
      setSelectedSlot(nextDay.popularSlots[0] ?? nextDay.slots[0]);
    }
  };

  const whatsappMessage = useMemo(() => {
    return `Olá, MX3 Arena! Vim pelo site e gostaria de confirmar a pré-reserva:\n• Quadra: ${selectedCourt.name} (Coberta)\n• Dia: ${selectedDay.label}\n• Horário: ${selectedSlot}\n• Duração: ${selectedDuration}\nEstá disponível?`;
  }, [selectedCourt.name, selectedDay.label, selectedSlot, selectedDuration]);

  const whatsappHref = useMemo(() => {
    return `https://wa.me/${ARENA_INFO.whatsappBookingPhone}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
  }, [whatsappMessage]);

  return (
    <section
      id="agendamento"
      className="scroll-mt-24 bg-[#F6F7F9] py-20 text-[#0B0D10] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho editorial da seção */}
        <div className="reveal-section flex flex-col justify-between gap-6 border-b border-slate-900/10 pb-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#112236] uppercase">
              Prévia Interativa • 07 Quadras Cobertas
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[#0B0D10] sm:text-4xl lg:text-5xl">
              Simule sua reserva em segundos.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
              Escolha a quadra, o dia da semana e a faixa de horário de sua preferência. Ao
              confirmar, abrimos seu WhatsApp já com todos os dados preenchidos para nossa equipe
              validar na hora.
            </p>
          </div>

          <div className="inline-flex items-start gap-2.5 rounded-xl border border-slate-900/10 bg-white px-4 py-3 text-xs text-[#4B5563] shadow-xs lg:max-w-sm">
            <Info
              className="mt-0.5 h-4 w-4 shrink-0 text-[#112236]"
              strokeWidth={1.8}
              aria-hidden="true"
            />
            <span>
              Prévia do sistema de agendamento online — finalize sua reserva direto pelo WhatsApp.
            </span>
          </div>
        </div>

        {/* Painel interativo + Resumo escuro */}
        <div className="reveal-section mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Controles à esquerda */}
          <div className="space-y-8 rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 lg:col-span-7">
            {/* 1. Seletor de Quadra */}
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold tracking-[0.16em] text-[#112236] uppercase">
                  01. Escolha a Quadra Coberta
                </span>
                <span className="tabular-nums text-xs font-medium text-[#4B5563]">
                  07 quadras disponíveis
                </span>
              </div>

              <div className="mt-3.5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4">
                {COURTS.map((court) => {
                  const isActive = court.id === selectedCourtId;
                  return (
                    <button
                      key={court.id}
                      type="button"
                      onClick={() => setSelectedCourtId(court.id)}
                      aria-pressed={isActive}
                      className={`group flex min-h-[60px] flex-col items-start justify-between rounded-xl border px-3.5 py-2.5 text-left transition-all ${
                        isActive
                          ? 'border-[#0B0D10] bg-[#0B0D10] text-white'
                          : 'border-slate-900/10 bg-[#F6F7F9] text-[#0B0D10] hover:border-slate-900/30 hover:bg-white'
                      }`}
                    >
                      <div className="flex w-full items-center justify-between gap-1">
                        <span className="font-display tabular-nums text-sm font-bold">
                          {court.name}
                        </span>
                        {court.badge && (
                          <span
                            className={`rounded px-1.5 py-0.5 text-[9px] font-semibold tracking-wider uppercase ${
                              isActive
                                ? 'bg-[#F2C94C] text-[#0B0D10]'
                                : 'bg-[#112236]/10 text-[#112236]'
                            }`}
                          >
                            {court.badge === 'Quadra Central' ? 'Central' : 'Nova'}
                          </span>
                        )}
                      </div>
                      <span
                        className={`mt-1 text-[11px] ${
                          isActive ? 'text-neutral-300' : 'text-[#4B5563]'
                        }`}
                      >
                        {court.spec}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Seletor de Dia da Semana */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold tracking-[0.16em] text-[#112236] uppercase">
                  02. Dia da Semana
                </span>
                <span className="tabular-nums text-xs font-medium text-[#4B5563]">
                  Funcionamento: {selectedDay.hoursLabel}
                </span>
              </div>

              <div className="mt-3.5 grid grid-cols-4 gap-2 sm:grid-cols-7">
                {WEEKLY_SCHEDULE.map((day) => {
                  const isActive = day.id === selectedDayId;
                  return (
                    <button
                      key={day.id}
                      type="button"
                      onClick={() => handleSelectDay(day.id)}
                      aria-pressed={isActive}
                      className={`min-h-[46px] rounded-xl border px-2 py-2 text-center text-xs font-semibold tracking-wider uppercase transition-all ${
                        isActive
                          ? 'border-[#0B0D10] bg-[#0B0D10] text-[#F2C94C]'
                          : 'border-slate-900/10 bg-[#F6F7F9] text-[#0B0D10] hover:border-slate-900/30 hover:bg-white'
                      }`}
                    >
                      {day.shortLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Faixa de Horário & Duração */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <span className="text-xs font-semibold tracking-[0.16em] text-[#112236] uppercase">
                  03. Faixa de Horário
                </span>
                <div className="mt-3.5 grid grid-cols-3 gap-2 sm:grid-cols-5">
                  {selectedDay.slots.map((slot) => {
                    const isActive = slot === selectedSlot;
                    const isPopular = selectedDay.popularSlots.includes(slot);
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        aria-pressed={isActive}
                        className={`relative min-h-[44px] rounded-xl border px-2.5 py-2 tabular-nums text-sm font-semibold transition-all ${
                          isActive
                            ? 'border-[#F2C94C] bg-[#F2C94C] text-[#0B0D10]'
                            : 'border-slate-900/10 bg-[#F6F7F9] text-[#0B0D10] hover:border-slate-900/30 hover:bg-white'
                        }`}
                      >
                        {slot}
                        {isPopular && !isActive && (
                          <span
                            title="Horário de alta procura"
                            className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#112236]"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold tracking-[0.16em] text-[#112236] uppercase">
                  04. Duração
                </span>
                <div className="mt-3.5 grid grid-cols-2 gap-2 sm:grid-cols-1">
                  {DURATIONS.map((duration) => {
                    const isActive = duration === selectedDuration;
                    return (
                      <button
                        key={duration}
                        type="button"
                        onClick={() => setSelectedDuration(duration)}
                        aria-pressed={isActive}
                        className={`min-h-[44px] rounded-xl border px-3 py-2 tabular-nums text-xs font-semibold tracking-wider uppercase transition-all ${
                          isActive
                            ? 'border-[#0B0D10] bg-[#0B0D10] text-white'
                            : 'border-slate-900/10 bg-[#F6F7F9] text-[#0B0D10] hover:border-slate-900/30 hover:bg-white'
                        }`}
                      >
                        {duration}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Ticket de Resumo à direita */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B0D10] p-6 text-white sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#F2C94C] uppercase">
                    Resumo da Pré-Reserva
                  </span>
                  <h3 className="font-display mt-1 text-2xl font-bold tracking-tight text-white">
                    {selectedCourt.name}
                  </h3>
                </div>
                <span className="rounded-lg border border-[#F2C94C]/30 bg-[#F2C94C]/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-[#F2C94C] uppercase">
                  Indoor
                </span>
              </div>

              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <dt className="flex items-center gap-2 text-neutral-400">
                    <Calendar className="h-4 w-4 text-[#F2C94C]" strokeWidth={1.8} aria-hidden="true" />
                    <span>Dia</span>
                  </dt>
                  <dd className="font-semibold text-white">{selectedDay.label}</dd>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <dt className="flex items-center gap-2 text-neutral-400">
                    <Clock className="h-4 w-4 text-[#F2C94C]" strokeWidth={1.8} aria-hidden="true" />
                    <span>Horário & Duração</span>
                  </dt>
                  <dd className="tabular-nums font-semibold text-white">
                    {selectedSlot} • {selectedDuration}
                  </dd>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <dt className="flex items-center gap-2 text-neutral-400">
                    <MapPin className="h-4 w-4 text-[#F2C94C]" strokeWidth={1.8} aria-hidden="true" />
                    <span>Unidade</span>
                  </dt>
                  <dd className="text-right font-medium text-neutral-200">
                    Rod. Osvaldo Olsen, 1100
                  </dd>
                </div>
              </dl>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-neutral-400 uppercase">
                  Prévia da mensagem no WhatsApp
                </p>
                <p className="mt-2 whitespace-pre-line text-xs leading-relaxed text-neutral-300">
                  {whatsappMessage}
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#F2C94C] px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-[#0B0D10] uppercase transition-colors hover:bg-[#EAB308]"
              >
                <span>Confirmar Pré-Reserva no WhatsApp</span>
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>

              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-neutral-400">
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#F2C94C]" strokeWidth={1.8} aria-hidden="true" />
                  Pix, NFC e Cartões
                </span>
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#F2C94C]" strokeWidth={1.8} aria-hidden="true" />
                  Atendimento {ARENA_INFO.whatsappBookingDisplay}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
