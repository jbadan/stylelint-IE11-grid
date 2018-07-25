import { utils } from 'stylelint';
import isStandardSyntaxRule from 'stylelint/lib/utils/isStandardSyntaxRule';

export const ruleName = 'IE11-Grid/repeat';

export const messages = utils.ruleMessages(ruleName, {
  expected: selector => `Unexpected use of repeat in ${selector}. IE11 does not support repeat().`,
});


export default function(actual, _, context) {
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
            //need to check if already includes -ms-grid-columns
          );
        });
      //if --fix is enabled
      if(isRejected && context.fix) {
        //POSTCSS API
          rule.parent.nodes.forEach(node => {
            //find value of repeat
            const reg = /(repeat\(([^)]+)\)|\s)/gm
            let value = node.nodes[0].value.split(reg);
            console.log(value)
            // const reg = /(?<=repeat)(\(([^)]+)\))/gm;
            // let value = node.nodes[0].value.match(reg);
            // let repeat;
            // let repeatArr;
            // if (node.nodes[0].value.includes('minmax')) {
            //     //split by some other means - otherwise minmax(25ch, 1fr) would be split at the wrong place
            //     const reg2 = /(?<=minmax)(\(([^)]+)\))/gm;
            //     let value2 = node.nodes[0].value.split(reg2);
            //     console.log(value2)
            // } else {
            //     repeat = value[0].replace(/[\,)(]/g, '');
            //     repeatArr = repeat.split(' ');
            // }
            //   //<auto-repeat> values - do not transform because IE11 does not support auto-repeat values
            //   if (repeatArr[0] === ('auto-fit') || repeatArr[0] === ('auto-fill')) {
            //     return node
            //   } else {
            //   //<track-repeat> values; <fixed-repeat> values
            //       //repeat(4, 250px)
            //       // repeat(4, [col-start] 250px [col-end])
            //       // repeat(4, [col-start] 60% [col-end])
            //       // repeat(4, [col-start] minmax(100px, 1fr) [col-end])
            //       // repeat(4, [col-start] fit-content(200px) [col-end])
            //       // repeat(4, 10px [col-start] 30% [col-middle] 400px [col-end])
            //       let numRepeats = repeatArr[0];
            //       let newArr = repeatArr.slice(1);
            //       newArr.join(' ');
            //      node.append({prop: '-ms-grid-columns', value: `(${newArr.join(' ')})[${numRepeats}]`});
          })

          }
      //returns rejected report
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
