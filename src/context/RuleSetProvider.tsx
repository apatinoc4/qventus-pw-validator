import { createContext, FC, ReactNode, useState } from "react";
import { RULESET_1 } from "../constants/rules";
import { Rule } from "../types/types";

type ProviderProps = {
  children: ReactNode;
};

interface RuleSetContextInterface {
  ruleSet: Rule[];
  setRuleSet: (ruleSet: Rule[]) => void;
}

const DEFAULT_CONTEXT_VALUES = {
  ruleSet: RULESET_1,
  setRuleSet: () => {
    //
  },
};

export const RuleSetContext = createContext<RuleSetContextInterface>(
  DEFAULT_CONTEXT_VALUES
);

const RuleSetProvider: FC<ProviderProps> = ({ children }) => {
  const [ruleSet, setRuleSet] = useState<Rule[]>(RULESET_1);

  return (
    <RuleSetContext.Provider
      value={{
        ruleSet,
        setRuleSet,
      }}
    >
      {children}
    </RuleSetContext.Provider>
  );
};

export default RuleSetProvider;
