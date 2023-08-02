import unidecode from 'unidecode';
export default function ({ fullname, username, password, confirmPassword }) {
  if (!!!fullname) return emptyResult('fullname');
  if (!!!username) return emptyResult('username');
  if (!!!password) return emptyResult('password');
  if (fullname.length < 6) return shortResult('fullname', 6);
  if (username.length < 4) return shortResult('username', 4);
  if (password.length < 6) return shortResult('password', 6);
  if (containsSpecialCharacter(fullname)) return specialCharacterResult('fullname');
  if (containsSpecialCharacter(username)) return specialCharacterResult('username');
  if (password !== confirmPassword) return passwordConfirmResult('confirmPassword');
  return { success: true, field: '', message: '' };
}
function passwordConfirmResult(field) {
  return { success: false, field: field, message: '*Password does not match' };
}
function emptyResult(field) {
  return { success: false, field: field, message: `*${field} could not be empty` };
}
function shortResult(field, minimumLength) {
  return { success: false, field: field, message: `*${field} could not be shorter than ${minimumLength} characters` };
}
function specialCharacterResult(field) {
  return {
    success: false,
    field: field,
    message: `*${field} could not contain special characters unless '_'`,
  };
}
function containsSpecialCharacter(str) {
  const regex = /[^a-zA-Z0-9_]/; // ^ in regex means negate, so we exclude alphanumeric characters and _
  return regex.test(unidecode(str));
}
