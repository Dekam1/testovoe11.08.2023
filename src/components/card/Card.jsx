import style from "./style.module.scss";

function Card({ text, img }) {
    return (
        <div className={style.card}>
            <img src={img} alt="card" />
            <p>{text}</p>
            <span>Рыба текст</span>
        </div>
    );
}

export default Card;