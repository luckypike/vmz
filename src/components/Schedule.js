import React, { useState } from 'react'
import classNames from 'classnames'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

import page from '../Page.module.css'
import fonts from '../Fonts.module.css'
import styles from './Schedule.module.css'

export default function Schedule () {

  const [visible, setVisible] = useState(false)

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setVisible(true)
    }
  }

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
          <div className={classNames(styles.sum, styles.first, {[styles.animated]: visible })}>
            <CountUp decimals={1} end={visible ? 1.6 : 0} />
            <div className={fonts.small}>млрд руб.</div>
          </div>

          <div className={classNames(styles.indicator, {[styles.animated]: visible, [styles.first]: visible })} />
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
          <div className={classNames(styles.sum, styles.second, {[styles.animated]: visible })}>
            <CountUp decimals={1} end={visible ? 5.7 : 0} duration={3} />
            <div className={fonts.small}>млрд руб.</div>
          </div>

          <div className={classNames(styles.indicator, {[styles.animated]: visible, [styles.second]: visible })} />
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
          <div className={classNames(styles.sum, styles.third, {[styles.animated]: visible })}>
            <CountUp end={visible ? 15 : 0} duration={4} />
            <div className={fonts.small}>млрд руб.</div>
          </div>

          <div className={classNames(styles.indicator, {[styles.animated]: visible, [styles.third]: visible })} />
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
          <div className={classNames(styles.sum, styles.fourth, {[styles.animated]: visible })}>
            <CountUp end={visible ? 32 : 0} duration={4} />
            <div className={fonts.small}>млрд руб.</div>
          </div>

          <div className={classNames(styles.indicator, {[styles.animated]: visible, [styles.fourth]: visible })} />
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
          <div className={classNames(styles.sum, styles.fifth, {[styles.animated]: visible })}>
            <CountUp end={visible ? 45 : 0} duration={4} />
            <div className={fonts.small}>млрд руб.</div>
          </div>

          <div className={classNames(styles.indicator, {[styles.animated]: visible, [styles.fifth]: visible })} />
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
          <div className={classNames(styles.sum, styles.sixth, {[styles.animated]: visible })}>
            <CountUp end={visible ? 40 : 0} duration={4} />
            <div className={fonts.small}>млрд руб.</div>
          </div>

          <div className={classNames(styles.indicator, {[styles.animated]: visible, [styles.sixth]: visible })} />
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2018 – 2023
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Расширение мощностей по выпуску стали с 1,5 до 3 млн тонн/год
        </div>

        <VisibilitySensor delayedCall onChange={onVisibilityChange} offset={{ top: 50 }}>
          <div className={styles.indicators}>
            <div className={classNames(styles.sum, styles.seventh, {[styles.animated]: visible })}>
              <CountUp end={visible ? 70 : 0} duration={4} />
              <div className={fonts.small}>млрд руб.</div>
            </div>

            <div className={classNames(styles.indicator, {[styles.animated]: visible, [styles.seventh]: visible })} />
          </div>
        </VisibilitySensor>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2021
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Запланирован ввод трубопрокатного комплекса по производству бесшовных труб
        </div>

        <div className={styles.indicators}>
          <div className={classNames(styles.sum, styles.eighth, {[styles.animated]: visible })}>
            <CountUp end={visible ? 50 : 0} duration={4} />
            <div className={fonts.small}>млрд руб.</div>
          </div>

          <div className={classNames(styles.indicator, {[styles.animated]: visible, [styles.eighth]: visible })} />
        </div>
      </div>

      <div className={page.block}>
        <div className={styles.line} />
        <div className={page.description}>
          Инвестпроекты по хронологии с суммами
        </div>
      </div>
    </div>
  )
}
