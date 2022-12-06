
function WorkersTile(props) {

    let isImg = false;
    if (props.size == 'big') {
        isImg = true;
    }

    return (
        <div className={`flex WorkersTile-grid__item WorkersTile-grid__item--${props.size}`}>
            {isImg && <img className="mr-6 WorkersTile-grid-item__img" width={150} src={`${props.img}`} alt="" />}
            <div>
                <p className='text-bold mb-2'>{props.title}</p>
                <p className='text-light'>{props.descr}</p>
            </div>
        </div>
    );
}

export default WorkersTile;
