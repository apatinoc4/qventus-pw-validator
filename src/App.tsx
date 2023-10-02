import PasswordValidator from "./components/PasswordValidator/PasswordValidator";
import RuleSetPanel from "./components/RulesetPanel/RuleSetPanel";
import RuleSetProvider from "./context/RuleSetProvider";
import PageThemeProvider from "./context/PageThemeProvider";
import styles from "./app.module.scss";
import { RULESET_3 } from "./constants/rules";

function App() {
  return (
    <PageThemeProvider>
      <RuleSetProvider>
        <header>T.A.P.V</header>
        <main className={styles.container}>
          <h1>
            Welcome to a <span className={styles.slogan}>totally awesome</span>{" "}
            password validator
          </h1>
          <section>
            <RuleSetPanel />
          </section>
          <section>
            <h2>Consuming RuleSets from a Context</h2>
            <PasswordValidator />
            <h2>Passing a RuleSet as a prop</h2>
            <PasswordValidator localRuleSet={RULESET_3} />
          </section>
        </main>
      </RuleSetProvider>
    </PageThemeProvider>
  );
}

export default App;
