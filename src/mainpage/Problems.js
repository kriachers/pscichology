
function Problems(props) {
    return (
        <div className={`flex AppTogether__problems AppTogether__problems--${props.color}`}>
            <p className={`AppTogether-problems__title AppTogether-problems__title--${props.color}`}>{props.title}</p>
        </div>
    );
}

export default Problems;
