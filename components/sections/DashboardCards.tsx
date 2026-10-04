import { Sparkles } from "lucide-react";

const card = "flex h-full min-h-0 flex-col overflow-hidden rounded-[20px] border border-line bg-card p-5";
const head = "flex items-center justify-between text-[13px] font-medium text-ink-2";

export function BriefingCard() {
  return (
    <div className={card}>
      <div className={head}>
        <span className="flex items-center gap-2 text-blue">
          <Sparkles size={15} /> Morning AI Briefing
        </span>
        <span className="text-ink-3">07:30</span>
      </div>
      <p className="mt-4 text-[21px] font-[520] leading-[1.32] tracking-[-0.02em]">
        Good morning, Dr. Kaya. Overnight Lina handled 17 conversations and booked 4 appointments. Two patients need your answer
        before 10:00.
      </p>
      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        <span className="chip">Reply to Leyla&apos;s question</span>
        <span className="chip">Review Omar&apos;s photo</span>
      </div>
    </div>
  );
}

const APPTS = [
  ["09:30", "Elif Şahin", "Cleaning", false],
  ["10:30", "Sara Al-Amin", "Veneers consult", true],
  ["11:15", "Mehmet Kaya", "Filling", false],
  ["12:00", "Omar Haddad", "Implant consult", true],
  ["14:30", "Leyla Demir", "Whitening", true],
  ["15:45", "Yusuf Arslan", "Check-up", false],
  ["17:00", "Nour Saleh", "Braces review", false],
] as const;

export function AppointmentsCard() {
  return (
    <div className={card}>
      <div className={head}>
        <span>Today&apos;s appointments</span>
        <span className="text-ink-3">7 booked</span>
      </div>
      <ul className="mt-3 flex flex-col">
        {APPTS.map(([t, n, what, lina]) => (
          <li key={t} className="flex items-center gap-3 border-b border-line py-[9px] text-[14px] last:border-b-0">
            <span className="w-11 flex-none tabular-nums text-ink-3">{t}</span>
            <span className="min-w-0 flex-1 truncate">
              <span className="font-medium">{n}</span> <span className="text-ink-3">· {what}</span>
            </span>
            {lina && <span className="flex-none rounded-full bg-blue-soft px-2 py-0.5 text-[11.5px] font-medium text-blue-deep">via Lina</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

const RISK = [
  ["Ahmed K.", "Implant quote, no reply 9 days", 0.86],
  ["Murat Y.", "Asked the price, went quiet", 0.72],
  ["Elena P.", "Missed her check-up", 0.48],
] as const;

export function LossRadarCard() {
  return (
    <div className={card}>
      <div className={head}>
        <span>Patient loss radar</span>
        <span className="text-ink-3">3 at risk</span>
      </div>
      <ul className="mt-3 flex flex-col gap-3">
        {RISK.map(([n, why, r]) => (
          <li key={n} className="text-[13.5px]">
            <div className="flex justify-between gap-2">
              <span className="font-medium">{n}</span>
              <span className="truncate text-ink-3">{why}</span>
            </div>
            <div className="mt-1.5 h-1 rounded-full bg-paper-2">
              <div className="h-full rounded-full bg-ink" style={{ width: `${r * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const BARS = [0.3, 0.45, 0.38, 0.6, 0.52, 0.74, 0.9];

export function RecoveryCard() {
  return (
    <div className={card}>
      <div className={head}>
        <span>Recovered this month</span>
      </div>
      <div className="mt-2 text-[34px] font-[580] leading-none tracking-[-0.04em] tabular-nums">€4,850</div>
      <div className="mt-1.5 text-[13px] text-ink-2">6 patients brought back</div>
      <div className="mt-auto flex h-12 items-end gap-1.5">
        {BARS.map((b, i) => (
          <span key={i} className={`flex-1 rounded-t-[4px] ${i === BARS.length - 1 ? "bg-blue" : "bg-blue/20"}`} style={{ height: `${b * 100}%` }} />
        ))}
      </div>
    </div>
  );
}

const FEED = [
  ["Answering Ahmed about whitening prices", "now", true],
  ["Moved Elif to Thursday 11:00", "2m", false],
  ["Sent aftercare to Omar", "8m", false],
  ["Escalated a swelling case to Dr. Kaya", "21m", false],
] as const;

export function ActivityCard() {
  return (
    <div className={card}>
      <div className={head}>
        <span className="flex items-center gap-2">
          <span className="lina-dot scale-75" aria-hidden="true" /> Live AI activity
        </span>
      </div>
      <ul className="mt-3 flex flex-col">
        {FEED.map(([what, when, live]) => (
          <li key={what} className="flex items-center justify-between gap-3 border-b border-line py-2 text-[14px] last:border-b-0">
            <span className={`truncate ${live ? "text-ink" : "text-ink-2"}`}>{what}</span>
            <span className={`flex-none tabular-nums text-[12.5px] ${live ? "text-blue" : "text-ink-3"}`}>{when}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const TOPICS = [
  ["Implant cost", 23],
  ["Whitening", 14],
  ["Braces for adults", 9],
  ["Opening hours", 7],
] as const;

export function IntelligenceCard() {
  return (
    <div className={card}>
      <div className={head}>
        <span>Clinic intelligence</span>
        <span className="text-ink-3">Most asked this week</span>
      </div>
      <ul className="mt-3 flex flex-col gap-2.5">
        {TOPICS.map(([t, n]) => (
          <li key={t} className="grid grid-cols-[120px_1fr_24px] items-center gap-3 text-[13.5px]">
            <span className="truncate">{t}</span>
            <span className="h-1.5 rounded-full bg-paper-2">
              <span className="block h-full rounded-full bg-ink" style={{ width: `${(n / 23) * 100}%` }} />
            </span>
            <span className="text-right tabular-nums text-ink-3">{n}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
