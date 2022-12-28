
import WorkersTile from './WorkersTile'

const workersList = [
    {
        size: 'big',
        title: 'Образование',
        descr: 'Диплом о высшем психологическом образовании и дополнительные сертификаты',
        img: '../../pictures/icons/book.svg'
    },
    {
        size: 'small',
        title: 'Опыт работы',
        descr: 'Подтвержденный опыт работы не менее 3-х лет',
    },
    {
        size: 'small',
        title: 'Обучение',
        descr: 'Прохождение супервизии от 20 часов в год'
    },
    {
        size: 'big',
        title: 'Личная терапия',
        descr: 'Прохождение личной терапии от 50 часов в год',
        img: '../../pictures/icons/watch.svg'
    }
]

function Workers(props) {
    return (
        <div className="Workers">
            <div className='mb-14'>
                <p className="Workers__small text-bold mb-2.5">Мы работаем только с</p>
                <h2 className="Workers__title mb-7">квалифицированными специалистами, которые прошли наш строгий отбор</h2>
                <p className="Workers__descr text-light">Помимо серии собеседований и испытаний по разработанной нами методологии, психологи предоставляют необходимые документы:</p>
            </div>


            <div className="WorkersTile__grid">
                {workersList.map((e) => {
                    return (
                        <WorkersTile title={e.title} descr={e.descr} size={e.size} img={e.img}></WorkersTile>
                    )
                })}
            </div>
        </div>
    );
}

export default Workers;
