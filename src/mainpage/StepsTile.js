
function StepsTile(props) {

    return (
        <div className="Step__item flex">

            <img src={`${props.iconImg}`} className='Step-item__icon' alt="" />

            <div className={`Steps-item__data flex relative`}>
                <div className="relative">
                    <img src={`${props.numImg}`} className='Steps-item__num' alt="" />
                    <img src="../pictures/elems/round.svg" className='Steps-item__round' alt="" />
                </div>
                <div className={`relative`}>
                    <p className='text-bold mb-2'>{props.title}</p>
                    <p className='text-light'>{props.descr}</p>
                </div>
            </div>
        </div>
    );
}

export default StepsTile;
