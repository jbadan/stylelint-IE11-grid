import { createPlugin } from 'stylelint';
import rules from './rules';

const rulesPlugins = Object.keys(rules).map(ruleName => {
  return createPlugin(`IE11-grid/${ruleName}`, rules[ruleName]);
});

export default rulesPlugins;
