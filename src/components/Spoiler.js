import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './Spoiler.module.css'
import fonts from '../Fonts.module.css'

export default function App ({ second, third, fouth, fifth, title, text }) {
  const [spoiler, setSpoiler] = useState(false)
  const [active, setActive] = useState(false)

  if (spoiler) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  return (
    <div className={styles.root}>
      <div className={classNames(styles.overlay, { [styles.active]: active })} onClick={() => [setActive(false), setSpoiler(false)]} />

      <div className={classNames(styles.modal, styles.effect, {[styles.show]: spoiler})}>
        <div className={classNames(styles.content)}>
          <div className={classNames(styles.image, {[styles.second]: second, [styles.third]: third, [styles.fouth]: fouth, [styles.fifth]: fifth })}>
            <div className={styles.close} onClick={() => [setActive(false), setSpoiler(false)]}>
              <svg viewBox="0 0 16 16">
                <line x1="1" y1="1" x2="15" y2="15" />
                <line x1="1" y1="15" x2="15" y2="1" />
              </svg>
            </div>
          </div>
          <div className={classNames(styles.title, fonts.h2)}>
            {title}
          </div>

          <div className={classNames(styles.text)}>
            {text}
          </div>
        </div>
      </div>

        <div className={classNames(styles.spoiler, {[styles.second]: second, [styles.third]: third, [styles.fouth]: fouth, [styles.fifth]: fifth, [styles.blur]: active })}  onClick={() => [setActive(true), setSpoiler(!spoiler)]}>
          <div className={classNames(styles.title, fonts.h3)}>
            {title}
          </div>

          <div className={styles.more}>
            Читать дальше
          </div>
        </div>
    </div>
  )
}
