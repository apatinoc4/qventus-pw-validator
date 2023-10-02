# Totally Awesome Password Validator (T.A.P.V)

Hey there! Welcome to the Totally Awesome Password Validator, or T.A.P.V for short. If you're here, you're probably curious about password validation in a totally awesome way!

## Getting Started

1.  **Clone this Repo**: Fire up your terminal and clone this repo to get started.

        bashCopy code

        `git clone https://github.com/apatinoc4/qventus-pw-validator.git

    cd totally-awesome-password-validator`

2.  **Run the App**: Fire up the development server by running:

    bashCopy code

    `npm run dev`

    Now you're good to go!

## Customizing Rules and RuleSets

Feel like being a password rule master? You can easily tweak the rules and rule sets to your liking:

1.  **Rules**: You can find the rules in `constants/rules.ts`. Modify them to create new rules or customize existing ones.
2.  **RuleSets**: Rule sets are just a bunch of rules bundled together. You can create new rule sets by modifying the `RULESET_1` and `RULESET_2` arrays in `constants/rules.ts`.

## Using the Password Validator

Now, let's talk about the real star of the show, the Password Validator component. You can use it in two ways:

- **Inside RuleSet Provider**: If you want the full ruleset changing experience, use the `PasswordValidator` component inside the `RuleSetProvider`.
- **Independently**: If you want to have your own local rule set, copy the contents of the `Password Validator` folder, import the component and pass the `localRuleSet` prop it.

## About the Project

This project was crafted with love by Andres Patino as part of an interviewing process for Qventus. Here are some cool tech concepts demonstrated:

- **React & Typescript**: Power duo for building dynamic and typed web apps.
- **Context API**: For global state management, making your life a lot easier.
- **SCSS & CSS Modules**: Styling in a structured and modular way.

That's it! Have fun tinkering with the Totally Awesome Password Validator. 🚀
