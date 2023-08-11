import React, { useContext } from "react";
import style from "./style.module.scss";
import Context from "../../context";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

function AuthorizationPopap() {
    const navigate = useNavigate();
    const { signin } = useAuth();

    const { setPopapShow, authorizationError, setAuthorizationError } = useContext(Context);

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const login = form.login.value;
        const password = form.password.value;

        const userDate = {
            login,
            password
        };
        signin(userDate, () => navigate('/account', { replace: true }));
    };

    function authorizationErrorTime() {
        setTimeout(() => {
            setAuthorizationError(false);
        }, 1000);
        return (
            <span className={style.error}>Неправильный логин или пароль</span>
        )
    }

    return (
        <div
            className={style.popap__overlay}
            onClick={() => setPopapShow(false)}
        >
            <form
                onClick={(e) => e.stopPropagation()}
                className={style.popap}
                onSubmit={(e) => handleSubmit(e)}
            >
                <div className={style.labels}>
                    <label>
                        Логин
                        <input name="login" required type="text" minLength={5} />
                    </label>
                    <label>
                        Пароль
                        <input name="password" required type="password" minLength={5} />
                    </label>
                    {authorizationError && authorizationErrorTime()}
                </div>
                <input
                    className={style.submit}
                    value="Зайти" type="submit" /
                >
            </form>
        </div>
    );
}

export default AuthorizationPopap;