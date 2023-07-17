/**
 *
 * @param {object[]} arr
 * @param {string} keyword
 * @param {string} prop
 * @description returns objects which contains the keyword
 * @returns {object[]}
 */
export default function filterObjectsByKeyword(arr = [], keyword = '', prop = 'name') {
  return arr.filter((obj) => {
    const propertyValue = obj[prop];
    if (propertyValue.includes(keyword)) {
      return true;
    }
    return false;
  });
}

// const data = [
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Smith' },
//     { id: 3, name: 'Alice Johnson' },
//   ];

//   const filteredData = filterObjectsByKeyword(data, 'name', 'Jo');

//   console.log(filteredData);
//   // Output: [
//   //   { id: 1, name: 'John Doe' },
//   //   { id: 3, name: 'Alice Johnson' }
//   // ]
