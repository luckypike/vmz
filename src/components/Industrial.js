import React from 'react'
import classNames from 'classnames'

import styles from './Industrial.module.css'
import page from '../Page.module.css'
import fonts from '../Fonts.module.css'

export default function Industrial() {
  return (
    <section className={page.section}>
      <div className={page.block}>
        <div className={page.index}>02</div>
        <div className={page.description}>
          ОМК — в промышленном производстве Нижегородской области
        </div>
      </div>

      <div className={styles.industrial}>
        <div className={classNames(styles.title, fonts.h1)}>
          ОМК — в промышленном производстве Нижегородской области
        </div>

        <div className={styles.text}>
          Среди крупнейших предприятий Нижегородской области Выксунский металлургический завод занимает второе место. На долю ВМЗ в структуре промышленного производства региона приходится 12%.
        </div>

        <div className={styles.first}>
          <div className={classNames(styles.text, fonts.h3)}>
            Доля крупнейших предприятий в промышленном производстве области
          </div>
        </div>

        <div className={styles.second}>
          <div className={classNames(styles.text, fonts.h3)}>
            Налоги в консолидированный бюджет Нижегородской области за 2005-2012 гг., млн. руб
          </div>
        </div>
      </div>
    </section>
  )
}
