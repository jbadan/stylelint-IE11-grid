import rule, { messages, ruleName } from '../index';

testRule(rule, {
  ruleName,
  config: [true],

  accept: [
    {
      description: 'empty',
      code: '.foo { }',
    },
    {
      description: 'grid-template-columns: repeat(10, 100px);',
      code: '.foo { grid-template-columns: repeat(10, 100px); }',
    },
    {
      description: 'grid-template-columns: repeat(10, 1fr);',
      code: '.foo { grid-template-columns: repeat(10, 1fr); }',
    },
    {
      description: 'grid-template-columns: 100px 1fr;',
      code: '.foo { grid-template-columns: 100px 1fr; }',
    },
    {
      description: 'grid-template-columns: minmax(100px, 1fr);',
      code: '.foo { grid-template-columns: minmax(100px, 1fr); }',
    },
    {
      description: 'grid-template-columns: fit-content(40%);',
      code: '.foo { grid-template-columns: fit-content(40%); }',
    },
    {
      description: 'grid-template-rows: repeat(10, 100px);',
      code: '.foo { grid-template-rows: repeat(10, 100px); }',
    },
    {
      description: 'grid-template-rows: repeat(10, 1fr);',
      code: '.foo { grid-template-rows: repeat(10, 1fr); }',
    },
    {
      description: 'grid-template-rows: 100px 1fr;',
      code: '.foo { grid-template-rows: 100px 1fr; }',
    },
    {
      description: 'grid-template-rows: minmax(100px, 1fr);',
      code: '.foo { grid-template-rows: minmax(100px, 1fr); }',
    },
    {
      description: 'grid-template-rows: fit-content(40%);',
      code: '.foo { grid-template-rows: fit-content(40%); }',
    }
  ],

  reject: [
    {
      description: 'grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );',
      code: '.foo { grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) ); }',
      message: messages.expected('.foo'),
      line: 1,
      column: 4,
    },
    {
      description: 'grid-template-columns: REPEAT( auto-fit, MINMAX(250PX, 1FR) );',
      code: '.bar { GRID-TEMPLATE-COLUMNS: REPEAT( auto-fit, MINMAX(250PX, 1FR) ); }',
      message: messages.expected('.bar'),
      line: 1,
      column: 4,
    },
    {
      description: 'grid-template-columns: repeat(auto-fit , 100px);',
      code: '.bar { grid-template-columns: repeat(auto-fit , 100px); }',
      message: messages.expected('.bar'),
      line: 1,
      column: 4,
    },
    {
      description: 'grid-template-rows: repeat( auto-fit, minmax(250px, 1fr) );',
      code: '.foo { grid-template-rows: repeat( auto-fit, minmax(250px, 1fr) ); }',
      message: messages.expected('.foo'),
      line: 1,
      column: 4,
    },
    {
      description: 'grid-template-rows: REPEAT( AUTO-fit, MINMAX(250PX, 1FR) );',
      code: '.bar { GRID-TEMPLATE-ROWS: REPEAT( AUTO-FIT, MINMAX(250PX, 1FR) ); }',
      message: messages.expected('.bar'),
      line: 1,
      column: 4,
    },
    {
      description: 'grid-template-rows: repeat(auto-fit , 100px);',
      code: '.bar { grid-template-rows: repeat(auto-fit , 100px); }',
      message: messages.expected('.bar'),
      line: 1,
      column: 4,
    }
  ],
});
