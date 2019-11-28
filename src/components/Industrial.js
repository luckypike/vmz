import React, { useState } from 'react'
import classNames from 'classnames'
import VisibilitySensor from 'react-visibility-sensor'

import Structure from './Structure'
import Ellipse from './Ellipses/Ellipse'

import styles from './Industrial.module.css'
import page from '../Page.module.css'
import fonts from '../Fonts.module.css'

export default function Industrial() {
  const [visible, setVisible] = useState(false)

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setVisible(true)
    }
  }
  return (
    <div>
      <div className={page.block}>
        <div className={page.index}>02</div>
        <div className={page.description}>
          Передовики производства
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
            <div className={styles.circle}>
              <div className={styles.placeholder2} />
            </div>

            <div className={classNames(styles.desc, fonts.small)}>
              Структура ВРП Нижегородской области
            </div>
          </div>

          <div className={styles.production}>
            <Structure />

            <div className={classNames(styles.desc, fonts.small)}>
              Доля предприятий в структуре промышленного производства Нижегородской области
            </div>
          </div>

          <div className={styles.taxes}>

            <Ellipse />

            <VisibilitySensor delayedCall onChange={onVisibilityChange} offset={{ top: 200 }}>
              <div className={styles.description}>
                Налоговые отчисления ВМЗ в бюджеты всех уровней за последние 20 лет составили около 75 млрд руб. За это время еще 21 млрд руб. предприятие перечислило в различные фонды. Таким образом размер общих отчислений ВМЗ составил 96 млрд руб.
              </div>
            </VisibilitySensor>
          </div>

          <div className={classNames(styles.image, {[styles.animated]: visible })} />
        </div>
      </section>
    </div>
  )
}
