import s from './Footer.module.scss';
import g from '../../style.module.scss';
import clsx from 'clsx';
import { Logo, PrimaryButton, SecondaryButton, SocialLink, TextFormInput } from '../../components';
function Footer() {
    return (
        <div className={clsx(s.container, g.flex, g.flexCol)}>
            <div className={clsx(s.content, g.flex)}>
                <div className={clsx(s.section, g.flex, g.flexCol)}>
                    <div>
                        <Logo />
                    </div>
                    <p className={g.textJustify}>
                        When an unknown prnoto sans took a galley and scrambled it to make specimen book not only five
                        When an unknown prnoto sans took a galley and scrambled it to five centurie.
                    </p>
                    <div>
                        <h3 className={s.subTitle}>Address</h3>
                        <p>123 Main Street</p>
                        <p>New York, NY 10001</p>
                    </div>
                </div>
                <div>
                    <div className={s.title}>Categories</div>
                    <ul className={s.list}>
                        <li>
                            <a href="#">Design</a>
                        </li>
                        <li>
                            <a href="#">Design</a>
                        </li>
                        <li>
                            <a href="#">Design</a>
                        </li>
                        <li>
                            <a href="#">Design</a>
                        </li>
                        <li>
                            <a href="#">Design</a>
                        </li>
                        <li>
                            <a href="#">Design</a>
                        </li>
                        <li>
                            <a href="#">Design</a>
                        </li>
                        <li>
                            <a href="#">Design</a>
                        </li>
                        <li>
                            <a href="#">Design</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className={s.title}>Newsletter</div>
                    <form className={clsx(g.flex, g.flexCol, s.section)}>
                        <TextFormInput />
                        <TextFormInput />
                        <div>
                            <PrimaryButton>Subscribe</PrimaryButton>
                            <SecondaryButton>SecondaryBTn</SecondaryButton>
                        </div>
                    </form>
                </div>
            </div>
            <div className={clsx(g.flex, s.about)}>
                <div className={s.license}>
                    © 2023 Created by <a href="https://github.com/kuroshiro1902">Son</a> and{' '}
                    <a href="https://github.com/nguyen2598">Nguyen</a>
                </div>
                <div className={clsx(g.flex, s.social)}>
                    <SocialLink href="#">Facebook</SocialLink>
                    <SocialLink href="#">Facebook</SocialLink>
                    <SocialLink href="#">Facebook</SocialLink>
                    <SocialLink href="#">Facebook</SocialLink>
                    <SocialLink href="#">Facebook</SocialLink>
                    <SocialLink href="#">Facebook</SocialLink>
                </div>
            </div>
        </div>
    );
}

export default Footer;
