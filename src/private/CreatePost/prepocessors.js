import createImageFilesFromSrc from '../../utils/images/createImageFileFromSrc';
function createImageFilesFromSrcs(srcs = ['']) {
  return Promise.all(srcs.map((url, index) => createImageFilesFromSrc(url, `contentImage${index}`)));
}

export { createImageFilesFromSrcs };
