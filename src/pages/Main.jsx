import React from "react";
import Card from "../components/card/Card";
import Contacts from "../components/contacts/Contacts";
import Header from "../components/header/Header";
import SignIn from "../components/signIn/SignIn";
import CARDS from "../mock/cards";
import Context from "../context";
import { Link } from "react-router-dom";

function Main() {
    const { user } = React.useContext(Context);

    return (
        <>
            <Header />
            <div className="container">
                <main className="main">
                    <div className="information">
                        <h1 className="title">
                            Место для получения медицинской помощи
                        </h1>
                        <div className="information__wrapper">
                            {user
                                ? <Link to='/account'>Профиль</Link>
                                : <SignIn
                                    size={128}
                                    bg="#FF685B"
                                    color="#ffff"
                                />
                            }
                            <Contacts />
                        </div>
                    </div>
                    <div className="services">
                        {CARDS.map(card => (
                            <Card
                                text={card.text}
                                img={card.img}
                                key={card.text}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}

export default Main;