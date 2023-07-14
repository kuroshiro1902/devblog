/**
 * Trả về ảnh đã được giảm chất lượng
 * @param {string} base64
 * @param {string} filename
 * @returns {{File, string}} {file after reduced, url of file}
 */
import base64ToFile from './base64ToFile';
export default function reduceImageFromBase64(base64 = '', filename = 'image') {
  const img = document.createElement('img');
  img.setAttribute('src', base64);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const MAX_WIDTH = 800; // Kích thước tối đa
  const MAX_HEIGHT = 600;
  let width = img.width;
  let height = img.height;

  // Điều chỉnh kích thước ảnh nếu vượt quá giới hạn
  if (width > MAX_WIDTH) {
    height = (MAX_WIDTH / width) * height;
    width = MAX_WIDTH;
  }
  if (height > MAX_HEIGHT) {
    width = (MAX_HEIGHT / height) * width;
    height = MAX_HEIGHT;
  }
  // Vẽ ảnh trên canvas với kích thước mới
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);

  // Lưu lại dưới dạng base64 với chất lượng mới
  const reducedBase64 = canvas.toDataURL('image/jpeg', 1);
  //Tạo file ảnh từ base64
  const file = base64ToFile(reducedBase64, filename);
  // Tạo link cho ảnh đó
  const src = URL.createObjectURL(file);
  //Đổi đường dẫn ảnh thành link vừa tạo
  return { file, src };
}
