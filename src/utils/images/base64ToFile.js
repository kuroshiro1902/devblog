export default function base64ToFile(base64String, fileName = "image") {
  const arr = base64String.split(",");
  const mimeType = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName + ".jpeg", { type: mimeType });
}

//   // Sử dụng hàm base64ToFile
//   const base64String = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...';
//   const fileName = 'image.jpg';

//   const file = base64ToFile(base64String, fileName);
//   console.log(file); // Đối tượng File chứa ảnh
