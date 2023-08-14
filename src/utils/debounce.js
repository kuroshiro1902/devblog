/**
 * Hàm debounce sẽ hoãn việc gọi hàm callback cho đến khi không nhận kí tự mới trong khoảng thời gian ms
 * @param {()=>any} callback
 * @param {number} delay
 * @returns {()=>void}
 */
//
export default function debounce(callback = () => {}, delay = 1000) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
