import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import Glide from '@glidejs/glide'

import fonts from '../Fonts.module.css'
import styles from './Slider.module.css'

export default function Slider () {
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
  }, [])

  return(
    <section>
      <div className={classNames(styles.glide, 'glide')} ref={mount}>
        <div className="glide__track" data-glide-el="track">
          <div className={classNames('glide__slides', styles.slides)} ref={slides}>
            <div className={classNames('glide__slide', styles.slide)} data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-out-quad">
              <div className={classNames(styles.image, styles.first)} />

              <div className={classNames(styles.title, fonts.h5)}>
                2003
              </div>

              <div className={classNames(styles.text, fonts.small)}>
                В 2003 году на ВМЗ ОМК выполнила реконструкцию колесопрокатного комплекса. Тогда рекордом предприятия был выпуск 600 тыс. железнодорожных колес в год
              </div>
            </div>

            <div className={classNames('glide__slide', styles.slide)} data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-out-quad"  data-aos-delay="200">
              <div className={classNames(styles.image, styles.second)} />

              <div className={classNames(styles.title, fonts.h5)}>
                2019
              </div>

              <div className={classNames(styles.text, fonts.small)}>
                Сегодня предприятие выпускает 860 тыс. железнодорожных колес в год, в том числе, для скоростных поездов
              </div>
            </div>

            <div className={classNames('glide__slide', styles.slide)} data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-out-quad" data-aos-delay="400">
              <div className={classNames(styles.image, styles.third)} />

              <div className={classNames(styles.title, fonts.h5)}>
                2007
              </div>

              <div className={classNames(styles.text, fonts.small)}>
                В 2007 году на ВМЗ ОМК построила металлургический комплекс стан-5000
              </div>
            </div>

            <div className={classNames('glide__slide', styles.slide)}>
              <div className={classNames(styles.image, styles.fourth)} />

              <div className={classNames(styles.title, fonts.h5)}>
                2019
              </div>

              <div className={classNames(styles.text, fonts.small)}>
                Мощность стана-5000 — 1,5 млн тонн широкого стального листа в год. Самый современный толстолистовой стан в стране обеспечивает завод листом для производства труб большого диаметра до 1420 мм. На нем работает тысяча сотрудников
              </div>
            </div>

            <div className={classNames('glide__slide', styles.slide)}>
              <div className={classNames(styles.image, styles.fifth)} />

              <div className={classNames(styles.title, fonts.h5)}>
                2008
              </div>

              <div className={classNames(styles.text, fonts.small)}>
                В 2008 году на площадке ВМЗ ОМК построила литейно-прокатный комплекс по выпуску стали для труб малого и среднего диаметра
              </div>
            </div>

            <div className={classNames('glide__slide', styles.slide)}>
              <div className={classNames(styles.image, styles.sixth)} />

              <div className={classNames(styles.title, fonts.h5)}>
                2018
              </div>

              <div className={classNames(styles.text, fonts.small)}>
                По итогам 2018 года ЛПК произвел 1,27 млн тонн рулонного и листового проката
              </div>
            </div>

            <div className={classNames('glide__slide', styles.slide)}>
              <div className={classNames(styles.image, styles.seventh)} />

              <div className={classNames(styles.title, fonts.h5)}>
                2017
              </div>

              <div className={classNames(styles.text, fonts.small)}>
                В 2017 году в Выксе ОМК построила трубоэлектросварочный цех №1 в рамках программы технического перевооружения и модернизации производства обсадных, насосно-компрессорных и нефтегазопроводных труб
              </div>
            </div>

            <div className={classNames('glide__slide', styles.slide)}>
              <div className={classNames(styles.image, styles.eighth)} />

              <div className={classNames(styles.title, fonts.h5)}>
                2019
              </div>

              <div className={classNames(styles.text, fonts.small)}>
                Сейчас ТЭСЦ-1 выпускает 40 тыс. тонн продукции, освоил производство обсадных труб с резьбовым соединением
              </div>
            </div>

            <div className={classNames('glide__slide', styles.slide)}>
              <div className={classNames(styles.image, styles.ninth)} />

              <div className={classNames(styles.title, fonts.h5)}>
                1978
              </div>

              <div className={classNames(styles.text, fonts.small)}>
                Трубоэлектросварочный цех №3 ВМЗ открылся в 1978 году
              </div>
            </div>

            <div className={classNames('glide__slide', styles.slide)}>
              <div className={classNames(styles.image, styles.tenth)} />

              <div className={classNames(styles.title, fonts.h5)}>
                2018
              </div>

              <div className={classNames(styles.text, fonts.small)}>
                В 2018 году в составе комплекса производства труб малого и среднего диаметра завода ТЭСЦ-3 и выпускает нефтегазопроводные и бесшовные трубы
              </div>
            </div>

            <div className={classNames('glide__slide', styles.slide)}>
              <div className={classNames(styles.image, styles.eleventh)} />

              <div className={classNames(styles.title, fonts.h5)}>
                1982
              </div>

              <div className={classNames(styles.text, fonts.small)}>
                В 1982 году в Выксе был запущен трубоэлектросварочный цех №4, выпускающий трубы большого диаметра. Однако они не подходили для постройки больших магистральных трубопроводов
              </div>
            </div>

            <div className={classNames('glide__slide', styles.slide)}>
              <div className={classNames(styles.image, styles.twelfth)} />

              <div className={classNames(styles.title, fonts.h5)}>
                2019
              </div>

              <div className={classNames(styles.text, fonts.small)}>
                После постройки Объединенной металлургической компанией новых станов на ВМЗ, здесь первым в России началось производство труб для магистральных трубопроводов такого качества и таких объемов, что впоследствии позволило отказаться от их импорта. Текущая мощность цеха по выпуску труб большого диаметра ВМЗ — до 2 млн тонн труб в год. Он работает в связке с толстолистовым станом-5000 и участком по нанесению антикоррозионного покрытия
              </div>
            </div>

            <div className={classNames('glide__slide', styles.slide)}>
              <div className={classNames(styles.image, styles.thirteenth)} />

              <div className={classNames(styles.title, fonts.h5)}>
                1986
              </div>

              <div className={classNames(styles.text, fonts.small)}>
                Трубоэлектросварочный цех №5 был пущен в строй в 1986 году и позволил Выксунскому металлургическому заводу стать единственным в России производителем сварных обсадных труб
              </div>
            </div>

            <div className={classNames('glide__slide', styles.slide)}>
              <div className={classNames(styles.image, styles.fourteenth)} />

              <div className={classNames(styles.title, fonts.h5)}>
                2019
              </div>

              <div className={classNames(styles.text, fonts.small)}>
                Благодаря модернизации производственная мощность цеха завода ОМК по выпуску обсадных труб выросла до 400 тыс. тонн в год
              </div>
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
              <div className={classNames(styles.bar, {[styles.twelfth]: index === 12})} />
              <div className={classNames(styles.bar, {[styles.thirteenth]: index === 13})} />
              <div className={classNames(styles.bar, {[styles.fourteenth]: index === 14})} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
