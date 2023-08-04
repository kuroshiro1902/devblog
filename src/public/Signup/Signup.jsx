import { useCallback, useRef, useState } from 'react';
import axios from 'axios';
import { Heading, Overlay, PrimaryButton, TextFormInputForward, Loading } from '../../components';
import { BiSolidUserCircle, BiSolidUser, BiSolidKey } from 'react-icons/bi';
import { GiConfirmed } from 'react-icons/gi';
import host from '../../host.config';
import validate from './validate';
import s from './Signup.module.scss';
function Signup() {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [warning, setWarning] = useState({});
  const [isSending, setIsSending] = useState(false);
  //refs
  const fullnameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const refs = {
    fullname: fullnameRef,
    username: usernameRef,
    password: passwordRef,
    confirmPassword: confirmPasswordRef,
  };
  //
  const handleSubmit = useCallback(async (account) => {
    const validation = validate(account);
    if (!validation.success) {
      refs[validation.field].current?.focus();
      setWarning(validation);
      return;
    }
    setIsSending(true);
    try {
      const { data } = await axios.post(host + '/accounts/signup', account);
      console.log(data);
      //nếu request gửi thành công và không có account trả về => account bị trùng username
      if (!!!data.account) {
        setWarning({ success: false, field: 'username', message: 'Username is already in use' });
        refs[data.errorField].current?.focus();
      }
    } catch (err) {
      alert(err.message);
    }
    setIsSending(false);
  }, []);
  return (
    <div className={s.signup}>
      <div className={s.main}>
        <Heading title="Sign up" description="Connect to the world now." />
        <form
          className={s.form}
          method="POST"
          action={`${host}/auth/signup`}
          onSubmit={(e) => {
            e.preventDefault();
            const data = {
              fullname: fullname.trim(),
              username: username.trim(),
              password: password,
              confirmPassword: confirmPassword,
            };
            handleSubmit(data);
          }}
        >
          <TextFormInputForward
            placeholder="Fullname"
            icon={<BiSolidUserCircle />}
            name="fullname"
            value={fullname}
            onChange={(e) => {
              setWarning({});
              setFullname(e.target.value);
            }}
            ref={fullnameRef}
          />
          {warning.field === 'fullname' && (
            <small style={{ color: 'crimson', textShadow: '0 0 4px #ff000050' }}>{warning.message}</small>
          )}
          <TextFormInputForward
            placeholder="Username"
            icon={<BiSolidUser />}
            name="username"
            value={username}
            onChange={(e) => {
              setWarning({});
              setUsername(e.target.value.trim());
            }}
            ref={usernameRef}
          />
          {warning.field === 'username' && (
            <small style={{ color: 'crimson', textShadow: '0 0 4px #ff000050' }}>{warning.message}</small>
          )}
          <TextFormInputForward
            placeholder="Password"
            icon={<BiSolidKey />}
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              setWarning({});
              setPassword(e.target.value);
            }}
            ref={passwordRef}
          />
          {warning.field === 'password' && (
            <small style={{ color: 'crimson', textShadow: '0 0 4px #ff000050' }}>{warning.message}</small>
          )}
          <TextFormInputForward
            placeholder="Comfirm Password"
            icon={<GiConfirmed />}
            name="confirmpassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setWarning({});
              setConfirmPassword(e.target.value);
            }}
            ref={confirmPasswordRef}
          />
          {warning.field === 'confirmPassword' && (
            <small style={{ color: 'crimson', textShadow: '0 0 4px #ff000050' }}>{warning.message}</small>
          )}
          <div>
            <PrimaryButton>Sign up</PrimaryButton>
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

export default Signup;
