import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import Glide from '@glidejs/glide'

import styles from './Slide.module.css'

export default function Slide () {
  const mount = React.createRef()
  const slides = React.createRef()

  const [index, setIndex] = useState(1)

  useEffect(() => {
    const glide = new Glide(mount.current, {
      type: 'slider',
      perView: 2.2,
      peek: { before: 90, after: 180 },
      gap: 90,
      breakpoints: {
        1430: {
          perView: 1,
          peek: { before: 0, after: 130 },
          gap: 16
        }
      }
    })

    glide.on('run', move => {
      setIndex(glide.index + 1)
    })

    glide.mount()
  },[])

  return(
    <div className={classNames(styles.glide, 'glide')} ref={mount}>
      <div className="glide__track" data-glide-el="track">
        <div className={classNames('glide__slides', styles.slides)} ref={slides}>
          <div className={classNames('glide__slide', styles.slide)} data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-out-quad">
            <div className={classNames(styles.image, styles.first)} />
          </div>

          <div className={classNames('glide__slide', styles.slide)} data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-out-quad"  data-aos-delay="200">
            <div className={classNames(styles.image, styles.second)} />
          </div>

          <div className={classNames('glide__slide', styles.slide)} data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-out-quad" data-aos-delay="400">
            <div className={classNames(styles.image, styles.third)} />
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.fourth)} />
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.fifth)} />
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.sixth)} />
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.seventh)} />
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.eighth)} />
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.ninth)} />
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.tenth)} />
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.eleventh)} />
          </div>
        </div>

        <div className={styles.bullets}>
          <div className={styles.buttons} data-glide-el="controls">
            <div className={styles.prev} data-glide-dir="<">
              <svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9H33M1 9L9 1M1 9L9 17" stroke="#E7422E" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.next} data-glide-dir=">">
              <svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 9H1M33 9L25 1M33 9L25 17" stroke="#E7422E" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className={styles.control}>
            <div className={classNames(styles.bar, {[styles.first]: index === 1})} />
            <div className={classNames(styles.bar, {[styles.second]: index === 2})} />
            <div className={classNames(styles.bar, {[styles.third]: index === 3})} />
            <div className={classNames(styles.bar, {[styles.fourth]: index === 4})} />
            <div className={classNames(styles.bar, {[styles.fifth]: index === 5})} />
            <div className={classNames(styles.bar, {[styles.sixth]: index === 6})} />
            <div className={classNames(styles.bar, {[styles.seventh]: index === 7})} />
            <div className={classNames(styles.bar, {[styles.eighth]: index === 8})} />
            <div className={classNames(styles.bar, {[styles.ninth]: index === 9})} />
            <div className={classNames(styles.bar, {[styles.tenth]: index === 10})} />
            <div className={classNames(styles.bar, {[styles.eleventh]: index === 11})} />
          </div>
        </div>
      </div>
    </div>
  )
}
