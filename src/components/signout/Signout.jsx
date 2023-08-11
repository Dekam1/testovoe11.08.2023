import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import style from "./style.module.scss";

function Signout({ text }) {
    const navigate = useNavigate();
    const { signout } = useAuth();

    return (
        <button onClick={() => signout(() => navigate('/', { replace: true }))} className={style.signout}>
            {text}
        </button>
    );
}

export default Signout;