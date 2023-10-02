import { useContext } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import clsx from "clsx";
import { RuleSetContext } from "../../../context/RuleSetProvider";
import styles from "./ruleCheck.module.scss";
import { Rule } from "../../../types/types";

interface RuleCheckInterface {
  password: string;
  localRuleSet?: Rule[];
}

const RuleCheck = ({ password, localRuleSet }: RuleCheckInterface) => {
  const { ruleSet } = useContext(RuleSetContext);

  const ruleSetToUse: Rule[] = localRuleSet || ruleSet;

  return (
    <div className={styles.container}>
      {ruleSetToUse.map(({ label, validator }, idx) => {
        return (
          <div
            className={styles.ruleLabel}
            data-testid="rule-to-check"
            key={idx}
          >
            {validator(password) ? (
              <CheckCircleIcon style={{ fill: "#e7005e" }} />
            ) : (
              <CancelIcon />
            )}
            <p
              className={clsx({
                [styles.correct]: validator(password),
              })}
            >
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default RuleCheck;
