import React from 'react'
import classNames from 'classnames'

import fonts from '../Fonts.module.css'
import styles from './Schedule.module.css'

export default function Schedule () {
  return(
    <div className={styles.root}>
      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2003
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Реконструкция колесопрокатного комплекса ВМЗ
        </div>

        <div className={classNames(styles.sum, fonts.small)}>
          1,6 млрд руб.
        </div>

        <div className={classNames(styles.indicator, styles.first)} />
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2004 – 2009
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Модернизация производства
        </div>

        <div className={classNames(styles.sum, fonts.small)}>
          6,5 млрд руб.
        </div>

        <div className={classNames(styles.indicator, styles.second)} />
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2005
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Строительство сверхсовременных линий для выпуска труб большого диаметра «русского размера»
        </div>

        <div className={classNames(styles.sum, fonts.small)}>
          15 млрд руб.
        </div>

        <div className={classNames(styles.indicator, styles.third)} />
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2008
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Строительство литейно-прокатного комплекса по производству трубной стали и проката
        </div>

        <div className={classNames(styles.sum, fonts.small)}>
          32 млрд руб.
        </div>

        <div className={classNames(styles.indicator, styles.fourth)} />
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2011
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Запуск самого современного стана-5000 по выпуску широкого листа
        </div>

        <div className={classNames(styles.sum, fonts.small)}>
          45 млрд руб.
        </div>

        <div className={classNames(styles.indicator, styles.fifth)} />
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2016 – 2019
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Модернизация производства сварных труб для добычи нефти и газа
        </div>

        <div className={classNames(styles.sum, fonts.small)}>
          40 млрд руб.
        </div>

        <div className={classNames(styles.indicator, styles.sixth)} />
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2018 – 2023
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Расширение мощностей по выпуску стали с 1,5 до 3 млн тонн/год
        </div>

        <div className={classNames(styles.sum, fonts.small)}>
          70 млрд руб.
        </div>

        <div className={classNames(styles.indicator, styles.seventh)} />
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2021
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Запланирован ввод трубопрокатного комплекса по производству бесшовных труб
        </div>

        <div className={classNames(styles.sum, fonts.small)}>
          50 млрд руб.
        </div>

        <div className={classNames(styles.indicator, styles.eighth)} />
      </div>

    </div>
  )
}
