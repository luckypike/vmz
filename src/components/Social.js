import React from 'react'
import classNames from 'classnames'

import styles from './Social.module.css'
import page from '../Page.module.css'
import fonts from '../Fonts.module.css'

export default function Industrial() {
  return (
    <section className={page.section}>
      <div className={page.block}>
        <div className={page.index}>03</div>
        <div className={page.description}>
          Роль ВМЗ в социально-экономическом развитии региона
        </div>
      </div>

      <div className={styles.social}>
        <div className={classNames(styles.title, fonts.h1)}>
           Роль ВМЗ в социально-экономическом развитии региона
        </div>

        <div className={classNames(styles.text, fonts.h1)}>
          На ВМЗ трудится трудится около 15 тыс. человек, примерно 30% населения Выксы
        </div>

        <div className={styles.description}>
          Как градообразующее предприятие ВМЗ последовательно обеспечивает улучшение условий жизни в регионе. На заводе, где трудится около 15 тыс. человек, за последние 20 лет появилось более 2,5 тыс. современных рабочих мест. Средняя зарплата с момента вхождения ВМЗ в ОМК выросла в рублях в девять раз и сейчас в 1,5 раза выше средней по региону.
        </div>
      </div>
    </section>
  )
}
