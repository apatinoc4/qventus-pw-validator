import PasswordValidator from "./components/PasswordValidator/PasswordValidator";
import RuleSetPanel from "./components/RulesetPanel/RuleSetPanel";
import RuleSetProvider from "./context/RuleSetProvider";
import PageThemeProvider from "./context/PageThemeProvider";
import styles from "./app.module.scss";

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
            <PasswordValidator />
          </section>
        </main>
      </RuleSetProvider>
    </PageThemeProvider>
  );
}

export default App;
