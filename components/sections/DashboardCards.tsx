"use client";

import { Sparkles } from "lucide-react";
import { useI18n } from "../I18n";

const card = "flex h-full min-h-0 flex-col overflow-hidden rounded-[20px] border border-line bg-card p-5 text-start";
const head = "flex items-center justify-between gap-3 text-[13px] font-medium text-ink-2";

export function BriefingCard() {
  const b = useI18n().t.product.briefing;
  return (
    <div className={card}>
      <div className={head}>
        <span className="flex items-center gap-2 text-blue">
          <Sparkles size={15} /> {b.title}
        </span>
        <span className="text-ink-3">{b.time}</span>
      </div>
      <p className="mt-4 text-[21px] font-[520] leading-[1.32] tracking-[-0.02em]">{b.text}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {b.chips.map((c) => (
          <span key={c} className="chip">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export function AppointmentsCard() {
  const a = useI18n().t.product.appts;
  return (
    <div className={card}>
      <div className={head}>
        <span>{a.title}</span>
        <span className="text-ink-3">{a.count}</span>
      </div>
      <ul className="mt-3 flex flex-col">
        {a.rows.map(([time, name, what, lina]) => (
          <li key={time} className="flex items-center gap-3 border-b border-line py-[9px] text-[14px] last:border-b-0">
            <span className="w-11 flex-none tabular-nums text-ink-3">{time}</span>
            <span className="min-w-0 flex-1 truncate">
              <span className="font-medium">{name}</span> <span className="text-ink-3">· {what}</span>
            </span>
            {lina && <span className="flex-none rounded-full bg-blue-soft px-2 py-0.5 text-[11.5px] font-medium text-blue-deep">{a.via}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LossRadarCard() {
  const r = useI18n().t.product.radar;
  return (
    <div className={card}>
      <div className={head}>
        <span>{r.title}</span>
        <span className="text-ink-3">{r.count}</span>
      </div>
      <ul className="mt-3 flex flex-col gap-3">
        {r.rows.map(([name, why, risk]) => (
          <li key={name} className="text-[13.5px]">
            <div className="flex justify-between gap-2">
              <span className="font-medium">{name}</span>
              <span className="truncate text-ink-3">{why}</span>
            </div>
            <div className="mt-1.5 h-1 rounded-full bg-paper-2">
              <div className="h-full rounded-full bg-ink" style={{ width: `${risk * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const BARS = [0.3, 0.45, 0.38, 0.6, 0.52, 0.74, 0.9];

export function RecoveryCard() {
  const m = useI18n().t.product.money;
  return (
    <div className={card}>
      <div className={head}>
        <span>{m.title}</span>
      </div>
      <div className="mt-2 text-[34px] font-[580] leading-none tracking-[-0.04em] tabular-nums" dir="ltr">
        {m.value}
      </div>
      <div className="mt-1.5 text-[13px] text-ink-2">{m.sub}</div>
      <div className="mt-auto flex h-12 items-end gap-1.5">
        {BARS.map((b, i) => (
          <span key={i} className={`flex-1 rounded-t-[4px] ${i === BARS.length - 1 ? "bg-blue" : "bg-blue/20"}`} style={{ height: `${b * 100}%` }} />
        ))}
      </div>
    </div>
  );
}

export function ActivityCard() {
  const l = useI18n().t.product.live;
  return (
    <div className={card}>
      <div className={head}>
        <span className="flex items-center gap-2">
          <span className="lina-dot scale-75" aria-hidden="true" /> {l.title}
        </span>
      </div>
      <ul className="mt-3 flex flex-col">
        {l.rows.map(([what, when, live]) => (
          <li key={what} className="flex items-center justify-between gap-3 border-b border-line py-2 text-[14px] last:border-b-0">
            <span className={`truncate ${live ? "text-ink" : "text-ink-2"}`}>{what}</span>
            <span className={`flex-none tabular-nums text-[12.5px] ${live ? "text-blue" : "text-ink-3"}`}>{when}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function IntelligenceCard() {
  const c = useI18n().t.product.intel;
  const max = Math.max(...c.rows.map(([, n]) => n));
  return (
    <div className={card}>
      <div className={head}>
        <span>{c.title}</span>
        <span className="text-ink-3">{c.sub}</span>
      </div>
      <ul className="mt-3 flex flex-col gap-2.5">
        {c.rows.map(([topic, n]) => (
          <li key={topic} className="grid grid-cols-[120px_1fr_24px] items-center gap-3 text-[13.5px]">
            <span className="truncate">{topic}</span>
            <span className="h-1.5 rounded-full bg-paper-2">
              <span className="block h-full rounded-full bg-ink" style={{ width: `${(n / max) * 100}%` }} />
            </span>
            <span className="text-end tabular-nums text-ink-3">{n}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
