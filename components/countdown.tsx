'use client'

import { useEffect, useState } from 'react'
import { CalendarClock } from 'lucide-react'

const TARGET = new Date('2026-12-01T00:00:00-03:00').getTime()

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const labels: Record<keyof TimeLeft, string> = {
  days: 'Días',
  hours: 'Horas',
  minutes: 'Minutos',
  seconds: 'Segundos',
}

export function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(getTimeLeft())
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section aria-labelledby="countdown-title" className="relative overflow-hidden bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary via-primary to-chart-4/90"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-md">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-primary-foreground">
              <CalendarClock className="size-3.5" aria-hidden="true" />
              Cuenta regresiva
            </span>
            <h2
              id="countdown-title"
              className="mt-4 text-balance text-2xl font-semibold text-primary-foreground sm:text-3xl"
            >
              La Ley 21.719 será plenamente exigible el 1 de diciembre de 2026
            </h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-primary-foreground/80">
              Prepararse toma tiempo. Empieza hoy y llega con tu empresa lista,
              sin apuros de último minuto.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {(['days', 'hours', 'minutes', 'seconds'] as const).map((unit) => (
              <div
                key={unit}
                className="flex min-w-[72px] flex-col items-center rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 px-3 py-4 backdrop-blur-sm sm:min-w-[88px]"
              >
                <span className="font-mono text-3xl font-semibold tabular-nums text-primary-foreground sm:text-4xl">
                  {time ? String(time[unit]).padStart(2, '0') : '--'}
                </span>
                <span className="mt-1 text-[0.7rem] font-medium uppercase tracking-wide text-primary-foreground/70">
                  {labels[unit]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
