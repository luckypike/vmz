import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import Glide from '@glidejs/glide'

import fonts from '../../Fonts.module.css'
import styles from './Photo.module.css'

export default function Photo () {
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

            <div className={classNames(styles.text, fonts.small)}>
              ВМЗ — градообразующее предприятие для Выксы. И развитию города компания уделяет большое внимание
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)} data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-out-quad"  data-aos-delay="200">
            <div className={classNames(styles.image, styles.second)} />

            <div className={classNames(styles.text, fonts.small)}>
              С 2011 года в Выксе ОМК и фонд «ОМК-Участие» проводят фестиваль «Арт-овраг». В
              первый же год мероприятие собрало 5 тыс. гостей. В 2019 году на площадке находилось
              уже 22 тыс. человек
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)} data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-out-quad" data-aos-delay="400">
            <div className={classNames(styles.image, styles.third)} />

            <div className={classNames(styles.text, fonts.small)}>
              Ежегодно на фестиваль приезжают лучшие отечественные и зарубежные художники. За
              все время проведения мероприятия в Выксе появилось 85 стрит-арт объектов и 15
              объектов городского дизайна
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.fourth)} />

            <div className={classNames(styles.text, fonts.small)}>
              А для привлечения туристов ВМЗ запустило промышленные экскурсии по
              предприятию. Посмотреть, как работает завод, может любой желающий
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.fifth)} />

            <div className={classNames(styles.text, fonts.small)}>
              За два года предприятие посетило более 1.5 тыс. туристов российских и иностранных
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.sixth)} />

            <div className={classNames(styles.text, fonts.small)}>
              Компании заботятся и о кадрах. Своих лучших сотрудников ОМК и ВМЗ
              поддерживают, с 2004 года вручая им премии имени основателей завода — братьев
              Баташевых
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.seventh)} />

            <div className={classNames(styles.text, fonts.small)}>
              За все время на конкурс было подано более 2 тыс. заявок. Соискателями и лауреатами
              стали около 700 сотрудников ОМК
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.eighth)} />

            <div className={classNames(styles.text, fonts.small)}>
              На поддержку от ВМЗ могут рассчитывать и малые предприятия: в 2018 году в Выксе
              стартовала программа «Начни свое дело». Компания помогает предпринимателям
              реализовать их идеи по решению острых социальных проблем. За два года поддержку в
              рамках проекта получили 23 бизнес-идеи
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.ninth)} />

            <div className={classNames(styles.text, fonts.small)}>
              Знаковое событие — закрытие мартеновской печи на ВМЗ — отметили перфомансом
              «Страсти по мартену»
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.tenth)} />

            <div className={classNames(styles.text, fonts.small)}>
              На торжественной церемонии Катрин Колганофф, правнучка изобретателя печи Пьера
              Мартена, передала ноты своего прадеда в дар музею ВМЗ
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.eleventh)} />

            <div className={classNames(styles.text, fonts.small)}>
              Такое событие не осталось незамеченным — перфоманс получил приз «Проект года»
              государственной премии в области современного искусства «Инновация-2019»
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.twelfth)} />
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.thirteenth)} />
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.fourteenth)} />
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.fifteenth)} />
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.image, styles.sixteenth)} />
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
