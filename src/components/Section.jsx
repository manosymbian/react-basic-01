import { Children } from "react";

export function Section({ title, children, ...attribs }) {
  return (
    <section {...attribs}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
