"use client";

import { track } from "@vercel/analytics";
import { LINA_DEMO_WHATSAPP } from "@/lib/config";
import { useI18n } from "../I18n";
import { useLina } from "../PageDict";

/** Opens a WhatsApp chat with the demo Lina, pre-filled with a patient's first message. */
export function TryLinaLink({ message, source, className = "btn btn-ink", children }: { message: string; source: string; className?: string; children: React.ReactNode }) {
  const { locale } = useI18n();
  const href = `https://wa.me/${LINA_DEMO_WHATSAPP}?text=${encodeURIComponent(message)}`;
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer" onClick={() => track("try_lina_whatsapp", { locale, source })}>
      <WhatsAppGlyph />
      {children}
    </a>
  );
}

/** The Lina page's button: the message is the one from the hero. */
export function TryLinaButton({ className = "btn btn-ink", children }: { className?: string; children?: React.ReactNode }) {
  const t = useLina();
  return (
    <TryLinaLink message={t.hero.bubble} source="lina" className={className}>
      {children ?? t.hero.primary}
    </TryLinaLink>
  );
}

function WhatsAppGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7a2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z"
      />
    </svg>
  );
}
