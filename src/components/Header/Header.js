import './Header.scss';

import { ReactComponent as Logo } from '../../assets/Logo.svg';

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
        </header>
    )
}

export default Header;