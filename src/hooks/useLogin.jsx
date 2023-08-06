import { useDispatch } from 'react-redux';
import { login } from '../store/slice/authSlice';
function useLogin() {
  const dispatch = useDispatch();
  return (account) => dispatch(login(account));
}

export default useLogin;
