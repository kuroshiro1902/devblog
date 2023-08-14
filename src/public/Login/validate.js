import unidecode from 'unidecode';
export default function ({ username, password }) {
  //check empty
  if (!!!username) return emptyError('username');
  if (!!!password) return emptyError('password');
  //check special characters
  if (/[^a-zA-Z0-9_]/.test(unidecode(username))) return specialCharacterError('username');
  //validated
  return { success: true, field: '', message: '' };
}
function emptyError(field) {
  return { success: false, field: field, message: `*${field} could not be empty` };
}
function specialCharacterError(field) {
  return {
    success: false,
    field: field,
    message: `*${field} could not contain special characters`,
  };
}
