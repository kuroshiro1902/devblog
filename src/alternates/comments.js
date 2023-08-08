const data = [
  {
    _id: '1',
    content: 'Hello',
    replyIds: ['2', '4'],
  },
  {
    _id: '2',
    content: 'Hi',
    replyIds: ['3'],
  },
  {
    _id: '3',
    content: 'Nice to meet you',
    replyIds: [],
  },
  {
    _id: '4',
    content: 'Nice to meet you too',
    replyIds: ['5'],
  },
  {
    _id: '5',
    content: 'hello',
    replyIds: ['6'],
  },
  {
    _id: '6',
    content: 'hello',
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
