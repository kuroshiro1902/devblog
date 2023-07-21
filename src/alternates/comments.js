const data = [
  {
    _id: '1',
    content: 'Hello',
    replyIds: ['2'],
  },
  {
    _id: '2',
    content: 'Hi',
    replyIds: ['3'],
  },
  {
    _id: '3',
    content: 'Nice to meet you',
    replyIds: ['4'],
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
    replyIds: ['7'],
  },
  {
    _id: '7',
    content: 'abc',
    replyIds: ['8'],
  },
  {
    _id: '8',
    content: 'abc',
    replyIds: ['9'],
  },
  {
    _id: '9',
    content: 'abc',
    replyIds: ['10'],
  },
  {
    _id: '10',
    content: 'abc',
    replyIds: ['11'],
  },
  {
    _id: '11',
    content: 'abc',
    replyIds: ['12'],
  },
  {
    _id: '12',
    content: 'abc',
    replyIds: ['13'],
  },
  {
    _id: '13',
    content: 'abc',
    replyIds: ['14'],
  },
  {
    _id: '14',
    content: 'abc',
    replyIds: ['15'],
  },
  {
    _id: '15',
    content: 'abc',
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
