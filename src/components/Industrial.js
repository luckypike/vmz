import React, { useEffect } from 'react'
import classNames from 'classnames'
// import * as d3 from "d3";

import styles from './Industrial.module.css'
import page from '../Page.module.css'
import fonts from '../Fonts.module.css'

export default function Industrial() {
  return (
    <div>
      <div className={page.block}>
        <div className={page.index}>02</div>
        <div className={page.description}>
          Как ВМЗ влияет на регион присутствия
        </div>
      </div>

      <div className={styles.industrial}>
        <div className={classNames(styles.title, fonts.h1)}>
          Область металлургии
        </div>

        <div className={styles.text}>
          По величине Валового регионального продукта (ВРП) Нижегородская область входит в число 15 крупнейших региональных экономик России. Доля области в формировании ВВП страны составляет около 2%. Промышленные предприятия региона формируют ВРП на 30%. Среди крупнейших предприятий Нижегородской области Выксунский металлургический завод занимает второе место. На долю ВМЗ в структуре промышленного производства региона приходится 10%.
        </div>
      </div>

      <section>
        <div className={styles.graphs}>
          <div className={styles.structure}>
            <div className={styles.circle} />
            <div className={classNames(styles.desc, fonts.small)}>
              Структура ВРП Нижегородской области
            </div>
          </div>

          <div className={styles.production}>
            <div className={styles.placeholder} />

            <div className={classNames(styles.desc, fonts.small)}>
              Доля предприятий в структуре промышленного производства Нижегородской области
            </div>
          </div>

          <div className={styles.taxes}>
            <div className={styles.ellipse_1}>
              <div className={styles.ellipse_2}>
                <div className={styles.dues}>
                  <div className={classNames(styles.sum, fonts.h4)}>75 млрд руб.</div>
                  <div className={classNames(styles.taxe, fonts.small)}>Налоги</div>
                </div>
              </div>
            </div>

            <div className={classNames(styles.text, fonts.h4)}>96 млрд руб.</div>
            <div className={styles.desc}>Размер общих отчислений ВМЗ</div>
          </div>

          <div className={styles.description}>
            Налоговые отчисления ВМЗ в бюджеты всех уровней за последние 20 лет составили около 75 млрд руб. За это время еще 21 млрд руб. предприятие перечислило в различные фонды. Таким образом размер общих отчислений ВМЗ составил 96 млрд руб.
          </div>

          <div className={styles.image} />
        </div>
      </section>
    </div>
  )
}
