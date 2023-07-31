const months = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

function getTime(time = new Date()) {
  // Lấy thông tin về ngày, tháng, năm, giờ, phút và giây
  const year = time.getFullYear();
  const month = String(time.getMonth() + 1);
  const day = String(time.getDate()).padStart(2, '0');
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  // Định dạng lại thành chuỗi theo định dạng "yyyy/mm/dd hh:mm:ss"
  return `${months[month]} ${day} ${year}, ${hours}:${minutes}:${seconds}`;
}

export default getTime;
