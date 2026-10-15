import { Fragment } from "react";

/*
  A headline whose words come into focus one after another on first paint (pure CSS: `.fw` in
  globals.css), so it needs no script and never moves. Whole words only: splitting letters would
  break Arabic joining. `from` continues the count across lines; a later line starts with a space so
  text-only readers (crawlers, AI search) don't run the last word of one line into the next.
*/
export function FocusWords({ text, from = 0 }: { text: string; from?: number }) {
  return text.split(" ").map((word, i) => (
    <Fragment key={i}>
      {(i > 0 || from > 0) && " "}
      <span className="fw" style={{ "--i": from + i } as React.CSSProperties}>
        {word}
      </span>
    </Fragment>
  ));
}

export const wordCount = (text: string) => text.split(" ").length;
