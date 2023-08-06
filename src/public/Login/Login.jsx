import { useState, useRef, useCallback } from 'react';
import useLogin from '../../hooks/useLogin';
import axios from 'axios';
import { Heading, PrimaryButton, TextFormInputForward, Overlay, Loading } from '../../components';
import { BiSolidUser, BiSolidKey } from 'react-icons/bi';
import host from '../../host.config';
import validate from './validate';
import s from './Login.module.scss';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState({});
  const [isSending, setIsSending] = useState(false);
  const login = useLogin();
  //refs
  const usernameRef = useRef();
  const passwordRef = useRef();
  const refs = {
    username: usernameRef,
    password: passwordRef,
  };
  //
  const handleSubmit = useCallback(async (account) => {
    const validation = validate(account);
    if (!validation.success) {
      console.log(validation);
      refs[validation.field].current?.focus();
      setWarning(validation);
      return;
    }
    setIsSending(true);
    try {
      const { data } = await axios.post(host + '/accounts/login', account);
      console.log(data);
      //Nếu bị lỗi (không có username, sai mật khẩu)
      if (!!!data.account) {
        setWarning({ success: false, field: data.errorField, message: data.message });
        refs[data.errorField].current?.focus();
      }
      //Nếu thành công
      else {
        login(data.account);
      }
    } catch (err) {
      alert(err.message);
    }
    setIsSending(false);
  }, []);
  //
  return (
    <div className={s.login}>
      <div className={s.main}>
        <Heading title="Log in" description="Log in to explore amazing posts." />
        <form
          className={s.form}
          method="POST"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            const data = {
              username: username.trim(),
              password: password,
            };
            handleSubmit(data);
          }}
        >
          <TextFormInputForward
            value={username}
            ref={usernameRef}
            onChange={(e) => {
              setWarning({});
              setUsername(e.target.value);
            }}
            placeholder="Username"
            icon={<BiSolidUser />}
            name="username"
          />
          {warning.field === 'username' && (
            <small style={{ color: 'crimson', textShadow: '0 0 4px #ff000050' }}>{warning.message}</small>
          )}
          <TextFormInputForward
            value={password}
            ref={passwordRef}
            onChange={(e) => {
              setWarning({});
              setPassword(e.target.value);
            }}
            placeholder="Password"
            icon={<BiSolidKey />}
            name="password"
            type="password"
          />
          {warning.field === 'password' && (
            <small style={{ color: 'crimson', textShadow: '0 0 4px #ff000050' }}>{warning.message}</small>
          )}
          <div>
            <PrimaryButton>Log in</PrimaryButton>
          </div>
        </form>
      </div>
      <div className={s.bannerCtn}>
        <div className={s.banner}></div>
      </div>
      {isSending && (
        <Overlay>
          <Loading>Please wait a moment...</Loading>
        </Overlay>
      )}
    </div>
  );
}

export default Login;
