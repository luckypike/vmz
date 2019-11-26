import React, { useState } from 'react'
import classNames from 'classnames'

import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor';
import fonts from '../Fonts.module.css'
import styles from './Structure.module.css'

export default function Structure () {

  const [visible, setVisible] = useState(false)

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setVisible(true)
    }
  }

  return(
    <div className={styles.root}>
      <div className={styles.schedule}>
        <VisibilitySensor delayedCall>
          <div className={styles.vrp}>
            <div className={classNames(styles.percent, fonts.h4, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 26 : 0} duration={2} delay={1} suffix=" %" />
            </div>

            <div className={classNames(styles.indicator, {[styles.first]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>

        <div className={classNames(styles.description, fonts.small)}>
          ООО «Лукойл Нижегороднефтесинтез»
        </div>
      </div>

      <div className={styles.schedule}>
        <VisibilitySensor delayedCall>
          <div className={styles.vrp}>
            <div className={classNames(styles.percent, fonts.h4, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 10 : 0} duration={2} delay={1} suffix=" %" />
            </div>

            <div className={classNames(styles.indicator, {[styles.second]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>

        <div className={classNames(styles.description, fonts.small)}>
          АО «Выксунский металлургический завод»
        </div>
      </div>

      <div className={styles.schedule}>
        <VisibilitySensor delayedCall>
          <div className={styles.vrp}>
            <div className={classNames(styles.percent, fonts.h4, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 6 : 0} duration={2} delay={1} suffix=" %" />
            </div>

            <div className={classNames(styles.indicator, {[styles.third]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>

        <div className={classNames(styles.description, fonts.small)}>
          ООО «Автозавод ГАЗ»
        </div>
      </div>

      <div className={styles.schedule}>
        <VisibilitySensor delayedCall>
          <div className={styles.vrp}>
            <div className={classNames(styles.percent, fonts.h4, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 3 : 0} duration={2} delay={1} suffix=" %" />
            </div>

            <div className={classNames(styles.indicator, {[styles.fourth]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>

        <div className={classNames(styles.description, fonts.small)}>
          ПАО «ГАЗ»
        </div>
      </div>

      <div className={styles.schedule}>
        <VisibilitySensor delayedCall>
          <div className={styles.vrp}>
            <div className={classNames(styles.percent, fonts.h4, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 2 : 0} duration={2} delay={1} suffix=" %" />
            </div>

            <div className={classNames(styles.indicator, {[styles.fifth]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>

        <div className={classNames(styles.description, fonts.small)}>
          ООО «Павловский автобус»
        </div>
      </div>

      <div className={styles.schedule}>
        <VisibilitySensor delayedCall onChange={onVisibilityChange} offset={{ top: 50 }}>
          <div className={styles.vrp}>
            <div className={classNames(styles.percent, fonts.h4, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 1 : 0} duration={2} delay={1} suffix=" %" />
            </div>

            <div className={classNames(styles.indicator, {[styles.sixth]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>

        <div className={classNames(styles.description, fonts.small)}>
          АО «Нижегородский химико-фармацевтический завод»
        </div>
      </div>

      <div className={styles.schedule}>
        <VisibilitySensor delayedCall>
          <div className={styles.vrp}>
            <div className={classNames(styles.percent, fonts.h4, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 1 : 0} duration={2} delay={1} suffix=" %" />
            </div>

            <div className={classNames(styles.indicator, {[styles.seventh]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>

        <div className={classNames(styles.description, fonts.small)}>
          ПАО «Русполимет»
        </div>
      </div>

      <div className={styles.schedule}>
        <VisibilitySensor delayedCall>
          <div className={styles.vrp}>
            <div className={classNames(styles.other, fonts.h4, {[styles.animated]: visible })}>
              <CountUp start={0} end={visible ? 50 : 0} duration={2} delay={1} suffix=" %" />
            </div>

            <div className={classNames(styles.indicator, {[styles.eighth]: visible}, {[styles.animated]: visible })} />
          </div>
        </VisibilitySensor>

        <div className={classNames(styles.description, fonts.small)}>
          Остальные
        </div>
      </div>


    </div>
  )
}
