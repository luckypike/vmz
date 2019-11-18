import React from 'react'
import classNames from 'classnames'

import fonts from '../Fonts.module.css'
import page from '../Page.module.css'
import styles from './Investment.module.css'

export default function Investment () {
  return(
    <div className={styles.investment}>
      <div className={page.block}>
        <div className={classNames(page.description, styles.chrono)}>
          Инвестпроекты по хронологии с суммами
        </div>
      </div>

      <div className={styles.dinamic}>
        <div className={styles.numbers}>
          <div className={classNames(styles.small, styles.number)}>237,3</div>
          <div className={classNames(styles.small, styles.number)}>246,8</div>
          <div className={styles.number}>415,6</div>
          <div className={styles.number}>569,7</div>
          <div className={styles.number}>453,4</div>
          <div className={classNames(styles.small, styles.number)}>197</div>
          <div className={styles.number}>365</div>
          <div className={classNames(styles.big, styles.number)}>1060</div>
          <div className={classNames(styles.big, styles.number)}>766</div>
        </div>

        <div className={classNames(styles.years, fonts.small)}>
          <div className={styles.year}>2010</div>
          <div className={styles.year}>2011</div>
          <div className={styles.year}>2012</div>
          <div className={styles.year}>2013</div>
          <div className={styles.year}>2014</div>
          <div className={styles.year}>2015</div>
          <div className={styles.year}>2016</div>
          <div className={styles.year}>2017</div>
          <div className={styles.year}>2018</div>
        </div>

        <div className={classNames(styles.description, fonts.small)}>
          Динамика экспорта ТБД после ввода производства прямошовных одношовных труб большого диметра «русского размера» на ВМЗ
        </div>
      </div>

      <div className={styles.pipes} />

      <div className={styles.import}>
        <div className={styles.percents}>
          <div className={classNames(styles.small, styles.percent)}>13,2 %</div>
          <div className={classNames(styles.small, styles.percent)}>19,1 %</div>
          <div className={styles.percent}>2,6 %</div>
          <div className={styles.percent}>1,7 %</div>
          <div className={styles.percent}>1,1 %</div>
          <div className={classNames(styles.big, styles.percent)}>0,8 %</div>
          <div className={styles.number}>1,2 %</div>
          <div className={classNames(styles.big, styles.percent)}>0,4 %</div>
          <div className={classNames(styles.big, styles.percent)}>0,9 %</div>
        </div>

        <div className={classNames(styles.years, fonts.small)}>
          <div className={styles.year}>2010</div>
          <div className={styles.year}>2011</div>
          <div className={styles.year}>2012</div>
          <div className={styles.year}>2013</div>
          <div className={styles.year}>2014</div>
          <div className={styles.year}>2015</div>
          <div className={styles.year}>2016</div>
          <div className={styles.year}>2017</div>
          <div className={styles.year}>2018</div>
        </div>

        <div className={classNames(styles.description, fonts.small)}>
          Доля импорта в потреблении ТБД после ввода производства прямошовных одношовных труб большого диметра «русского размера» на ВМЗ
        </div>
      </div>
    </div>
  )
}
