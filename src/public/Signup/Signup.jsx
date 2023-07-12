import { Heading, PrimaryButton, TextFormInput } from '../../components';
import { BiSolidUserCircle, BiSolidUser, BiSolidKey } from 'react-icons/bi';
import { GiConfirmed } from 'react-icons/gi';
import s from './Signup.module.scss';
function Signup() {
    return (
        <div className={s.signup}>
            <div className={s.main}>
                <Heading title="Sign up" description="Connect to the world now." />
                <form className={s.form} method="POST" action="">
                    <TextFormInput placeholder="Fullname" icon={<BiSolidUserCircle />} name="fullname" />
                    <TextFormInput placeholder="Username" icon={<BiSolidUser />} name="username" />
                    <TextFormInput placeholder="Password" icon={<BiSolidKey />} name="password" type="password" />
                    <TextFormInput
                        placeholder="Comfirm Password"
                        icon={<GiConfirmed />}
                        name="confirmpassword"
                        type="password"
                    />
                    <PrimaryButton>Sign up</PrimaryButton>
                </form>
            </div>
            <div className={s.banner}></div>
        </div>
    );
}

export default Signup;
