import StepsTile from '../StepsTile'

const StepsList = [
    {
        img: './numbers/number-1.svg',
        title: 'Заполните анкету,',
        descr: 'ответив на 5 простых вопросов, определив тему и пожелания по психологу.',
        icon: './App/steps/questionnaire.svg'
    },
    {
        img: './numbers/number-2.svg',
        title: 'Ознакомьтесь с профилями',
        descr: 'специалистов и посмотрите видео-визитки. Выберите психолога с которым вам будет комфортно.',
        icon: './App/steps/profiles.svg'
    },
    {
        img: './numbers/number-3.svg',
        title: 'Определите дату и время',
        descr: 'первой сессии. Если у вас поменяются планы, вы сможете ее отменить или перенести.',
        icon: './App/steps/calendar.svg'
    },
    {
        img: './numbers/number-4.svg',
        title: 'Пройдите тестирование',
        descr: 'в личном кабинете для того, чтобы сделать первую сессию более продуктивной.',
        icon: './App/steps/test.svg'
    },
]


function Steps(props) {

    return (

        <div className="Steps Container">
            <h2 className="Steps__title mb-20">Сделайте 4 шага навстречу психотерапии</h2>
            <div>
                {
                    StepsList.map((e) => {
                        return (
                            <StepsTile iconImg={e.icon} title={e.title} descr={e.descr} numImg={e.img}></StepsTile>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Steps;