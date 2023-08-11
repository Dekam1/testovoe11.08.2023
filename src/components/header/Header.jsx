import { Link } from 'react-router-dom';
import Contacts from '../contacts/Contacts';
import SignIn from '../signIn/SignIn';
import style from './style.module.scss';
import React from 'react';
import Context from '../../context';
import Signout from '../signout/Signout';

function Header() {
    const { user } = React.useContext(Context);

    return (
        <header className={style.header}>
            <div className={style.logo}>
                <Link to='/'>
                    <img src='/img/logo.png' alt='logo' />
                </Link>
            </div>
            <div className={style.wrapper}>
                <Contacts />
                {user ? <Signout text={'Выйти'} /> : <SignIn />}
            </div>
        </header>
    );
}

export default Header;