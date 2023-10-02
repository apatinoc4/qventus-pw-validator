import { RULESET_1, RULESET_2 } from "../../constants/rules";
import styles from "./rulesetPanel.module.scss";
import CustomRuleSetCard from "../RuleSetCards/CustomRuleSetCard";
import RuleSetCard from "../RuleSetCards/RuleSetCard";

const RULESETS = [RULESET_1, RULESET_2];

const RuleSetPanel = () => {
  return (
    <div className={styles.container}>
      <h2>
        Select or create a <span>Ruleset</span>
      </h2>
      <div className={styles.presets}>
        {RULESETS.map((ruleSet, idx) => {
          return (
            <RuleSetCard
              index={idx}
              ruleSet={ruleSet}
              ruleSetOptions={RULESETS}
            />
          );
        })}
      </div>
      <CustomRuleSetCard />
    </div>
  );
};

export default RuleSetPanel;
