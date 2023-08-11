import React from "react";
import style from "./style.module.scss";
import Context from "../../context";

function SignIn({
    size = null,
    bg = null,
    color = null
}) {

    const { setPopapShow } = React.useContext(Context);
    const styles = {
        width: size,
        backgroundColor: bg,
        color
    };

    return (
        <button
            className={style.button}
            style={styles}
            onClick={() => setPopapShow(true)}
        >
            Войти
        </button>
    );
}

export default SignIn;