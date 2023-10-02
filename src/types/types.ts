export enum RuleLabels {
  SpecialCharacters = "Has one or more of these special characters: !@#$%^&*",
  ContainsNumbers = "Has a number / digit",
  ContainsUppercase = "Has an uppercase letter",
  NoConsecutiveLetters = "Has NO consecutive letters",
  AtLeastTenCharacters = "Has at least 10 characters",
  AtLeastThreeNumbers = "Has at least 3 numbers",
  AtLeastThreeLetters = "Has at least 3 letters",
  NoRestrictedCharacters = "Does not contain any of these characters: _-|{}",
}

export type Rule = {
  id: string;
  label: RuleLabels;
  validator: (password: string) => boolean;
};
