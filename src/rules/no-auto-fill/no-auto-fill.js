import { utils } from 'stylelint';
import isStandardSyntaxRule from 'stylelint/lib/utils/isStandardSyntaxRule';

export const ruleName = 'IE11-grid/no-auto-fill';

export const messages = utils.ruleMessages(ruleName, {
  expected: selector => `autoFill is not supported by IE11 in ${selector}`,
});
