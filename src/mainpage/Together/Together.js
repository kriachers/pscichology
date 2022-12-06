import Problems from '../Problems'

function Together(props) {

    const problemsList = [

        {
            color: 'white',
            title: 'Фобии'
        },

        {
            color: 'white',
            title: 'Неврозы'
        },


        {
            color: 'purple',
            title: 'Самооценка'
        },


        {
            color: 'white',
            title: 'Апатия'
        },

        {
            color: 'white',
            title: 'Стрессы'
        },

        {
            color: 'purple',
            title: 'Неуверенность в себе'
        },
        {
            color: 'purple',
            title: 'Мотивация'
        },
        {
            color: 'purple',
            title: 'Мотивация'
        },
        {
            color: 'purple',
            title: 'Депрессивное состояние'
        },

        {
            color: 'white',
            title: 'Безразличие'
        },

        {
            color: 'purple',
            title: 'Чувство тревоги'
        },
        {
            color: 'white',
            title: 'Хроническая усталость'
        },
        {
            color: 'white',
            title: 'Отношения'
        },
        {
            color: 'white',
            title: 'Выгорание'
        },

    ]

    const shortProblemsList = problemsList.slice(7)

    return (
        <div className="AppTogether">
            <div className="Container">
                <div className="AppTogether__wrapper relative">
                    <p className="text-bold mb-2.5">Вместе мы справимся</p>
                    <h2 className="AppTogether__title mb-5">В YouMi вы не одни</h2>
                    <p className="text-light">Профессиональные психологи помогут разобрать вопросы, которые вы не можете решить в одиночку:</p>
                    <img className="AppTogether__arrow absolute" src="./App/arrow.svg" alt="" />
                </div>
            </div>

            <div className="flex AppTogether__flex mb-5">
                {problemsList.map((e) => {
                    return (
                        <Problems title={e.title} color={e.color}></Problems>
                    )
                })}
            </div>

            <div className="flex AppTogether__flex">
                {shortProblemsList.map((e) => {
                    return (
                        <Problems title={e.title} color={e.color}></Problems>
                    )
                })}
            </div>

        </div>
    );
}

export default Together;
