import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import RuleCheck from "../RuleCheck/RuleCheck";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styles from "./passwordValidator.module.scss";

const PasswordValidator = () => {
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
      <RuleCheck password={inputPassword} />
    </div>
  );
};

export default PasswordValidator;
