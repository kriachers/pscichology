
function Benefit(props) {
    return (

        <div className="Benefits__item relative">
            <img className="absolute Benefits-item__icon" src={`../pictures/App/flex-${props.id}.svg`} alt="" />
            <div>
                <p className="text-bold Benefits-item__title">{props.title}</p>
                <p className="text-light Benefits-item__descr">{props.descr}</p>
            </div>
        </div>

    )
}

export default Benefit;