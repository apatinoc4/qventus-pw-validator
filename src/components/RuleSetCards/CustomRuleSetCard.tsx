import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { Rule } from "../../types/types";
import { RuleSetContext } from "../../context/RuleSetProvider";
import { RULES } from "../../constants/rules";
import styles from "./customRuleSetCard.module.scss";

const CustomRuleSetCard = () => {
  const [customRuleSet, setCustomRuleSet] = useState<Rule[]>([]);
  const { setRuleSet } = useContext(RuleSetContext);

  const handleToggleRule = (id: string) => {
    const ruleToToggle = RULES.find((rule) => rule.id === id);

    if (!ruleToToggle) return;

    const isRuleInCustomSet = customRuleSet.some((rule) => rule.id === id);

    if (isRuleInCustomSet) {
      setCustomRuleSet(customRuleSet.filter((rule) => rule.id !== id));
    } else {
      setCustomRuleSet([...customRuleSet, ruleToToggle]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.rules}>
        <h3>CUSTOM RULESET</h3>
        {RULES.map(({ label, id }) => {
          return (
            <div className={styles.rule} key={id}>
              <Switch
                data-testid={`rule-toggle-${id}`}
                onChange={(e) => handleToggleRule(e.target.value)}
                value={id}
              />
              <p>{label}</p>
            </div>
          );
        })}
        <div className={styles.createBttn}>
          <Button
            className="ruleset-btton"
            disableElevation
            onClick={() => setRuleSet(customRuleSet)}
            variant="contained"
          >
            Create Ruleset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomRuleSetCard;
