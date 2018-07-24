import { utils } from 'stylelint';
import isStandardSyntaxRule from 'stylelint/lib/utils/isStandardSyntaxRule';

export const ruleName = 'IE11-Grid/repeat';

export const messages = utils.ruleMessages(ruleName, {
  expected: selector => `IE11 does not support this use of repeat in ${selector}.`,
});


export default function(actual) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, { actual });

    if (!validOptions || !actual) {
      return;
    }

    root.walkRules(rule => {
      let selector = null;
      if (!isStandardSyntaxRule(rule)) {
        return;
      }
      selector = rule.selector;

      if (!selector) {
        return;
      }

      const isRejected =
        rule.nodes.some(o => {
          return (
            o.type === 'decl' &&
            (o.prop.toLowerCase() === 'grid-template-columns' || o.prop.toLowerCase() === 'grid-template-rows') &&
            o.value.toLowerCase().includes('repeat')
          );
        });

      if (isRejected) {
        utils.report({
          index: rule.lastEach,
          message: messages.expected(selector),
          node: rule,
          ruleName,
          result,
        });
      }
    });
  };
}
