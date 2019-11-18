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
          Что деляет завод для Выксы
        </div>
      </div>

      <div className={styles.social}>
        <div className={classNames(styles.title, fonts.h1)}>
           Градообразующее предприятие
        </div>

        <div className={styles.text}>
          С работой ВМЗ как с градообразующим предприятием тесно связано улучшение качества жизни в Выксе. На заводе, где трудится около 15 тыс. человек, за последние 20 лет появилось более 2,5 тыс. современных рабочих мест. Около 4 тыс. человек работают на предприятии уже более 20 лет. Средняя зарплата с момента вхождения ВМЗ в ОМК выросла в девять раз и сейчас в полтора раза выше средней по региону.
        </div>
      </div>
    </section>
  )
}
