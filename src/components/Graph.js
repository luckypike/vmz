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

        <div className={styles.indicators}>
          <div className={classNames(styles.sum, styles.first, {[styles.animated]: visible })}>
            <CountUp className={classNames(styles.num, fonts.h5)} end={visible ? 80 : 0} duration={2} />
            <div className={classNames(fonts.h5, styles.rub)}>млрд руб.</div>
          </div>

          <div className={classNames(styles.indicator_m, {[styles.animated]: visible, [styles.first]: visible })} />
        </div>

        <div className={classNames(styles.indicator, {[styles.animated]: visible, [styles.first]: visible })} />
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2009 – 2015
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Строительство очистных сооружений
        </div>

        <div className={styles.indicators}>
          <div className={classNames(styles.sum, styles.second, {[styles.animated]: visible })}>
            <CountUp className={classNames(styles.num, fonts.h5)} decimals={1} decimal="," end={visible ? 244.5 : 0} duration={1.5} />
            <div className={classNames(fonts.h5, styles.rub)}>млрд руб.</div>
          </div>

          <div className={classNames(styles.indicator_m, {[styles.animated]: visible, [styles.second]: visible })} />
        </div>

        <div className={classNames(styles.indicator, {[styles.animated]: visible, [styles.second]: visible })} />
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2010 – 2012
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Участок брикетирования стружки черных металлов
        </div>

        <VisibilitySensor delayedCall onChange={onVisibilityChange} offset={{ top: 50 }}>
          <div className={styles.indicators}>
            <div className={classNames(styles.sum, styles.third, {[styles.animated]: visible })}>
              <CountUp className={classNames(styles.num, fonts.h5)} end={visible ? 199 : 0} duration={2} />
              <div className={classNames(fonts.h5, styles.rub)}>млрд руб.</div>
            </div>

            <div className={classNames(styles.indicator_m, {[styles.animated]: visible, [styles.third]: visible })} />
          </div>
        </VisibilitySensor>

        <div className={classNames(styles.indicator, {[styles.animated]: visible, [styles.third]: visible })} />
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2017 – 2018
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Сокращение выбросов загрязняющих веществ
        </div>

        <div className={styles.indicators}>
          <div className={classNames(styles.sum, styles.fourth, {[styles.animated]: visible })}>
            <CountUp className={classNames(styles.num, fonts.h5)} end={visible ? 35 : 0} duration={2} />
            <div className={classNames(fonts.h5, styles.rub)}>млрд руб.</div>
          </div>

          <div className={classNames(styles.indicator_m, {[styles.animated]: visible, [styles.fourth]: visible })} />
        </div>

        <div className={classNames(styles.indicator, {[styles.animated]: visible, [styles.fourth]: visible })} />
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.small)}>
          2018
        </div>

        <div className={classNames(styles.description, fonts.h5)}>
          Строительство шумозащитного экрана
        </div>

        <div className={styles.indicators}>
          <div className={classNames(styles.sum, styles.fifth, {[styles.animated]: visible })}>
            <CountUp className={classNames(styles.num, fonts.h5)} end={visible ? 13 : 0} duration={2} />
            <div className={classNames(fonts.h5, styles.rub)}>млрд руб.</div>
          </div>

          <div className={classNames(styles.indicator_m, {[styles.animated]: visible, [styles.fifth]: visible })} />
        </div>

        <div className={classNames(styles.indicator, {[styles.animated]: visible, [styles.fifth]: visible })} />
      </div>
    </div>
  )
}
