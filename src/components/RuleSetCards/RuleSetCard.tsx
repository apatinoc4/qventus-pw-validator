import { useContext } from "react";
import { Button } from "@mui/material";
import { Rule } from "../../types/types";
import { RuleSetContext } from "../../context/RuleSetProvider";
import styles from "./ruleSetCard.module.scss";

interface RuleSetCardProps {
  index: number;
  ruleSet: Rule[];
  ruleSetOptions: Rule[][];
}

const RuleSetCard = ({ index, ruleSet, ruleSetOptions }: RuleSetCardProps) => {
  const { setRuleSet } = useContext(RuleSetContext);

  return (
    <div className={styles.container} key={index}>
      <h3>RULESET {index + 1}</h3>
      <div className={styles.rules}>
        <ul>
          {ruleSet.map(({ label, id }) => {
            return <li key={`${id}-${index}`}>{label}</li>;
          })}
        </ul>
      </div>
      <Button
        disableElevation
        onClick={() => setRuleSet(ruleSetOptions[index])}
        variant="contained"
      >
        Select
      </Button>
    </div>
  );
};

export default RuleSetCard;
