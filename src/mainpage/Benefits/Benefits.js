import Benefit from '../../mainpage/Benefit'

function Benefits(props) {
    const benefitsList = [
        {
            id: 1,
            title: "Свобода возможностей",
            descr: "Проходите сессию из любой точки мира, не тратьте время на дорогу",
        },
        {
            id: 2,
            title: "Будьте уверены в своем выборе",
            descr: "Мы работаем только с квалифицированными специалистами, которые прошли строгий отбор",
        },
        {
            id: 3,
            title: "Ваш запрос важен",
            descr: "Подберем опытного специалиста под ваш запрос",
        },

    ]

    return (
        <div className="AppBenefits">
            <h2 className="AppBenefits__title">
                Онлайн-психотерапия становится комфортнее
            </h2>

            <div className="AppBenefits__flex flex justify-center">
                {benefitsList.map((e) => {
                    return (
                        <Benefit title={e.title} descr={e.descr} id={e.id} />
                    );
                })}
            </div>
        </div>
    );
}

export default Benefits;
