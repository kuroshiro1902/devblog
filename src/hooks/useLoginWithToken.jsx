import axios from 'axios';
import host from '../host.config';
import useLogin from './useLogin';
function useLoginWithToken() {
  const login = useLogin();
  return async function getAccountByToken() {
    // Lấy trạng thái đăng nhập từ localStorage (nếu có)
    const persistedToken = JSON.parse(localStorage.getItem('token'));
    if (persistedToken) {
      try {
        const { data } = await axios.post(host + '/accounts/loginbytoken', null, {
          headers: {
            Authorization: `Bearer ${persistedToken}`,
          },
        });
        console.log(data);
        const account = data.account;
        login(account);
        // localStorage.setItem('token', account.token);
      } catch (error) {
        console.log('Token expired.');
      }
    }
  };
}

export default useLoginWithToken;
