import React from 'react'
import classNames from 'classnames'

import fonts from '../Fonts.module.css'
import styles from './Schedule.module.css'

export default function Schedule () {
  return(
    <div className={styles.root}>
      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.h4)}>
          2003
        </div>

        <div className={styles.graph}>
          <div className={classNames(styles.indicator, styles.first)} />
          <div className={classNames(styles.sum, fonts.h4)}>
            1,6 млрд руб.
          </div>
        </div>

        <div className={classNames(styles.description, fonts.small)}>
          Реконструкция колесопрокатного комплекса ВМЗ
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.h4)}>
          2004 – 2009
        </div>

        <div className={styles.graph}>
          <div className={classNames(styles.indicator, styles.second)} />
          <div className={classNames(styles.sum, fonts.h4)}>
            6,5 млрд руб.
          </div>
        </div>

        <div className={classNames(styles.description, fonts.small)}>
          Модернизация производства
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.h4)}>
          2005
        </div>

        <div className={styles.graph}>
          <div className={classNames(styles.indicator, styles.third)} />
          <div className={classNames(styles.sum, fonts.h4)}>
            15 млрд руб.
          </div>
        </div>

        <div className={classNames(styles.description, fonts.small)}>
          Строительство сверхсовременных линий для выпуска труб большого диаметра «русского размера»
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.h4)}>
          2008
        </div>

        <div className={styles.graph}>
          <div className={classNames(styles.indicator, styles.fourth)} />
          <div className={classNames(styles.sum, fonts.h4)}>
            32 млрд руб.
          </div>
        </div>

        <div className={classNames(styles.description, fonts.small)}>
          Строительство литейно-прокатного комплекса по производству трубной стали и проката
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.h4)}>
          2011
        </div>

        <div className={styles.graph}>
          <div className={classNames(styles.indicator, styles.fifth)} />
          <div className={classNames(styles.sum, fonts.h4)}>
            45 млрд руб.
          </div>
        </div>

        <div className={classNames(styles.description, fonts.small)}>
          Запуск самого современного стана-5000 по выпуску широкого листа
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.h4)}>
          2016 – 2019
        </div>

        <div className={styles.graph}>
          <div className={classNames(styles.indicator, styles.sixth)} />
          <div className={classNames(styles.sum, fonts.h4)}>
            40 млрд руб.
          </div>
        </div>

        <div className={classNames(styles.description, fonts.small)}>
          Модернизация производства сварных труб для добычи нефти и газа
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.h4)}>
          2018 – 2023
        </div>

        <div className={styles.graph}>
          <div className={classNames(styles.indicator, styles.seventh)} />
          <div className={classNames(styles.sum, fonts.h4)}>
            70 млрд руб.
          </div>
        </div>

        <div className={classNames(styles.description, fonts.small)}>
          Расширение мощностей по выпуску стали с 1,5 до 3 млн тонн/год
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.h4)}>
          2021
        </div>

        <div className={styles.graph}>
          <div className={classNames(styles.indicator, styles.eighth)} />
          <div className={classNames(styles.sum, fonts.h4)}>
            50 млрд руб.
          </div>
        </div>

        <div className={classNames(styles.description, fonts.small)}>
          Запланирован ввод трубопрокатного комплекса по производству бесшовных труб
        </div>
      </div>
    </div>
  )
}
