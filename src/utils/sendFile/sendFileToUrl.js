import axios from 'axios';
/**
 * Returns the promise of uploaded files
 * @param {File[]} files
 * @param {string} url
 * @return {Promise<{index: Number, imageUrl: string}>[]}
 */
export default function sendFileToUrl(files = [new File()], url = '') {
  return files.map(async (file, index) => {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const response = await axios.post(url, formData);
      return { index, imageUrl: response.data.imageUrl };
    } catch (err) {
      console.error('Error uploading', err);
      throw err;
    }
  });
}
