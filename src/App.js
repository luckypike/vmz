import React, { useState } from 'react'
import classNames from 'classnames'
// import CountUp from 'react-countup'
// import VisibilitySensor from "react-visibility-sensor"
// import { useLax, useLaxElement } from 'use-lax'

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
      <div className={classNames(styles.overlay, { [styles.active]: active })} onClick={() => [setActive(false), setSpoiler(false)]} />

      <div className={classNames(styles.modal, styles.effect, {[styles.show]: spoiler})}>
        <div className={classNames(styles.content)}>
          <h3>wqeqweqweq</h3>
          <div>
            qweqweqweqwe
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.placeholder}></div>
        <div className={page.text}>
          В авангарде металлургии
        </div>
      </header>

      <section className={page.section}>
        <div className={styles.intro}>
          <div className={classNames(styles.text, fonts.h4)}>
            Выксунский металлургический завод (ВМЗ) в ноябре 1999 года вошел в состав Объединенной металлургической компании (ОМК). Благодаря этому союзу за 20 лет Выкса стала одним из крупнейших металлургических центров России и городом притяжения для современного искусства. Здесь промышленность и культура дополняют и развивают друг друга.
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

            <div className={classNames(styles.text, fonts.h4)}>
              За 20 лет ОМК удалось создать на выксунской площадке комплекс по производству труб большого диаметра и железнодорожных колес мирового класса, где выполняются изделия любого уровня сложности.
            </div>
          </div>

          <div className={classNames(styles.spoiler)}>
            <div className={styles.gg} />
            <div className={classNames(styles.title, fonts.h3)}>
              От гвоздей до международных газопроводов
            </div>

            <div className={styles.more} onClick={() => [setActive(true), setSpoiler(!spoiler)]}>
              Читать дальше
            </div>
          </div>
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
              С момента вхождения в ОМК выксунский завод выпустил более 12 млн железнодорожных колес. Такого количества хватит на поезд длиной 37 тыс. км.
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
              За 20 лет ВМЗ произвел более 30 млн тонн труб общей протяженностью 70 тыс. км — это рекорд среди российских предприятий. Трубами ВМЗ можно почти дважды обогнуть экватор.
            </div>
          </div>
        </div>

        <div className={styles.pipes}>
          <div className={classNames(styles.baltic, fonts.h3)}>
            Наши трубы <span className={styles.sahalin}>от Балтики до Сахалина</span>
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
            С момента вхождения ВМЗ в ОМК на выксунской площадке успешно реализовано пять крупных инвестиционных проектов по модернизации производства, еще три — в работе. Суммарные инвестиции компании в развитие завода к 2023 году должны превысить 300 млрд руб., а к 2025 году — достигнуть 350 млрд руб.
          </div>

          <div className={classNames(styles.spoiler)}>
            <div className={styles.gg} />
            <div className={classNames(styles.title, fonts.h3)}>
              ОМК и ВМЗ меняют отрасль
            </div>

            <div className={styles.more} onClick={() => [setActive(true), setSpoiler(!spoiler)]}>
              Читать дальше
            </div>
          </div>

          <Schedule />
        </div>

        <Investment />
      </section>

      <section className={page.section}>
        <Slider />

        <div className={styles.single}>
          <div className={styles.image} />
        </div>
      </section>

      <Industrial />

      {/* <Social /> */}
    </div>
  )
}
