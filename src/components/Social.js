import React, { useState } from 'react'
import classNames from 'classnames'

import Photo from './Galery/Photo'
import Spoiler from './Spoiler'
import Graph from './Graph'

import styles from './Social.module.css'
import page from '../Page.module.css'
import fonts from '../Fonts.module.css'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export default function Industrial() {
  const [visible, setVisible] = useState(false)

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setVisible(true)
    }
  }

  return (
    <div className={styles.root}>
      <section className={page.section}>
        <div className={page.block}>
          <div className={page.index}>03</div>
          <div className={page.description}>
            Что делает завод для Выксы
          </div>
        </div>

        <div className={styles.social}>
          <div className={classNames(styles.title, fonts.h1)}>
             Градообразующее предприятие
          </div>

          <div className={styles.text}>
            С работой ВМЗ как с градообразующим предприятием тесно связано улучшение качества жизни в Выксе. На заводе, где трудится около 15 тыс. человек, за последние 20 лет появилось более 2,5 тыс. современных рабочих мест. Около 4 тыс. человек работают на предприятии уже более 20 лет. Средняя зарплата с момента вхождения ВМЗ в ОМК выросла в девять раз и сейчас в полтора раза выше средней по региону.
          </div>

          <Spoiler
            third={3}
            title="Чему учат заводчан"
            text={<Workers />}
           />
        </div>

        <div className={styles.salary}>
          <div className={styles.salary_2003}>
            <div className={styles.placeholder}>
              <div className={styles.worker_1} />
              <div className={styles.worker_2} />
            </div>

            <div className={classNames(styles.nn, {[styles.animated]: visible })}>
              <div className={classNames(styles.sum_nn, fonts.h5)}>
                <CountUp decimals={1} decimal="," end={visible ? 4.2 : 0} duration={1.6} suffix=" тыс. руб."/>
              </div>

              <div className={classNames(styles.desc, fonts.small)}>
                Средняя заработная плата в Нижегородской области в 2003 году
              </div>
            </div>

            <div className={classNames(styles.vyksa, {[styles.animated]: visible })}>
              <div className={classNames(styles.sum_vyksa, fonts.h5)}>
                <CountUp decimals={1} decimal="," end={visible ? 5.7 : 0} duration={1.6} suffix=" тыс. руб."/>
              </div>

              <div className={classNames(styles.desc, fonts.small)}>
                Средняя заработная плата на Выксунском металлургическом заводе в 2003 году
              </div>
            </div>
          </div>

          <div className={styles.salary_2019}>
            <div className={styles.placeholder}>
              <div className={styles.worker_3} />
              <div className={styles.worker_4} />
            </div>

            <VisibilitySensor delayedCall onChange={onVisibilityChange} offset={{ top: 50 }}>
              <div className={classNames(styles.nn, {[styles.animated]: visible })}>
                <div className={classNames(styles.sum_nn, fonts.h5)}>
                  <CountUp decimals={1} decimal="," end={visible ? 33.9 : 0} duration={1.6} suffix=" тыс. руб."/>
                </div>

                <div className={classNames(styles.desc, fonts.small)}>
                  Средняя заработная плата в Нижегородской области в 2019 году
                </div>
              </div>
            </VisibilitySensor>

            <div className={classNames(styles.vyksa, {[styles.animated]: visible })}>
              <div className={classNames(styles.sum_vyksa, fonts.h5)}>
                <CountUp decimals={1} decimal="," end={visible ? 51.9 : 0} duration={1.6} suffix=" тыс. руб."/>
              </div>

              <div className={classNames(styles.desc, fonts.small)}>
                Средняя заработная плата на Выксунском металлургическом заводе в 2019 году
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={page.section}>
        <div className={page.block}>
          <div className={page.description}>
            Чем привлекают туристов в моногород
          </div>
        </div>

        <div className={styles.social}>
          <div className={classNames(styles.title, fonts.h2)}>
             Культурные ценности
          </div>

          <div className={styles.text}>
            За 20 лет союза ОМК и ВМЗ инвестировали в Выксу 400 млрд руб. Предприятие уделяет внимание развитию городской среды: с 2011 года компания и завод проводят фестиваль «Арт Овраг», оказывают помощь спортивным центрам, школам и детским садам. С 2007 года на благотворительность и развитие городской среды ОМК и ВМЗ направили 7,4 млрд. руб. Выкса уже два года подряд входит в топ-10 самых комфортных для проживания средних моногородов России.
          </div>

          <Spoiler
            fouth={4}
            title="Заводская городская среда"
            text={<Urban />}
          />
        </div>

        <div className={page.block}>
          <div className={page.description}>
            Чем привлекают туристов в моногород
          </div>
        </div>

        <div className={styles.social}>
          <div className={classNames(styles.title, fonts.h2)}>
             Культурные ценности
          </div>

          <div className={styles.text}>
            За 20 лет союза ОМК и ВМЗ инвестировали в Выксу 400 млрд руб. Предприятие уделяет внимание развитию городской среды: с 2011 года компания и завод проводят фестиваль «Арт Овраг», оказывают помощь спортивным центрам, школам и детским садам. С 2007 года на благотворительность и развитие городской среды ОМК и ВМЗ направили 7,4 млрд. руб. Выкса уже два года подряд входит в топ-10 самых комфортных для проживания средних моногородов России.
          </div>

          <Spoiler
            fifth={5}
            title="Кто отвечает за экологичность завода"
            text={<Ecology />}
          />

          <Graph />

          <div className={page.block}>
            <div className={styles.line} />
            <div className={classNames(page.description, styles.chrono)}>
              Инвестпроекты по хронологии с суммами
            </div>
          </div>
        </div>
      </section>

      <section>
        <Photo />
      </section>
    </div>
  )
}

function Workers() {
  return(
    <div>
      Сегодня ВМЗ — один из самых безопасных заводов в черной металлургии. Коэффициент частоты травматизма с потерей рабочего времени на ВМЗ — лучший в мировой черной металлургии (LTIFR 0,23). Стратегическая цель ОМК — нулевой травматизм.<br />
      ОМК поддерживает профсоюзное движение, в компании работает социальный совет с участием профсоюзных лидеров и представителей высшего руководства.<br />
      Компания создает лучшие условия для развития кадров и повышения квалификации сотрудников. На ВМЗ работает собственный инженерно-технологический центр, учебный центр и корпоративный университет ОМК. Программы университета предполагают обучение персонала тому, что не связано напрямую с профессиональной деятельностью, но соответствует корпоративным ценностям: личностному росту, социальным и управленческим способностям. Также завод активно сотрудничает с научными и образовательными институтами, ЦНИИчермет им. Бардина, НИТУ «МИСиС» и ведущими профильными вузами области — НГТУ им. Р.Е. Алексеева и ННГУ им. Н.И. Лобачевского.<br />
      На предприятии используются прогрессивные технологии. Сотрудники завода внедряют инструменты цифровой трансформации в партнерстве с такими глобальными компаниями, как SAP, EY, McKinsey. Это проекты в сфере машинного зрения, «умных ремонтов», программы роботизации, сокращающие ручной труд, и многие другие.<br />
      ВМЗ стал первым металлургическим предприятием в мире, награжденным сначала бронзовой, а затем серебряной медалью Toyota Engineering за развитие производственной системы. Работа по повышению культуры производства — производственной системы — осуществляется непрерывно.<br />
      С 2004 года ОМК вручает лучшим сотрудникам своих предприятий премию Фонда братьев Баташевых. Писатели и режиссеры разных эпох затрагивали тему труда и профессионального мастерства в своих произведениях. В Советском Союзе тема человека труда в литературе была особенно любимой. Она была раскрыта в книгах Бориса Полевого, Даниила Гранина, Валентина Катаева, Юрия Крымова. Потом долгое время эта тема была незаслуженно забыта. Сегодня появились долгожданные продолжатели темы соцреализма. В ноябре-декабре в издательстве «Альпина» выходит документально-публицистическая книга «Русский размер. История трубы или новая индустриализация». Главную роль в ней играет Выксунский металлургический завод. Книга написана в стиле авторского репортажа о жизни и работе выксунских металлургов.
    </div>
  )
}

function Urban() {
  return(
    <div>
      Ежегодно ОМК выделяет до 860 млн руб. из своей прибыли на социальные и благотворительные проекты в регионах, где работают ее предприятия. Значительную часть этой суммы — на проекты в Выксе. Цель — повышение качества жизни сотрудников предприятия, решение социальных проблем и развитие комфортной среды моногорода. В том числе это грантовые конкурсы социальных и благотворительных проектов, развитие социального предпринимательства и добровольчества. В большинстве своем они связаны с целями национальных проектов России. Такие проекты успешно работают, поскольку осуществляются в тесном партнерстве с представителями администраций Выксы и Нижегородской области и местного сообщества. ОМК внедряет в этой сфере новые подходы. Например, оценивает социально-экономический эффект социальных инвестиций. В частности, в 2017 году ОМК провела такую оценку инициатив, реализованных в ходе одного из проектов, — грантового конкурса поддержки НКО. Коэффициент социального возврата на инвестиции (SROI) составил 3,4 к 1. Это значит, что на каждый инвестированный рубль ценность полученных социальных результатов составляет более трех рублей.<br />
      ОМК поддерживает в Выксе культурные и исторические традиции и создает условия для создания новых. В Выксе в гармонии существует башня инженера Шухова, 250-летняя усадьба Баташевых-Шепелевых, крупнейшее в Европе производство железнодорожных колес и стальных труб. И уже почти десять лет в начале лета в Выксе проходит фестиваль современной культуры за пределами столицы — «Арт-Овраг».<br />
      Не обязательно ехать на Урал, чтобы увидеть, как варят сталь, производят трубы и колеса: Выкса расположена на юге Нижегородской области, в 50 км от Мурома и в 360 км от Москвы. Не нужно лететь в Канны и Гластонбери, чтобы пройтись по музею современного искусства под открытым небом: на улицах Выксы можно встретить более 85 арт-объектов современных художников со всего света. Все желающие могут записаться на экскурсию по производству. Компания провела уже более 70 таких экскурсий для тысячи туристов из России и из-за рубежа. И здесь есть вся современная инфраструктура для туристов: отели, музеи, рестораны, арт-пространства, кафе и антикафе.<br />
      За 20 лет производственная и социальная сфера Выксы получила около 250 млрд руб. инвестиций ОМК. С 2007 года на благотворительность и развитие городской среды направлено 7,4 млрд руб. Благодаря активной позиции ОМК и выксунцев город привлекает инвестиции в благоустройство из федерального бюджета. Например, на реконструкцию городской набережной и парка — самых любимых мест горожан. Выкса уже два года подряд входит в топ-10 самых комфортных для проживания средних моногородов России.<br />
      По инициативе ОМК при поддержке региональных и местных органов власти, а также Минстроя России разработана концепция создания нового индустриально-туристского парка в Выксе. Парк призван стать главным в России региональным центром сохранения индустриального наследия. В Выксе на площадке бывшего чугунолитейного цеха планируется создать современный музейный комплекс, парк больших экспонатов промышленного наследия, детский образовательный центр, общественные ремесленные мастерские. Преимущества размещения такого парка в Нижегородской области перед другими промышленными регионами очевидны: объекты культурного наследия Выксы, объекты чугунолитейного производства, возможность посещения ВМЗ, современный музейный центр и близость к Москве, Санкт-Петербургу, Нижнему Новгороду и новому туристическому кластеру «Арзамас — Дивеево — Саров» позволят развивать здесь устойчивый поток посетителей. Прогнозируемый срок реализации — 2020-2023 годы.
    </div>
  )
}

function Ecology() {
  return(
    <div>
      Еще в 2013 году Выксунский металлургический завод перешел на раздельный сбор отходов. Из общей массы выделяют использованные каски, резинокомпозитные изделия, загрязненную нефтепродуктами тару, а также древесину, стекло, отходы полиэтилена, резину, бумагу и картон. Раздельный сбор отходов позволяет передать их подрядчикам для вторичного использования, что снижает негативное влияние на окружающую среду и продлевает сроки службы полигонов твердых бытовых отходов. Кроме того, по программе компенсационного озеленения сотрудники ВМЗ в 2016 и 2017 годах высадили в Выксе и Мотмосе 2900 деревьев лиственных и хвойных пород и кустарников. Также ежегодно тысячи заводчан и члены их семей участвовали в восстановлении выксунских лесов, пострадавших от пожаров 2010 года.
    </div>
  )
}
