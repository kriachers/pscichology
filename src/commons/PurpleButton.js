
function PurpleButton(props) {
    return (
        <div className={`${props.class}-wrapper`}>
            <button className={`purpleButton ${props.class}`}>
                {props.title}
            </button>
        </div>
    );
}

export default PurpleButton;
