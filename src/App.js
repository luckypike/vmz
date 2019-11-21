import React, { useState } from 'react'
import classNames from 'classnames'
// import CountUp from 'react-countup'
// import VisibilitySensor from "react-visibility-sensor"
// import { useLax, useLaxElement } from 'use-lax'

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
  const [spoiler, setSpoiler] = useState(false)
  // const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(false)

  // const ref = useLaxElement()

  // const onVisibilityChange = isVisible => {
  //   if (isVisible) {
  //     setVisible(true)
  //   }
  // }

  // useLax()

  if (spoiler) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }


  return (
    <div className={page.root}>
      <header className={styles.header}>
        <div className={styles.placeholder}></div>
        <div className={page.text}>
          Кто строит заводы
        </div>
      </header>

      <section className={page.section}>
        <div className={styles.intro}>
          <div className={styles.text}>
            Выкса сегодня хорошо известна как индустриальный и культурный центр России: здесь современная промышленность и актуальное искусство дополняют и развивают друг друга. Такой статус города формировался последние 20 лет, с тех пор как в ноябре 1999 года Выксунский металлургический завод вошел в состав Объединенной металлургической компании.
          </div>
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>

            <div className={classNames(styles.link, fonts.small)}>
              Объединённая металлургическая компания
            </div>
          </div>
        </div>
      </section>

      <Slider />

      <section className={classNames(page.section, {[styles.blur]: spoiler})}>
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

          <Spoiler />
        </div>

        <div className={styles.pics}>
          <div className={styles.rgd}>
            <div className={styles.image} />

            <div className={styles.title}>
              <div className={classNames(fonts.h0, styles.mln)}>12 млн</div>
              <div className={fonts.h5}>железнодорожных<br /> колес</div>
            </div>

            <div className={styles.desc}>
              <div className={classNames(fonts.h0, styles.km)}>37 000 км</div>
              <div className={fonts.h5}>поезд<br /> длиной</div>
            </div>

            <div className={styles.text}>
              С момента вхождения в ОМК Выксунский завод выпустил более 12 млн железнодорожных колес. Такого количества хватит на поезд длиной почти с экватор Земли — 37 тыс. км.
            </div>
          </div>

          <div className={styles.pipe}>
            <div className={styles.image} />

            <div className={styles.title}>
              <div className={classNames(fonts.h0, styles.mln)}>30 млн</div>
              <div className={fonts.h5}>тонн<br /> труб</div>
            </div>

            <div className={styles.desc}>
              <div className={classNames(fonts.h0, styles.km)}>70 000 км</div>
              <div className={fonts.h5}>общая<br /> протяженность</div>
            </div>

            <div className={styles.text}>
              За 20 лет ВМЗ произвел более 30 млн тонн труб общей протяженностью 70 тыс. км — это рекорд среди российских предприятий. Трубами ВМЗ можно практически дважды обогнуть экватор.
            </div>
          </div>
        </div>

        <div className={styles.pipes}>
          <div className={classNames(styles.baltic, fonts.h2)}>
            Наши трубы <span className={styles.sahalin}>от Балтики до Сахалина</span>
          </div>

          <div className={styles.international}>
            Все крупнейшие российские и международные проекты минимум на ⅔ построены из труб выксунского завода ОМК. Например, для обеих ниток «Северного потока — 2», общая протяженность каждой нитки которого составляет около 1 200 км, завод изготовил почти 800 км труб.
          </div>

          <div className={styles.stream}>
            А в проекте «Северный поток — 1» ОМК была первой и единственной российской компанией, допущенной до участия в поставках, объем которых превысил 500 км. труб.
          </div>

          <div className={styles.map} />
        </div>
      </section>

      <section className={page.section}>
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

            <Spoiler />

            <Schedule />

            <div className={styles.qwe}>
              <Investment />
            </div>
          </div>
      </section>

      <section className={page.section}>
        <div className={styles.single}>
          <div className={styles.image} />
        </div>
      </section>

      <Industrial />

      <Social />
    </div>
  )
}
