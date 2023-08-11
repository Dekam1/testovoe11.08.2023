import React from "react";
import Context from "../context";
import Header from "../components/header/Header";
import Signout from "../components/signout/Signout";
import Contacts from "../components/contacts/Contacts";

function Account() {
    const { user } = React.useContext(Context);
    const { login } = user;
    return (
        <>
            <Header />
            <div className="container">
                <main className="main">
                    <div className="greeting">
                        <h1 className="greeting__title">
                            Привет, {login}
                        </h1>
                    </div>
                    <div className="navigation">
                        <Signout
                            text={'Выйти из аккаунта'}
                        />
                        <Contacts />
                    </div>
                </main>
            </div>
        </>
    );
}

export default Account;