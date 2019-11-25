import React, { useState } from 'react'
import classNames from 'classnames'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor';

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

        <VisibilitySensor delayedCall>
          <div className={styles.indicators}>
            <div className={classNames(styles.sum, fonts.small, {[styles.animated]: visible })}>
              <CountUp decimals={1} start={0} end={visible ? 1.6 : 0} duration={2} delay={1} suffix=" млрд руб." />
            </div>

            <div className={classNames(styles.indicator, {[styles.first]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2004 – 2009
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Модернизация производства
        </div>

        <VisibilitySensor delayedCall>
          <div className={styles.indicators}>
            <div className={classNames(styles.sum, fonts.small, {[styles.animated]: visible })}>
              <CountUp decimals={1} start={0} end={visible ? 5.7 : 0} duration={2} delay={1} suffix=" млрд руб." />
            </div>

            <div className={classNames(styles.indicator, {[styles.second]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2005
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Строительство сверхсовременных линий для выпуска труб большого диаметра «русского размера»
        </div>

        <VisibilitySensor delayedCall>
          <div className={styles.indicators}>
            <div className={classNames(styles.sum, fonts.small, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 15 : 0} duration={2} delay={1} suffix=" млрд руб." />
            </div>

            <div className={classNames(styles.indicator, {[styles.third]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2008
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Строительство литейно-прокатного комплекса по производству трубной стали и проката
        </div>

        <VisibilitySensor delayedCall>
          <div className={styles.indicators}>
            <div className={classNames(styles.sum, fonts.small, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 32 : 0} duration={2} delay={1} suffix=" млрд руб." />
            </div>

            <div className={classNames(styles.indicator, {[styles.fourth]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2011
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Запуск самого современного стана-5000 по выпуску широкого листа
        </div>

        <VisibilitySensor delayedCall>
          <div className={styles.indicators}>
            <div className={classNames(styles.sum, fonts.small, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 45 : 0} duration={2} delay={1} suffix=" млрд руб." />
            </div>

            <div className={classNames(styles.indicator, {[styles.fifth]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2016 – 2019
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Модернизация производства сварных труб для добычи нефти и газа
        </div>

        <VisibilitySensor delayedCall>
          <div className={styles.indicators}>
            <div className={classNames(styles.sum, fonts.small, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 40 : 0} duration={2} delay={1} suffix=" млрд руб." />
            </div>

            <div className={classNames(styles.indicator, {[styles.sixth]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>
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
            <div className={classNames(styles.sum, fonts.small, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 70 : 0} duration={2} delay={1} suffix=" млрд руб." />
            </div>

            <div className={classNames(styles.indicator, {[styles.seventh]: visible}, {[styles.animated]: visible })} />
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

        <VisibilitySensor delayedCall>
          <div className={styles.indicators}>
            <div className={classNames(styles.sum, fonts.small, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 50 : 0} duration={2} delay={1} suffix=" млрд руб." />
            </div>

            <div className={classNames(styles.indicator, {[styles.eighth]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>
      </div>
    </div>
  )
}
