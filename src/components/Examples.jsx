import { useState } from "react";

import TabButton from "./TabButton";
import { EXAMPLES } from "../data/state-data.js";
import { Section } from "../components/Section.jsx";
import { Tabs } from "./Tabs.jsx";

export function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  const tabContent = !selectedTopic ? (
    <p>Please select a topic</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );

  function handleClick(selectedTab) {
    setSelectedTopic(selectedTab);
    console.log(selectedTopic);
  }
  return (
    <Section id="examples">
      <h2>Examples</h2>
      <Tabs
        tabButtons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
