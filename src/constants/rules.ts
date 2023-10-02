import { RuleLabels } from "../types/types";

export const RULES = [
  {
    id: "rl-0",
    label: RuleLabels.SpecialCharacters,
    validator: (password: string) => /[!@#$%^&*]/.test(password),
  },
  {
    id: "rl-1",
    label: RuleLabels.ContainsNumbers,
    validator: (password: string) => /\d/.test(password),
  },
  {
    id: "rl-2",
    label: RuleLabels.ContainsUppercase,
    validator: (password: string) => /[A-Z]/.test(password),
  },
  {
    id: "rl-3",
    label: RuleLabels.NoConsecutiveLetters,
    validator: (password: string) =>
      password.length > 0 && !/(.)\1+/.test(password),
  },
  {
    id: "rl-4",
    label: RuleLabels.AtLeastTenCharacters,
    validator: (password: string) => password.length > 10,
  },
  {
    id: "rl-5",
    label: RuleLabels.AtLeastThreeNumbers,
    validator: (password: string) => (password.match(/\d/g) || []).length >= 3,
  },
  {
    id: "rl-6",
    label: RuleLabels.AtLeastThreeLetters,
    validator: (password: string) =>
      (password.match(/[A-Za-z]/g) || []).length >= 3,
  },
  {
    id: "rl-7",
    label: RuleLabels.NoRestrictedCharacters,
    validator: (password: string) => !/[_\-|{}]/.test(password),
  },
];

export const RULESET_1 = RULES.slice(0, 4);
export const RULESET_2 = RULES.slice(4, 8);
