import createImageFilesFromSrc from '../../utils/images/createImageFileFromSrc';
import sendFileToUrl from '../../utils/sendFile/sendFileToUrl';
function createImageFilesFromSrcs(srcs = ['']) {
  return Promise.all(srcs.map((url, index) => createImageFilesFromSrc(url, `contentImage${index}`)));
}
function sendAllFilesToUrl(files = [new File()], url = '') {
  //tạo các promise gửi mỗi ảnh đến server
  const uploadPromises = sendFileToUrl(files, url);
  //và xử lý đồng thời
  return Promise.all(uploadPromises);
}
function hasContent(text = '') {
  if (typeof text !== 'string') {
    return false;
  }
  const trimmedText = text.replace(/<[^>]+>/g, '').trim();
  return trimmedText.length > 100;
}
function dataValidation(data) {
  for (let key in data) {
    if (!data[key]) {
      return { valid: false, message: `${key.toUpperCase()} không được để trống hoặc không hợp lệ.` };
    } else if (key === 'content' && !hasContent(data[key])) {
      return { valid: false, message: `Nội dung không được để trống hoặc quá ngắn.` };
    }
  }
  return { valid: true, message: 'Valid data.' };
}
export { createImageFilesFromSrcs, sendAllFilesToUrl, dataValidation };
