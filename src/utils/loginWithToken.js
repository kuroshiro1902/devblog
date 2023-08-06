import axios from 'axios';
import store from '../store/store';
import host from '../host.config';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/authSlice';
async function loginWithPersistedToken() {
  // Lấy trạng thái đăng nhập từ localStorage (nếu có)
  const persistedToken = localStorage.getItem('token');
  if (persistedToken) {
    try {
      const { data } = await axios.post(host + '/loginwithtoken', {
        headers: {
          Authorization: `Bearer ${persistedToken}`,
        },
      });

      store.dispatch({ type: 'auth/login', payload: JSON.parse(persistedToken) });
    } catch (error) {
      alert("Can't login with persisted token");
    }
  }
}
