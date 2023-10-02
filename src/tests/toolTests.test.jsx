import { describe, test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import React from "react";
import App from "../App";
import RuleSetProvider from "../context/RuleSetProvider";

describe("RuleSets", () => {
  test("creating a custom rule set and displaying it", () => {
    const { getByTestId, getByText } = render(
      <RuleSetProvider>
        <App />
      </RuleSetProvider>
    );
    const createButton = getByText("Create Ruleset");
    const ruleToggle = getByTestId("rule-toggle-rl-0");

    fireEvent.click(ruleToggle);
    fireEvent.click(createButton);

    const ruleToCheck = getByTestId("ruleToCheck");

    expect(ruleToCheck).toHaveTextContent(
      "Has one or more of these special characters: !@#$%^&*"
    );
  });
});
