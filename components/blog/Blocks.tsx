import type { Block } from "@/content/articles/types";
import type { Dictionary } from "@/content/dictionaries/en";
import { DemoButton } from "@/components/Demo";
import { Inline } from "./Inline";

export function Blocks({ blocks, cta }: { blocks: Block[]; cta: Dictionary["blog"]["cta"] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case "p":
            return (
              <p key={i}>
                <Inline text={b.text} />
              </p>
            );
          case "h2":
            return (
              <h2 key={i} id={b.id}>
                {b.text}
              </h2>
            );
          case "h3":
            return <h3 key={i}>{b.text}</h3>;
          case "ul":
          case "ol": {
            const List = b.t;
            return (
              <List key={i}>
                {b.items.map((item, j) => (
                  <li key={j}>
                    <Inline text={item} />
                  </li>
                ))}
              </List>
            );
          }
          case "callout":
            return (
              <aside key={i} className="callout">
                {b.title && <p className="callout-title">{b.title}</p>}
                <p>
                  <Inline text={b.text} />
                </p>
              </aside>
            );
          case "quote":
            return (
              <figure key={i} className="pull">
                <blockquote>
                  <Inline text={b.text} />
                </blockquote>
                <figcaption>
                  <Inline text={b.cite} />
                </figcaption>
              </figure>
            );
          case "table":
            return (
              <div key={i} className="table-wrap" role="region" aria-label={b.caption ?? b.head.join(", ")} tabIndex={0}>
                <table>
                  {b.caption && <caption>{b.caption}</caption>}
                  <thead>
                    <tr>
                      {b.head.map((h) => (
                        <th key={h} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) =>
                          c === 0 ? (
                            <th key={c} scope="row">
                              <Inline text={cell} />
                            </th>
                          ) : (
                            <td key={c}>
                              <Inline text={cell} />
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "cta":
            return (
              <aside key={i} className="not-prose my-12 flex flex-col items-start gap-5 rounded-[24px] bg-ink p-7 text-paper sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <p className="flex items-center gap-2.5 text-[21px] font-[560] leading-tight tracking-[-0.02em]">
                    <span className="lina-dot" aria-hidden="true" />
                    {cta.title}
                  </p>
                  <p className="mt-2 max-w-[30rem] text-[15px] leading-[1.55] text-moon-2">{cta.sub}</p>
                </div>
                <DemoButton className="btn btn-moon flex-none">{cta.button}</DemoButton>
              </aside>
            );
        }
      })}
    </>
  );
}
