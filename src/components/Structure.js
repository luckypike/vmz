import React from 'react'
import classNames from 'classnames'

import fonts from '../Fonts.module.css'
import styles from './Structure.module.css'

export default function Structure () {
  return(
    <div className={styles.root}>
      <div className={styles.schedule}>
        <div className={classNames(styles.percent, fonts.h4)}>26 %</div>

        <div className={classNames(styles.indicator, styles.first)} />

        <div className={classNames(styles.description, fonts.small)}>
          ООО «Лукойл Нижегороднефтесинтез»
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.percent, fonts.h4)}>10 %</div>

        <div className={classNames(styles.indicator, styles.second)} />

        <div className={classNames(styles.description, fonts.small)}>
          АО «Выксунский металлургический завод»
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.percent, fonts.h4)}>6 %</div>

        <div className={classNames(styles.indicator, styles.third)} />

        <div className={classNames(styles.description, fonts.small)}>
           ООО «Автозавод ГАЗ»
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.percent, fonts.h4)}>3 %</div>

        <div className={classNames(styles.indicator, styles.fourth)} />

        <div className={classNames(styles.description, fonts.small)}>
           ПАО «ГАЗ»
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.percent, fonts.h4)}>2 %</div>

        <div className={classNames(styles.indicator, styles.fifth)} />

        <div className={classNames(styles.description, fonts.small)}>
           ООО «Павловский автобус»
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.percent, fonts.h4)}>1 %</div>

        <div className={classNames(styles.indicator, styles.sixth)} />

        <div className={classNames(styles.description, fonts.small)}>
           АО «Нижегородский химико-фармацевтический завод»
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={classNames(styles.percent, fonts.h4)}>1 %</div>

        <div className={classNames(styles.indicator, styles.seventh)} />

        <div className={classNames(styles.description, fonts.small)}>
           ПАО «Русполимет»
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={fonts.h4}>50 %</div>

        <div className={classNames(styles.indicator, styles.eighth)} />

        <div className={classNames(styles.description, fonts.small)}>
           Остальные
        </div>
      </div>
    </div>
  )
}
