import React, { useState } from 'react'
import classNames from 'classnames'
import VisibilitySensor from 'react-visibility-sensor'

import styles from './Spoiler.module.css'
import fonts from '../Fonts.module.css'

export default function App ({ second, third, fouth, fifth, title, text }) {
  const [spoiler, setSpoiler] = useState(false)
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)

  if (spoiler) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setVisible(true)
    }
  }

  return (
    <div className={styles.root}>
      <div className={classNames(styles.overlay, { [styles.active]: active })} onClick={() => [setActive(false), setSpoiler(false)]} />

      <div className={classNames(styles.modal, styles.effect, {[styles.show]: spoiler})}>
        <div className={classNames(styles.content)}>
          <div className={classNames(styles.modal_image, {[styles.second]: second, [styles.third]: third, [styles.fouth]: fouth, [styles.fifth]: fifth })}>
            <div className={styles.close} onClick={() => [setActive(false), setSpoiler(false)]}>
              <svg viewBox="0 0 16 16">
                <line x1="1" y1="1" x2="15" y2="15" />
                <line x1="1" y1="15" x2="15" y2="1" />
              </svg>
            </div>

            <div className={classNames(styles.title, fonts.h2)}>
              {title}
            </div>
          </div>

          <div className={classNames(styles.text)}>
            {text}
          </div>
        </div>
      </div>

        <div className={styles.spoiler} onClick={() => [setActive(true), setSpoiler(!spoiler)]} data-aos="fade-right">
          <div className={classNames(styles.image, {[styles.second]: second, [styles.third]: third, [styles.fouth]: fouth, [styles.fifth]: fifth })} />

          <div className={classNames(styles.title, fonts.h3)}>
            <VisibilitySensor onChange={onVisibilityChange}>
              <div>
                {title}
              </div>
            </VisibilitySensor>
          </div>

          <div className={styles.more}>
            <div className={styles.circle} style={{ animationPlayState: visible ? 'running' : 'paused' }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#E7422E"/>
              </svg>

              <div className={styles.plus}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V1Z" fill="#FAFAFA"/>
                  <path d="M15 7C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9L1 9C0.447715 9 -2.41411e-08 8.55228 0 8C2.41411e-08 7.44771 0.447715 7 1 7L15 7Z" fill="#FAFAFA"/>
                </svg>
              </div>
            </div>

            <div className={styles.read}>
              <div className={styles.placeholder} data-aos="fade-right" data-aos-delay="400">
                Узнать больше
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
