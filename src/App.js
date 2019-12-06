import React, { useEffect } from 'react'
import classNames from 'classnames'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CountUp from 'react-countup'

import Spoiler from './components/Spoiler'
import Slider from './components/Slider'
import Industrial from './components/Industrial'
import Social from './components/Social'
import Schedule from './components/Schedule'
import Investment from './components/Investment'

import styles from './App.module.css'
import page from './Page.module.css'
import fonts from './Fonts.module.css'

import logo from './images/logo.svg'

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <div className={page.root}>
      <header className={styles.header}>
        <div className={styles.placeholder} />
        <div className={page.container}>
          <Title />
        </div>
      </header>


      <section>
        <div className={styles.intro}>
          <div className={classNames(styles.text, fonts.intro)}>
            Выкса сегодня хорошо известна как индустриальный и культурный центр России: здесь современная промышленность и актуальное искусство дополняют и развивают друг друга. Такой статус города формировался последние 20 лет, с тех пор как в 1999 году Выксунский металлургический завод вошел в состав Объединенной металлургической компании.
          </div>

          <a href="https://omk.ru/" target="_blank" rel="noopener noreferrer" className={styles.wrapper}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>

            <div className={classNames(styles.link, fonts.small)}>
              Объединённая металлургическая компания
            </div>
          </a>
        </div>
      </section>

      <Slider />

      <section>
        <div className={page.block}>
          <div className={page.index}>01</div>
          <div className={page.description}>
            Как работает ВМЗ
          </div>
        </div>

        <div className={styles.worldwide}>
          <div className={styles.world}>
            <div className={classNames(styles.title, fonts.h1)}>
               В масштабах мира
            </div>

            <div className={styles.text}>
              За 20 лет Объединенной металлургической компании (ОМК) удалось создать в Центральной России комплекс по производству стали, проката, труб большого диаметра (ТБД) и железнодорожных колес мирового класса. Здесь выпускаются изделия любого уровня сложности.
            </div>
          </div>

          <Spoiler
            title={<Nail />}
            text={<Industry />}
          />
        </div>

        <div className={styles.pics}>
          <div className={styles.rgd}>
            <div className={styles.image} />

            <div className={styles.title}>
              <div className={classNames(fonts.h0, styles.mln)}>
                <CountUp end={12} duration={2} suffix=" млн" />
              </div>
              <div className={fonts.h5}>железнодорожных<br /> колес</div>
            </div>

            <div className={styles.desc}>
              <div className={classNames(fonts.h2, styles.km)}>
                <CountUp end={37000} duration={1.5} suffix=" км" />
              </div>
              <div className={fonts.h5}>длина<br /> поезда</div>
            </div>

            <div className={styles.text}>
              С момента вхождения в ОМК Выксунский завод выпустил более 12 млн железнодорожных колес. Такого количества хватит на поезд длиной почти с экватор Земли — 37 тыс. км.
            </div>
          </div>

          <div className={styles.pipe}>
            <div className={styles.image} />

            <div className={styles.title}>
              <div className={classNames(fonts.h0, styles.mln)}>
                <CountUp end={30} duration={2} suffix=" млн" />
              </div>
              <div className={fonts.h5}>тонн<br /> труб</div>
            </div>

            <div className={styles.desc}>
              <div className={classNames(fonts.h2, styles.km)}>
                <CountUp end={70000} duration={1.5} suffix=" км" />
              </div>
              <div className={fonts.h5}>общая<br /> протяженность</div>
            </div>

            <div className={styles.text}>
              За 20 лет ВМЗ произвел более 30 млн тонн труб общей протяженностью 70 тыс. км — это рекорд среди российских предприятий. Трубами ВМЗ можно практически дважды обогнуть экватор.
            </div>
          </div>
        </div>

        <div className={styles.map}>
          <div className={styles.placeholder} />
        </div>

        <div className={styles.pipes}>
          <div className={classNames(styles.baltic, fonts.h2)}>
            Наши трубы <span className={styles.sahalin}>от Балтики до Сахалина</span>
          </div>

          <div className={styles.international}>
            Все крупнейшие российские и международные проекты минимум на ⅔ построены из труб выксунского завода ОМК. Например, для обеих ниток «Северного потока — 2», общая протяженность каждой нитки которого составляет около 1 200 км, завод изготовил почти 800 км труб.
          </div>

          <div className={styles.stream}>
            А в проекте «Северный поток — 1» ОМК была первой и единственной российской компанией, допущенной до участия в поставках, объем которых превысил 500 км. труб.
          </div>
        </div>
      </section>

      <section>
        <div className={page.block}>
          <div className={page.description}>
            Как развивается ВМЗ
          </div>
        </div>

        <div className={styles.projects}>
          <div className={classNames(styles.title, fonts.h2)}>
            Инвестируем в будущее
          </div>

          <div className={styles.text}>
            С момента вхождения ВМЗ в ОМК на выксунской площадке успешно реализовано пять крупных инвестиционных проектов по созданию новых производств и модернизации действующих, еще три — в работе. Общая сумма вложений ОМК в развитие предприятия к 2018 году в долларовом эквиваленте превысила 6 млрд. В 2019-2025 годах инвестиции компании в модернизацию завода составят еще более $3 млрд.
          </div>

          <Spoiler
            second={2}
            title={<Omk />}
            text={<Gas />}
          />

          <Schedule />

          <div className={styles.investment}>
            <Investment />
          </div>
        </div>
      </section>

      <section>
        <div className={styles.single} data-aos="slide-right" data-aos-duration="800" data-aos-easing="ease-out">
          <div className={styles.image} />
        </div>
      </section>

      <Industrial />

      <Social />
    </div>
  )
}

function Title () {
  return (
    <div className={styles.root}>
      <div className={styles.word}>
        <div data-aos="fade-up">
          Кто
        </div>
      </div>
      <div className={styles.word}>
        <div data-aos="fade-up">
          строит
        </div>
      </div>
      <div className={styles.word}>
        <div data-aos="fade-up">
          заводы
        </div>
      </div>
    </div>
  )
}


function Nail () {
  return(
    <div className={styles.root}>
      <div className={styles.word}>
        <div data-aos="fade-up" data-aos-delay="100">
          От
        </div>
      </div>
      <div className={styles.word}>
        <div data-aos="fade-up" data-aos-delay="100">
          гвоздей
        </div>
      </div>
      <div className={styles.word}>
        <div data-aos="fade-up" data-aos-delay="100">
          до
        </div>
      </div>
      <div className={styles.word}>
        <div data-aos="fade-up" data-aos-delay="100">
          международных
        </div>
      </div>
      <div className={styles.word}>
        <div data-aos="fade-up" data-aos-delay="100">
          газопроводов
        </div>
      </div>
    </div>
  )
}

function Omk () {
  return(
    <div className={styles.root}>
      <div className={styles.word}>
        <div data-aos="fade-up" data-aos-delay="100">
          ОМК
        </div>
      </div>
      <div className={styles.word}>
        <div data-aos="fade-up" data-aos-delay="100">
          меняет
        </div>
      </div>
      <div className={styles.word}>
        <div data-aos="fade-up" data-aos-delay="100">
          отрасль
        </div>
      </div>
    </div>
  )
}

function Industry () {
  return(
    <div>
      <p>
        Выксунский металлургический завод (ВМЗ) как единое предприятие был образован в 1928 году путем объединения нескольких производственных площадок, созданных еще в XVIII веке заводчиками братьями Баташевыми. В советские годы на предприятии активно строили новые корпуса и расширяли производство. Завод выпускал сталь, гвозди, рельсы. В 30-х годах были построены две мартеновские печи и единственный в СССР цех по производству электросварных труб. К концу XX века на ВМЗ ввели пять новых цехов. Предприятие стало крупнейшим в стране изготовителем труб и железнодорожных колес. В постперестроечные годы завод был в трудном положении, сказывался экономический кризис и резкое падение числа заказов. В 1999 году завод вошел в состав Объединенной металлургической компании, которая запустила на предприятии антикризисную программу.
      </p>

      <p>
        Сегодня по объему выпуска трубной продукции завод ОМК находится на втором месте в России. Согласно отчетности за 2018 год, он обеспечивает 23% российского производства обсадных труб, 22% рынка труб «русского размера» и 16% рынка труб в целом. Каждый большой международный или российский трубопровод в среднем на треть состоит из выксунских труб. По производству железнодорожных колес ОМК занимает первое место в Европе. Почти две трети всех железнодорожных вагонов на пространстве 1520 (ширина железнодорожной колеи СНГ и ЕврАзЭС составляет 1520 мм) оснащены колесами ВМЗ. Завод — единственный в стране производитель стальных колес для скоростных поездов «Ласточка» и «Сапсан», а также для новых поездов метрополитена «Москва». В ноябре 2019 года ОМК купила у РЖД вагонную ремонтную компанию, способную ремонтировать по 100 тыс. вагонов ежегодно. Обладая лучшей в мировой металлургии культурой производства, ОМК намерена использовать свой опыт, чтобы оказывать владельцам вагонов лучший сервис.
      </p>
    </div>
  )
}

function Gas () {
  return(
    <div>
      <p>
        В 2005 году на ВМЗ построена первая в России линия по выпуску прямошовных труб большого диаметра для магистральных газонефтепроводов. В 2008 году ОМК построила первый в современной России металлургический завод — литейно-прокатный комплекс, мощность которого сегодня — 1,5 млн тонн трубной стали в год. В 2011 году на ВМЗ также с нуля был построен стан-5000 мощностью 1,5 млн тонн листового проката в год. Дополнив собственное производство стали контрактами с российскими поставщиками, ОМК создала в Центральной России полностью отечественную цепочку производства труб «русского размера», которые ранее Россия была вынуждена покупать за рубежом. К процессу, который ОМК запустила в 2005 году, подключились другие производители труб; результатом стало создание полностью российского производства труб большого диаметра. Это был первый и один из наиболее крупных примеров импортозамещения в промышленности. В 2004 году импорт ТБД составлял более половины объема, который производился тогда в России. На протяжении последних нескольких лет импорт ТБД составляет менее 1%. Все потребности ТЭКа, а в пиковые годы они достигали 3,5 млн тонн таких труб в год, обеспечены отечественным производством.
      </p>

      <p>
        В 2003 году ОМК модернизировала колесопрокатное производство завода, были заключены долгосрочные соглашения на поставку колес с «Российскими железными дорогами». Это обеспечило потребность транспортной отрасли в качественной продукции и дало значительный импульс развитию всего завода. В 2014 году на ВМЗ ввели первую в России линию производства цельнокатаных железнодорожных колес, и завод начал поставлять продукцию для скоростных поездов «Ласточка» и новых вагонов московского метро. В 2019 ВМЗ произвел 960 тыс. колес.
      </p>

      <p>
        ОМК в Выксе реализует сегодня новую инвестпрограмму на более чем 170 млрд руб. Уже введено в строй новое производство насосно-компрессорных и нефтегазопроводных труб с полупремиальными и премиальными соединениями. Программа охватывает развитие сталеплавильных мощностей, модернизацию и освоение новых видов трубной продукции. В частности, ОМК строит и в 2021 году планирует запустить на ВМЗ комплекс по производству бесшовных труб для добычи нефти и газа мощностью 500 тыс. тонн в год. Цель — удовлетворение растущего спроса в сегменте труб для нефтедобычи и импортозамещение. Цена проекта — более 50 млрд руб.
      </p>

      <p>
        Параллельно на ВМЗ закрывают старые и неэкологичные производства. В 2018 году в Выксе был остановлен последний крупный мартеновский цех в России. Предприятие полностью перешло на использование стали, произведенной по современным технологиям. Размер воздействия основной площадки ВМЗ на воздух в Выксе сократился почти в десять раз, улучшились и условия труда металлургов.
      </p>
    </div>
  )
}
