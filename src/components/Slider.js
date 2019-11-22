import React, { useEffect } from 'react'
import classNames from 'classnames'
import Glide from '@glidejs/glide'

import styles from './Slider.module.css'

export default function Slider () {
  const mount = React.createRef()
  const slides = React.createRef()

  useEffect(() => {
    const glide = new Glide(mount.current, {
      type: 'carousel',
      perView: 2.2,
      peek: { before: 90, after: 180 },
      gap: 90
    })
    glide.mount()
  },[])

  return(
    <div className={classNames(styles.glide, 'glide')} ref={mount}>
      <div className="glide__track" data-glide-el="track">
        <div className={classNames('glide__slides', styles.slides)} ref={slides}>
          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.first)} />

            <div className={styles.title}>
              2003
            </div>

            <div className={styles.text}>
              В 2003 году на ВМЗ началась реконструкция колесопрокатного комплекса. Тогда рекордом предприятия был выпуск 600 тыс. железнодорожных колес в год.
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.second)} />

            <div className={styles.title}>
              2019
            </div>

            <div className={styles.text}>
              Сегодня предприятие выпускает 860 тыс. железнодорожных колес в год, в том числе, для скоростных поездов.
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.first)} />

            <div className={styles.title}>
              2007
            </div>

            <div className={styles.text}>
              В 2007 году на ВМЗ началось строительство металлургического комплекса стан-5000.
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.second)} />

            <div className={styles.title}>
              2019
            </div>

            <div className={styles.text}>
              Производственная мощность стана — 1,5 млн т широкого стального листа в год. На МКС-5000 работает тысяча сотрудников
            </div>
          </div>

          {/* <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.first)} />

            <div className={styles.title}>
              2008
            </div>

            <div className={styles.text}>
              В 2008 году на площадке ВМЗ началось строительство литейно-прокатного комплекса по выпуску стали для труб малого и среднего диаметра
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.second)} />

            <div className={styles.title}>
              2018
            </div>

            <div className={styles.text}>
              По итогам 2018 года ЛПК произвел 1,27 млн т рулонного и листового проката
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.first)} />

            <div className={styles.title}>
              2017
            </div>

            <div className={styles.text}>
              В 2017 году в Выксе началось строительство трубоэлектросварочного цеха № 1 в рамках программы технического перевооружения и модернизации производства обсадных, насосно-компрессорных и нефтегазопроводных труб
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.second)} />

            <div className={styles.title}>
              2019
            </div>

            <div className={styles.text}>
              Сейчас ТЭСЦ-1 выпускает 40 тыс. т продукции, освоил производство обсадных труб с резьбовым соединением
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.first)} />

            <div className={styles.title}>
              1978
            </div>

            <div className={styles.text}>
              Трубоэлектросварочный цех № 3 ВМЗ открылся в 1978 году
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.second)} />

            <div className={styles.title}>
              2018
            </div>

            <div className={styles.text}>
              В 2018 году в составе комплекса производства труб малого и среднего диаметра завода ТЭСЦ-3 и выпускает нефтегазопроводные и бесшовные трубы
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.first)} />

            <div className={styles.title}>
              1982
            </div>

            <div className={styles.text}>
              В 1982 году в Выксе был запущен трубоэлектросварочный цех № 4, выпускающий трубы большого диаметра
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.second)} />

            <div className={styles.title}>
              2019
            </div>

            <div className={styles.text}>
              Текущая мощность цеха 2 млн тонн труб большого диаметра в год. Вместе с толстолистовым прокатным станом МКС-5000 и цехом по нанесению антикоррозионного покрытия на трубы он образует дивизион труб большого диаметра ВМЗ
            </div>
          </div>
          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.first)} />

            <div className={styles.title}>
              2019
            </div>

            <div className={styles.text}>
              Текущая мощность цеха 2 млн тонн труб большого диаметра в год. Вместе с толстолистовым прокатным станом МКС-5000 и цехом по нанесению антикоррозионного покрытия на трубы он образует дивизион труб большого диаметра ВМЗ
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.second)} />

            <div className={styles.title}>
              1986
            </div>

            <div className={styles.text}>
              Трубоэлектросварочный цех № 5 был пущен в строй в 1986 году и позволил Выксунскому металлургическому заводу стать единственным в России производителем сварных обсадных труб
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.first)} />

            <div className={styles.title}>
              2019
            </div>

            <div className={styles.text}>
              Благодаря модернизации производственная мощность ТЭСЦ-5 выросла до 400 тыс. тонн в год
            </div>
          </div> */}
        </div>

        <div className={classNames(styles.bullets, "glide__bullets")} data-glide-el="controls[nav]">
          <div className="glide_bullet" data-glide-dir="=0">
            <div className={styles.qwe} />
          </div>
          <div className="glide_bullet" data-glide-dir="=1">
            <div className={styles.q} />
          </div>
          <div className="glide_bullet" data-glide-dir="=2">
            <div className={styles.q} />
          </div>
          <div className="glide_bullet" data-glide-dir="=3">
            <div className={styles.q} />
          </div>
        </div>
      </div>
    </div>
  )
}
