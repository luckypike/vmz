import React, { useEffect } from 'react'
import classNames from 'classnames'
import CountUp from 'react-countup'
import AOS from 'aos'

import fonts from '../Fonts.module.css'
import styles from './Schedule.module.css'

export default function Schedule () {

  useEffect(() => {
    AOS.init({
      useClassNames: true,
      initClassName: styles.init,
      animatedClassName: styles.animated,
      once: true
    })
  }, [])

  return(
    <div className={styles.root}>
      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2003
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Реконструкция колесопрокатного комплекса ВМЗ
        </div>

        <div className={styles.indicators}>
          <div className={classNames(styles.sum, fonts.small)} data-aos="fade-up">
            <CountUp decimals={1} start={0} end={1.6} duration={2} delay={0.5} suffix=" млрд руб." />
          </div>

          <div className={classNames(styles.indicator, styles.first)} data-aos="fade-up"/>
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2004 – 2009
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Модернизация производства
        </div>

        <div className={styles.indicators}>
          <div className={classNames(styles.sum, fonts.small)} data-aos="fade-up">
            <CountUp decimals={1} start={0} end={5.7} duration={2} delay={0.5} suffix=" млрд руб." />
          </div>

          <div className={classNames(styles.indicator, styles.second)} data-aos="fade-up" />
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2005
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Строительство сверхсовременных линий для выпуска труб большого диаметра «русского размера»
        </div>

        <div className={styles.indicators}>
          <div className={classNames(styles.sum, fonts.small)} data-aos="fade-up">
            <CountUp start={0} end={15} duration={2} delay={0.5} suffix=" млрд руб." />
          </div>

          <div className={classNames(styles.indicator, styles.third)} data-aos="fade-up" />
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2008
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Строительство литейно-прокатного комплекса по производству трубной стали и проката
        </div>

        <div className={styles.indicators}>
          <div className={classNames(styles.sum, fonts.small)} data-aos="fade-up">
            <CountUp start={0} end={32} duration={2} delay={0.5} suffix=" млрд руб." />
          </div>

          <div className={classNames(styles.indicator, styles.fourth)} data-aos="fade-up" />
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2011
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Запуск самого современного стана-5000 по выпуску широкого листа
        </div>

        <div className={styles.indicators}>
          <div className={classNames(styles.sum, fonts.small)} data-aos="fade-up">
            <CountUp start={0} end={45} duration={2} delay={0.5} suffix=" млрд руб." />
          </div>

          <div className={classNames(styles.indicator, styles.fifth)} data-aos="fade-up" />
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2016 – 2019
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Модернизация производства сварных труб для добычи нефти и газа
        </div>

        <div className={styles.indicators}>
          <div className={classNames(styles.sum, fonts.small)} data-aos="fade-up">
            <CountUp start={0} end={40} duration={2} delay={0.5} suffix=" млрд руб." />
          </div>

          <div className={classNames(styles.indicator, styles.sixth)} data-aos="fade-up" />
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2018 – 2023
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Расширение мощностей по выпуску стали с 1,5 до 3 млн тонн/год
        </div>

        <div className={styles.indicators}>
          <div className={classNames(styles.sum, fonts.small)} data-aos="fade-up">
            <CountUp start={0} end={70} duration={2} delay={0.5} suffix=" млрд руб." />
          </div>

          <div className={classNames(styles.indicator, styles.seventh)} data-aos="fade-up" />
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2021
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Запланирован ввод трубопрокатного комплекса по производству бесшовных труб
        </div>

        <div className={styles.indicators}>
          <div className={classNames(styles.sum, fonts.small)} data-aos="fade-up">
            <CountUp start={0} end={50} duration={2} delay={0.5} suffix=" млрд руб." />
          </div>

          <div className={classNames(styles.indicator, styles.eighth)} data-aos="fade-up" />
        </div>
      </div>
    </div>
  )
}
