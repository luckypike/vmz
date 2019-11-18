import React from 'react'
import classNames from 'classnames'

import fonts from '../Fonts.module.css'
import styles from './Graph.module.css'

export default function Schedule () {
  return(
    <div className={styles.root}>
      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.h4)}>
          2006 – 2008
        </div>

        <div className={styles.graph}>
          <div className={classNames(styles.indicator, styles.first)} />
          <div className={classNames(styles.sum, fonts.h4)}>
            80 млн руб.
          </div>
        </div>

        <div className={classNames(styles.description, fonts.small)}>
          Термообезвреживание отходов смазочно-охлаждающей жидкости
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.h4)}>
          2009 – 2015
        </div>

        <div className={styles.graph}>
          <div className={classNames(styles.indicator, styles.second)} />
          <div className={classNames(styles.sum, fonts.h4)}>
            244,5 млн руб.
          </div>
        </div>

        <div className={classNames(styles.description, fonts.small)}>
          Строительство очистных сооружений
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.h4)}>
          2010 – 2012
        </div>

        <div className={styles.graph}>
          <div className={classNames(styles.indicator, styles.third)} />
          <div className={classNames(styles.sum, fonts.h4)}>
            199 млн руб.
          </div>
        </div>

        <div className={classNames(styles.description, fonts.small)}>
          Участок брикетирования стружки черных металлов
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.h4)}>
          2017 – 2018
        </div>

        <div className={styles.graph}>
          <div className={classNames(styles.indicator, styles.fourth)} />
          <div className={classNames(styles.sum, fonts.h4)}>
            35 млн руб.
          </div>
        </div>

        <div className={classNames(styles.description, fonts.small)}>
          Сокращение выбросов загрязняющих веществ
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.year, fonts.h4)}>
          2018
        </div>

        <div className={styles.graph}>
          <div className={classNames(styles.indicator, styles.fifth)} />
          <div className={classNames(styles.sum, fonts.h4)}>
            13 млн руб.
          </div>
        </div>

        <div className={classNames(styles.description, fonts.small)}>
          Строительство шумозащитного экрана
        </div>
      </div>
    </div>
  )
}
