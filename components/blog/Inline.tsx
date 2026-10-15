import Link from "next/link";
import { Fragment } from "react";

// Article strings carry two inline marks: **bold** and [label](href).
const TOKEN = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

export function Inline({ text }: { text: string }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index > last) out.push(<Fragment key={key++}>{text.slice(last, m.index)}</Fragment>);
    if (m[1]) {
      out.push(<strong key={key++}>{m[1]}</strong>);
    } else if (/^\/(?![/\\])/.test(m[3])) {
      // Same-site path ("//host" and "/\host" are other sites, so they don't count).
      out.push(
        <Link key={key++} href={m[3]}>
          {m[2]}
        </Link>,
      );
    } else if (/^(https:\/\/|mailto:)/i.test(m[3])) {
      out.push(
        <a key={key++} href={m[3]} target="_blank" rel="noopener noreferrer">
          {m[2]}
        </a>,
      );
    } else {
      // Any other scheme (data:, javascript:, http:) renders as plain text.
      out.push(<Fragment key={key++}>{m[2]}</Fragment>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(<Fragment key={key++}>{text.slice(last)}</Fragment>);
  return <>{out}</>;
}

/** Plain text for metadata and structured data. */
export const plain = (text: string) => text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
