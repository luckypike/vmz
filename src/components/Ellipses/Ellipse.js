import React, { useEffect, useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import classNames from 'classnames'

import styles from './Ellipse.module.css'
import fonts from '../../Fonts.module.css'

export default function Ellipse () {

  const [visible, setVisible] = useState(false)

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setVisible(true)
    }
  }

  useEffect(() => {
    if (visible) {
      document.querySelector('circle').style.animationPlayState = "running"
    }
  }, [visible])

  return(
    <>
      <VisibilitySensor delayedCall onChange={onVisibilityChange} offset={{ top: 50 }}>
        <div className={styles.ellipse1}>
          <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="180" cy="180" r="176" stroke="#E8E8E8" strokeWidth="8"/>
          </svg>

          <div className={styles.ellipse2}>
            <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path style={{ animationPlayState: visible ? 'running' : 'paused' }} d="M171.571 4C268.773 4 347.571 82.7979 347.571 180C347.571 277.202 268.773 356 171.571 356C93.1952 356 26.7848 304.769 4 233.968" stroke="#E7422E" strokeWidth="8"/>
            </svg>
            <div className={styles.dues}>
              <div className={classNames(styles.text, fonts.h4, {[styles.animated]: visible })}>96 млрд руб.</div>
              <div className={classNames(styles.desc, fonts.small, {[styles.animated]: visible })}>Размер общих отчислений ВМЗ</div>

              <div className={classNames(styles.sum, fonts.h4, {[styles.animated]: visible })}>75 млрд руб.</div>
              <div className={classNames(styles.taxe, fonts.small, {[styles.animated]: visible })}>Налоги</div>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    </>
  )
}
