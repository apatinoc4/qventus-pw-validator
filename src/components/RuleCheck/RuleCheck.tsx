import { useContext } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import clsx from "clsx";
import { RuleSetContext } from "../../context/RuleSetProvider";
import styles from "./ruleCheck.module.scss";

interface RuleCheckInterface {
  password: string;
}

const RuleCheck = ({ password }: RuleCheckInterface) => {
  const { ruleSet } = useContext(RuleSetContext);

  return (
    <div className={styles.container}>
      {ruleSet.map(({ label, validator }, idx) => {
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
