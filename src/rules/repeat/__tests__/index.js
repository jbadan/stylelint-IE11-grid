import rule, { messages, ruleName } from '../index';

// testRule(rule, {
//   ruleName,
//   config: [true],
//
//   accept: [
//     {
//       description: 'empty',
//       code: '.foo { }',
//     },
//     {
//       description: 'grid-template-columns: 2fr 1fr 1fr;',
//       code: '.foo { grid-template-columns: 2fr 1fr 1fr; }',
//     },
//     {
//       description: 'grid-template-columns: 500px 1fr 2fr;',
//       code: '.foo { grid-template-columns: 500px 1fr 2fr; }',
//     },
//     {
//       description: 'grid-template-rows: 2fr 1fr 1fr;',
//       code: '.foo { grid-template-rows: 2fr 1fr 1fr; }',
//     },
//     {
//       description: 'grid-template-rows: 500px 1fr 2fr;',
//       code: '.foo { grid-template-rows: 500px 1fr 2fr; }',
//     },
//     {
//       description: 'grid-template-columns: subgrid;',
//       code: '.foo { grid-template-columns: subgrid; }',
//     },
//   ],
//
//   reject: [
//     {
//       description: 'grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );',
//       code: '.foo { grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) ); }',
//       message: messages.expected('.foo'),
//       line: 1,
//       column: 4,
//     },
//     {
//       description: 'grid-template-columns: REPEAT( auto-fit, MINMAX(250PX, 1FR) );',
//       code: '.bar { GRID-TEMPLATE-COLUMNS: REPEAT( auto-fit, MINMAX(250PX, 1FR) ); }',
//       message: messages.expected('.bar'),
//       line: 1,
//       column: 4,
//     },
//     {
//       description: 'grid-template-columns: repeat(auto-fit , 100px);',
//       code: '.bar { grid-template-columns: repeat(auto-fit , 100px); }',
//       message: messages.expected('.bar'),
//       line: 1,
//       column: 4,
//     },
//     {
//       description: 'grid-template-columns: repeat(3, 1fr);',
//       code: '.bar { grid-template-columns: repeat(3, 1fr); }',
//       message: messages.expected('.bar'),
//       line: 1,
//       column: 4,
//     },
//     {
//       description: 'grid-template-rows: repeat( auto-fit, minmax(250px, 1fr) );',
//       code: '.foo { grid-template-rows: repeat( auto-fit, minmax(250px, 1fr) ); }',
//       message: messages.expected('.foo'),
//       line: 1,
//       column: 4,
//     },
//     {
//       description: 'grid-template-rows: REPEAT( auto-fit, MINMAX(250PX, 1FR) );',
//       code: '.bar { GRID-TEMPLATE-ROWS: REPEAT( auto-fit, MINMAX(250PX, 1FR) ); }',
//       message: messages.expected('.bar'),
//       line: 1,
//       column: 4,
//     },
//     {
//       description: 'grid-template-rows: repeat(auto-fit , 100px);',
//       code: '.bar { grid-template-rows: repeat(auto-fit , 100px); }',
//       message: messages.expected('.bar'),
//       line: 1,
//       column: 4,
//     },
//     {
//       description: 'grid-template-rows: repeat(3, 1fr);',
//       code: '.bar { grid-template-rows: repeat(3, 1fr); }',
//       message: messages.expected('.bar'),
//       line: 1,
//       column: 4,
//     }
//   ],
// });

testRule(rule, {
  ruleName,
  config: [true],
  fix: true,
  reject: [
    // {
    //   description: 'grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );',
    //   code: '.foo { grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) ); }',
    //   message: messages.expected('.foo'),
    //   line: 1,
    //   column: 4,
    // },
    // {
    //   description: 'grid-template-columns: REPEAT( auto-fit, MINMAX(250PX, 1FR) );',
    //   code: '.bar { GRID-TEMPLATE-COLUMNS: REPEAT( auto-fit, MINMAX(250PX, 1FR) ); }',
    //   message: messages.expected('.bar'),
    //   line: 1,
    //   column: 4,
    // },
    // {
    //   description: 'grid-template-columns: repeat(auto-fit , 100px);',
    //   code: '.bar { grid-template-columns: repeat(auto-fit , 100px); }',
    //   message: messages.expected('.bar'),
    //   line: 1,
    //   column: 4,
    // },
    {
      description: 'grid-template-columns: repeat(3, 1fr);',
      code: '.bar { grid-template-columns: 1fr repeat 3, 20px 1fr; }',
      fixed: '.bar { -ms-grid-columns: 1fr 20px 1fr [3]; grid-template-columns: 1fr repeat 3, 20px 1fr; }',
      message: messages.expected('.bar'),
      line: 1,
      column: 4,
    },
    // {
    //   description: 'grid-template-rows: repeat( auto-fit, minmax(250px, 1fr) );',
    //   code: '.foo { grid-template-rows: repeat( auto-fit, minmax(250px, 1fr) ); }',
    //   message: messages.expected('.foo'),
    //   line: 1,
    //   column: 4,
    // },
    // {
    //   description: 'grid-template-rows: REPEAT( auto-fit, MINMAX(250PX, 1FR) );',
    //   code: '.bar { GRID-TEMPLATE-ROWS: REPEAT( auto-fit, MINMAX(250PX, 1FR) ); }',
    //   message: messages.expected('.bar'),
    //   line: 1,
    //   column: 4,
    // },
    // {
    //   description: 'grid-template-rows: repeat(auto-fit , 100px);',
    //   code: '.bar { grid-template-rows: repeat(auto-fit , 100px); }',
    //   message: messages.expected('.bar'),
    //   line: 1,
    //   column: 4,
    // },
    // {
    //   description: 'grid-template-rows: repeat(3, 1fr);',
    //   code: '.bar { grid-template-rows: repeat(3, 1fr); }',
    //   message: messages.expected('.bar'),
    //   line: 1,
    //   column: 4,
    // }
  ],
});
