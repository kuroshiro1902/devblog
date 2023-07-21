const data = [
  {
    _id: '64b8df052320b7312a9ffb75',
    content: 'Hello',
    replyIds: ['64b8df2c2320b7312a9ffb76', '64b8df912320b7312a9ffb81', '64b8df912320b7312a9ffb79'],
  },
  {
    _id: '64b8df2c2320b7312a9ffb76',
    content: 'Hi',
    replyIds: ['64b8df702320b7312a9ffb77'],
  },
  {
    _id: '64b8df702320b7312a9ffb77',
    content: 'Nice to meet you',
    replyIds: ['64b8df822320b7312a9ffb78'],
  },
  {
    _id: '64b8df822320b7312a9ffb78',
    content: 'Nice to meet you too',
    replyIds: [],
  },
  {
    _id: '64b8df912320b7312a9ffb81',
    content: 'hello',
    replyIds: [],
  },
  {
    _id: '64b8df912320b7312a9ffb79',
    content: 'hello',
    replyIds: ['64b8dfa02320b7312a9ffb7a'],
  },
  {
    _id: '64b8dfa02320b7312a9ffb7a',
    content: 'lo cc',
    replyIds: [],
  },
  {
    _id: '64b8dfa02320b7312a9ffb7x',
    content: 'lo cc',
    replyIds: [],
  },
  {
    _id: '64b8dfa02320b7312a9ffbs',
    content: 'lo cc',
    replyIds: [],
  },
  {
    _id: '64b8dfa02320b7312a6ffb76',
    content: 'lo cc',
    replyIds: [],
  },
];
/**
 * find comment data by _id
 * @param {string} _id
 * @returns {{_id: string, content: string, replyIds: string[]}}
 */
const findCommentById = (_id) => {
  let ans = undefined;
  data.forEach((comment) => {
    if (comment._id === _id) {
      ans = comment;
    }
  });
  return ans;
};
export { findCommentById, data };
