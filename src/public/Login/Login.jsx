import { Heading, PrimaryButton, RecentBlock, TextFormInput } from '../../components';
import { BiSolidUser, BiSolidKey } from 'react-icons/bi';
import s from './Login.module.scss';
function Login() {
    return (
        <div className={s.login}>
            <div className={s.main}>
                <Heading title="Log in" description="Log in to explore amazing posts." />
                <form className={s.form} method="POST" action="">
                    <TextFormInput placeholder="Username" icon={<BiSolidUser />} name="username" />
                    <TextFormInput placeholder="Password" icon={<BiSolidKey />} name="password" type="password" />
                    <PrimaryButton>Log in</PrimaryButton>
                </form>
            </div>
            <div className={s.banner}></div>
        </div>
    );
}

export default Login;
