import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import RuleCheck from "./RuleCheck/RuleCheck";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styles from "./passwordValidator.module.scss";
import { Rule } from "../../types/types";

//Note: doing this because of the assignment requirements, you can also consume the context in <RuleCheck /> to get and validate the ruleset directly

interface PasswordValidatorProps {
  localRuleSet?: Rule[];
}

const PasswordValidator = ({ localRuleSet }: PasswordValidatorProps) => {
  const [inputPassword, setInputPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.passwordInput}>
        <h2>
          Input a password you wish to <span>validate</span>
        </h2>
        <div className={styles.inputWrapper}>
          <OutlinedInput
            data-testid="pw-input"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
          />
        </div>
      </div>
      <RuleCheck password={inputPassword} localRuleSet={localRuleSet} />
    </div>
  );
};

export default PasswordValidator;
