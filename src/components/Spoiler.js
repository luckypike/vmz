import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './Spoiler.module.css'
import fonts from '../Fonts.module.css'

export default function App() {
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
          <h3>wqeqweqweq</h3>
          <div>
            qweqweqweqwe
          </div>
        </div>
      </div>

        <div className={classNames(styles.spoiler)}>
          <div className={styles.gg} />
          <div className={classNames(styles.title, fonts.h3)}>
            От гвоздей до международных газопроводов
          </div>

          <div className={styles.more} onClick={() => [setActive(true), setSpoiler(!spoiler)]}>
            Читать дальше
          </div>
        </div>
    </div>
  )
}
