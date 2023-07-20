import './Header.scss';

import { ReactComponent as Logo } from '../../assets/Logo.svg';
import {ReactComponent as PhoneIcon} from '../../assets/PhoneIcon.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                {/* eslint-disable-next-line  */}
                <a href="#">
                    <Logo/>
                </a>
            </div>
            <div className="phone"><a href="tel:+74954954954">+7 (495) 495-49-54</a></div>
            <div className="phone-icon"><a href="tel:+74954954954"><PhoneIcon/></a></div>
        </header>
    )
}

export default Header;