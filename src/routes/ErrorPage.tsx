import style from './ErrorPage.module.css'
function ErrorPage() {
    return (
        <>
            <h1>OOPSIE WOOPSIE!! Uwu We made a fucky wucky!! A wittle fucko boingo! The code monkeys at our headquarters are working VEWY HAWD to fix this!</h1>

            <p className={style.marquee}>
                <span> 🐒 🍌 🦍 🍌 🦧 🍌🐒 🍌 🦍 🍌 🦧 🍌🐒 🍌 🦍 🍌 🦧 🍌&nbsp;</span>
            </p>
            <p className={`${style.marquee} ${style.marquee2}`}>
                <span> 🐒 🍌 🦍 🍌 🦧 🍌🐒 🍌 🦍 🍌 🦧 🍌🐒 🍌 🦍 🍌 🦧 🍌&nbsp;</span>
            </p >
        </>
    );
}

export default ErrorPage