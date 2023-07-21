/**
 * return a file from blobUrl
 * @param {string} src blobUrl
 * @param {string} fileName fileName
 * @returns {File}
 */
export default async function createImageFileFromSrc(src = '', fileName = 'image') {
  const response = await fetch(src);
  // here image is url/location of image
  const blob = await response.blob();
  const file = new File([blob], `${fileName}.jpg`, { type: blob.type });
  return file;
}
