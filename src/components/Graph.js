import React, { useState } from 'react'
import classNames from 'classnames'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor';

import fonts from '../Fonts.module.css'
import styles from './Graph.module.css'

export default function Graph () {

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
          2006 – 2008
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Термообезвреживание отходов смазочно-охлаждающей жидкости
        </div>

        <VisibilitySensor delayedCall>
          <div className={styles.indicators}>
            <div className={classNames(styles.sum, fonts.small, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 80 : 0} duration={2} delay={1} suffix=" млрд руб." />
            </div>

            <div className={classNames(styles.indicator, {[styles.first]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2009 – 2015
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Строительство очистных сооружений
        </div>

        <VisibilitySensor delayedCall>
          <div className={styles.indicators}>
            <div className={classNames(styles.sum, fonts.small, {[styles.animated]: visible })}>
              <CountUp decimals={1} start={0} end={visible ? 244.5 : 0} duration={2} delay={1} suffix=" млрд руб." />
            </div>

            <div className={classNames(styles.indicator, {[styles.second]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2010 – 2012
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Участок брикетирования стружки черных металлов
        </div>

        <VisibilitySensor delayedCall>
          <div className={styles.indicators}>
            <div className={classNames(styles.sum, fonts.small, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 199 : 0} duration={2} delay={1} suffix=" млрд руб." />
            </div>

            <div className={classNames(styles.indicator, {[styles.third]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2017 – 2018
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Сокращение выбросов загрязняющих веществ
        </div>

        <VisibilitySensor delayedCall onChange={onVisibilityChange} offset={{ top: 50 }}>
          <div className={styles.indicators}>
            <div className={classNames(styles.sum, fonts.small, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 35 : 0} duration={2} delay={1} suffix=" млрд руб." />
            </div>

            <div className={classNames(styles.indicator, {[styles.fourth]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2018
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Строительство шумозащитного экрана
        </div>

        <VisibilitySensor delayedCall>
          <div className={styles.indicators}>
            <div className={classNames(styles.sum, fonts.small, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 13 : 0} duration={2} delay={1} suffix=" млрд руб." />
            </div>

            <div className={classNames(styles.indicator, {[styles.fifth]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>
      </div>
    </div>
  )
}
