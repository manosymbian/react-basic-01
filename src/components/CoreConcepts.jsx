import { CoreConcept } from "../components/CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../data.js";

export function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((coreConcept) => (
          <CoreConcept key={coreConcept.title} {...coreConcept} />
        ))}
        {/* <CoreConcept {...CORE_CONCEPTS[0]} />
    <CoreConcept {...CORE_CONCEPTS[1]} />
    <CoreConcept {...CORE_CONCEPTS[2]} />
    <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </section>
  );
}
