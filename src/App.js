import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';


import './App.css';

import PurpleButton from './commons/PurpleButton'
import Benefit from './mainpage/Benefit'
import Problems from './mainpage/Problems'
import WorkersTile from './mainpage/Workers/WorkersTile'
import StepsTile from './mainpage/StepsTile'
import Accordion from './mainpage/Accordion';

import Header from './commons/Header/Header';
import Banner from './mainpage/Banner/Banner';
import Benefits from './mainpage/Benefits/Benefits'
import Workers from './mainpage/Workers/Workers'
import Steps from './mainpage/Steps/Steps';
import Questions from './mainpage/Questions/Questions';
import Together from './mainpage/Together/Together'


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

const workersList = [
  {
    size: 'big',
    title: 'Образование',
    descr: 'Диплом о высшем психологическом образовании и дополнительные сертификаты',
    img: './icons/book.svg'
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
    img: './icons/watch.svg'
  }
]

const accordionList = [
  {
    title: 'Эффективно ли работать с психологом онлайн?',
    descr: 'Да, эффективно и уже является стандартной практикой во всем мире. За последние годы было проведено много научных исследований, доказывающих, что данный формат не уступает по эффективности традиционной очной психотерапии.'
  },

  {
    title: 'Как выбрать специалиста?',
    descr: 'Да, эффективно и уже является стандартной практикой во всем мире. За последние годы было проведено много научных исследований, доказывающих, что данный формат не уступает по эффективности традиционной очной психотерапии.'
  },

  {
    title: 'Чувствую, что мне нужна помощь, но не понимаю в чём проблема. Как быть?',
    descr: 'Да, эффективно и уже является стандартной практикой во всем мире. За последние годы было проведено много научных исследований, доказывающих, что данный формат не уступает по эффективности традиционной очной психотерапии.'
  },

  {
    title: 'Как вы отбираете психологов в базу?',
    descr: 'Да, эффективно и уже является стандартной практикой во всем мире. За последние годы было проведено много научных исследований, доказывающих, что данный формат не уступает по эффективности традиционной очной психотерапии.'
  },

  {
    title: 'В чем разница между психологом, психотерапевтом и психиатром и как понять кто мне нужен?',
    descr: 'Да, эффективно и уже является стандартной практикой во всем мире. За последние годы было проведено много научных исследований, доказывающих, что данный формат не уступает по эффективности традиционной очной психотерапии.'
  },

]

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

const shortProblemsList = problemsList.slice(7)


function App() {
  return (

    <div>

      <div className="Container Container-bottom">
        <Header></Header>
      </div>

      <div className="Container Container-bottom">
        <Banner></Banner>
      </div>

      <div className="Container Container-bottom">
        <Benefits></Benefits>
      </div>


      <Together></Together>


      <div className="Container Container-bottom">
        <Workers></Workers>
      </div>

      <div className="Conatiner-blue ">
        <Steps></Steps>
      </div>

      <div className="Container">
        {/* <div className="Questions">
          <h2 className="Questions__title text-center">Вопросы - ответы</h2>

          {
            accordionList.map((e) => {
              return (<Accordion title={e.title} descr={e.descr}></Accordion>)
            })
          }
        </div> */}
        <Questions></Questions>
      </div>

    </div>
  );
}

export default App;
