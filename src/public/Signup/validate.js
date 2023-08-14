import unidecode from 'unidecode';
export default function ({ fullname, username, password, confirmPassword }) {
  //check empty
  if (!!!fullname) return emptyError('fullname');
  if (!!!username) return emptyError('username');
  if (!!!password) return emptyError('password');
  //check special characters
  if (/[^a-zA-Z0-9 ]/.test(unidecode(fullname))) return specialCharacterError('fullname');
  if (/[^a-zA-Z0-9_]/.test(unidecode(username))) return specialCharacterError('username');
  //check length
  if (fullname.length < 6) return shortError('fullname', 6);
  if (password.length < 6) return shortError('password', 6);
  if (username.length < 4) return shortError('username', 4);
  //check comfirm password
  if (password !== confirmPassword) return passwordConfirmError('confirmPassword');
  //validated
  return { success: true, field: '', message: '' };
}
function passwordConfirmError(field) {
  return { success: false, field: field, message: '*Password does not match' };
}
function emptyError(field) {
  return { success: false, field: field, message: `*${field} could not be empty` };
}
function shortError(field, minimumLength) {
  return { success: false, field: field, message: `*${field} could not be shorter than ${minimumLength} characters` };
}
function specialCharacterError(field) {
  return {
    success: false,
    field: field,
    message: `*${field} could not contain special characters`,
  };
}
