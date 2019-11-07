import React from 'react'
import classNames from 'classnames'

import Industrial from './components/Industrial'
import Social from './components/Social'

import styles from './App.module.css'
import page from './Page.module.css'
import fonts from './Fonts.module.css'

import logo from './images/logo.svg'

export default function App() {
  return (
    <div className={page.root}>
      <header className={styles.header}>
        <div className={styles.placeholder}></div>
        <div className={page.text}>
          В авангарде металлургии
        </div>
      </header>

      <section className={page.section}>
        <div className={styles.intro}>
          <div className={classNames(styles.text, fonts.h4)}>
            Выксунский металлургический завод (ВМЗ) в ноябре 1999 года вошел в состав Объединенной металлургической компании (ОМК). Благодаря этому союзу за 20 лет Выкса стала одним из крупнейших металлургических центров России и городом притяжения для современного искусства. Здесь промышленность и культура дополняют и развивают друг друга.
          </div>

          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>

            <div className={classNames(styles.link, fonts.small)}>
              Объединённая металлургическая компания
            </div>
          </div>
        </div>
      </section>

      <section className={page.section}>
        <div className={page.block}>
          <div className={page.index}>01</div>
          <div className={page.description}>
            Комплекс ТБД и ж/д колес мирового класса
          </div>
        </div>

        <div className={styles.worldwide}>
          <div className={styles.world}>
            <div className={classNames(styles.title, fonts.h1)}>
               В масштабах мира
            </div>

            <div className={classNames(styles.text, fonts.h4)}>
              За 20 лет ОМК удалось создать на выксунской площадке комплекс по производству труб большого диаметра и железнодорожных колес мирового класса, где выполняются изделия любого уровня сложности.
            </div>

            <div className={classNames(styles.title, fonts.h2)}>
              Крупнейшие трубопроводные проекты
            </div>

            <p>
              ВМЗ с момента вхождения в концерн выпустил более 30 млн тонн труб общей протяженностью 70 тыс. км — рекорд среди российских предприятий, — и более 12 млн железнодорожных колес, такого количества хватит на поезд длиной 37 тыс. км. Завод является единственным в России поставщиком колес для высокоскоростных поездов.
            </p>
          </div>
        </div>

        <div className={styles.pics}>
          <div className={styles.rgd}></div>
          <div className={styles.rgd_text}></div>
          <div className={styles.pipes}></div>
          <div className={styles.pipes_text}></div>

          <div className={styles.placeholder1}></div>
          <div className={styles.placeholder2}></div>
        </div>
      </section>

      <section className={page.section}>
        <div className={styles.projects}>
          <div className={classNames(styles.title, fonts.h2)}>
            Ключевые инвестиционные проекты
          </div>

          <div className={styles.text}>
            С момента вхождения ВМЗ в ОМК успешно реализовали пять крупных инвестиционных проектов по модернизации производства, еще три — в работе.<br /> Суммарные инвестиции ОМК в развитие выксунского производства стали, проката и труб к 2023 году должны превысить 300 млрд руб., а к 2025 году — достигнуть 350 млрд руб.
          </div>

          <div className={classNames(styles.investment, fonts.h3)}>
            Инвестпроекты по хронологии и с суммами
          </div>

          <div className={styles.placeholder3}></div>
        </div>
      </section>

      <section className={page.section}>
        <div className={styles.single_pipe}>
          <div className={classNames(styles.text, fonts.h1)}>
            Одним из самых значительных проектов стало создание на ВМЗ первого в России производства прямошовных одношовных труб большого диметра «русского размера» для магистральных трубопроводов.
          </div>

          <div className={styles.desc}>
            Этот импортозамещающий проект существенно повлиял на снижение доли импорта на всем отечественном рынке.
          </div>

          <div className={styles.import}>
            <div className={classNames(styles.title, fonts.h5)}>
              Доля импорта в потреблении
            </div>

            <div className={styles.placeholder4}></div>
          </div>

          <div className={styles.image}></div>
        </div>
      </section>

      <Industrial />

      <Social />
    </div>
  )
}
