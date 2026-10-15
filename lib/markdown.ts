import type { Block } from "@/content/articles/types";
import { SITE_URL } from "./i18n";

// Article strings carry two inline marks, **bold** and [label](href), which are already Markdown.
// These helpers turn them into plain text (feeds, structured data) or self-contained Markdown (llms-full.txt).

/** Plain text: bold marks dropped, links reduced to their label. */
export const plainText = (text: string) => text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

/** Same-site links ("](/en/…") made absolute, so the text still works away from the site. */
export const absoluteLinks = (text: string) => text.replace(/\]\(\/(?![/\\])/g, `](${SITE_URL}/`);

const cell = (text: string) => absoluteLinks(text).replace(/\|/g, "\\|").replace(/\n/g, " ");

/** An article body as Markdown. The CTA block is page furniture, not content, so it is left out. */
export function blocksToMarkdown(blocks: Block[]): string {
  const out: string[] = [];
  for (const b of blocks) {
    switch (b.t) {
      case "h2":
        out.push(`## ${b.text}`);
        break;
      case "h3":
        out.push(`### ${b.text}`);
        break;
      case "p":
        out.push(absoluteLinks(b.text));
        break;
      case "ul":
        out.push(b.items.map((i) => `- ${absoluteLinks(i)}`).join("\n"));
        break;
      case "ol":
        out.push(b.items.map((i, n) => `${n + 1}. ${absoluteLinks(i)}`).join("\n"));
        break;
      case "callout":
        out.push([b.title ? `> **${b.title}**` : "", `> ${absoluteLinks(b.text)}`].filter(Boolean).join("\n>\n"));
        break;
      case "quote":
        out.push(`> ${absoluteLinks(b.text)}\n>\n> — ${absoluteLinks(b.cite)}`);
        break;
      case "table": {
        const rows = [`| ${b.head.map(cell).join(" | ")} |`, `| ${b.head.map(() => "---").join(" | ")} |`, ...b.rows.map((r) => `| ${r.map(cell).join(" | ")} |`)];
        out.push(b.caption ? `${rows.join("\n")}\n\n${absoluteLinks(b.caption)}` : rows.join("\n"));
        break;
      }
      case "cta":
        break;
    }
  }
  return out.join("\n\n");
}
