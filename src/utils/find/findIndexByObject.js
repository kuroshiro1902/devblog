/**
Trả về index của phần tử đầu tiên ở trong mảng arr có các thuộc tính của object
 */
export default function findIndexByObject(arr = [], object = {}) {
    for (let i = 0; i < arr.length; i++) {
        let match = true;

        for (const key in object) {
            if (arr[i][key] !== object[key]) {
                match = false;
                break;
            }
        }

        if (match) {
            return i; // Trả về chỉ số của phần tử thỏa mãn
        }
    }

    return -1; // Trả về -1 nếu không tìm thấy phần tử thỏa mãn
}

//   const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Alice' },
//   ];

//   const index = findIndexByObject(users, { id: 2, name: 'Alice' });
//   console.log(index); // Kết quả: -1 (không tìm thấy phần tử)

//   const index2 = findIndexByObject(users, { id: 3, name: 'Alice' });
//   console.log(index2); // Kết quả: 2
