import React from 'react'
import classNames from 'classnames'

import Slider from './Slider'
import Spoiler from './Spoiler'
import Graph from './Graph'

import styles from './Social.module.css'
import page from '../Page.module.css'
import fonts from '../Fonts.module.css'

export default function Industrial() {
  return (
    <div className={styles.root}>
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

          <Spoiler />
        </div>

        <div className={styles.salary}>
          <div className={styles.salary_2003}>
            <div className={styles.placeholder}>
              <div className={styles.worker_1} />
              <div className={styles.worker_2} />
            </div>

            <div className={styles.nn}>
              <div className={classNames(styles.sum_nn, fonts.h5)}>
                4,2 тыс. руб.
              </div>

              <div className={classNames(styles.desc, fonts.small)}>
                Средняя заработная плата в Нижегородской области в 2003 году
              </div>
            </div>

            <div className={styles.vyksa}>
              <div className={classNames(styles.sum_vyksa, fonts.h5)}>
                5,7 тыс. руб.
              </div>

              <div className={classNames(styles.desc, fonts.small)}>
                Средняя заработная плата на Выксунском металлургическом заводе в 2003 году
              </div>
            </div>
          </div>

          <div className={styles.salary_2019}>
            <div className={styles.placeholder}>
              <div className={styles.worker_3} />
              <div className={styles.worker_4} />
            </div>

            <div className={styles.nn}>
              <div className={classNames(styles.sum_nn, fonts.h5)}>
                33,9 тыс. руб.
              </div>

              <div className={classNames(styles.desc, fonts.small)}>
                Средняя заработная плата в Нижегородской области в 2019 году
              </div>
            </div>

            <div className={styles.vyksa}>
              <div className={classNames(styles.sum_vyksa, fonts.h5)}>
                51,9 тыс. руб.
              </div>

              <div className={classNames(styles.desc, fonts.small)}>
                Средняя заработная плата на Выксунском металлургическом заводе в 2019 году
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={page.section}>
        <div className={page.block}>
          <div className={page.description}>
            Чем привлекают туристов в моногород
          </div>
        </div>

        <div className={styles.social}>
          <div className={classNames(styles.title, fonts.h2)}>
             Культурные ценности
          </div>

          <div className={styles.text}>
            За 20 лет союза ОМК и ВМЗ инвестировали в Выксу 400 млрд руб. Предприятие уделяет внимание развитию городской среды: с 2011 года компания и завод проводят фестиваль «Арт Овраг», оказывают помощь спортивным центрам, школам и детским садам. С 2007 года на благотворительность и развитие городской среды ОМК и ВМЗ направили 7,4 млрд. руб. Выкса уже два года подряд входит в топ-10 самых комфортных для проживания средних моногородов России.
          </div>

          <Spoiler />
        </div>

        <div className={page.block}>
          <div className={page.description}>
            Чем привлекают туристов в моногород
          </div>
        </div>

        <div className={styles.social}>
          <div className={classNames(styles.title, fonts.h2)}>
             Культурные ценности
          </div>

          <div className={styles.text}>
            За 20 лет союза ОМК и ВМЗ инвестировали в Выксу 400 млрд руб. Предприятие уделяет внимание развитию городской среды: с 2011 года компания и завод проводят фестиваль «Арт Овраг», оказывают помощь спортивным центрам, школам и детским садам. С 2007 года на благотворительность и развитие городской среды ОМК и ВМЗ направили 7,4 млрд. руб. Выкса уже два года подряд входит в топ-10 самых комфортных для проживания средних моногородов России.
          </div>

          <Spoiler />

          <Graph />

          <div className={page.block}>
            <div className={page.description}>
              Инвестпроекты по хронологии с суммами
            </div>
          </div>
        </div>
      </section>

      <section>
        <Slider />
      </section>
    </div>
  )
}
