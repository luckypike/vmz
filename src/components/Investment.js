import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js'
import VisibilitySensor from 'react-visibility-sensor'

import styles from './Investment.module.css'

export default function Investment () {
  const [visible, setVisible] = useState(false)

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setVisible(true)
    }
  }

  const graphRef = useRef()

  const datasets = {
    export: [
      { y: 1000, x: 0 },
      { y: 1310, x: 1 },
      { y: 1740, x: 2 },
      { y: 2220, x: 3 },
      { y: 1790, x: 4 },
      { y: 1940, x: 5 },
      { y: 3200, x: 6 },
      { y: 3450, x: 7 },
      { y: 1800, x: 8 },
      { y: 1790, x: 9 },
      { y: 2575, x: 10 },
      { y: 3350, x: 11 },
      { y: 2140, x: 12 },
      { y: 1606, x: 13 },
      { y: 2070, x: 14 }
    ],
    import: [
      { y: 590, x: 0 },
      { y: 490, x: 1 },
      { y: 550, x: 2 },
      { y: 560, x: 3 },
      { y: 60, x: 4 },
      { y: 50, x: 5 },
      { y: 430, x: 6 },
      { y: 660, x: 7 },
      { y: 47, x: 8 },
      { y: 30, x: 9 },
      { y: 28, x: 10 },
      { y: 28, x: 11 },
      { y: 25, x: 12 },
      { y: 6, x: 13 },
      { y: 19, x: 14 }
    ]
  }
  const options = {
    legend: {
      display: false,
    },

    animation: {
      duration: 0 // general animation time
    },

    gridLines: {
      color: "transparent",
      display: true,
      drawBorder: false,
      zeroLineColor: "#000",
      zeroLineWidth: 1
    },
    scales: {
      xAxes: [{
        type: 'linear',
        gridLines: {
          display: false,
          drawBorder: true,
        },
        ticks: {
          fontSize: 14,
          fontColor: '#727272',
          padding: 28,
          min: 0,
          max: 14,
          userCallback: (label, index, labels) => (label + 2004)
        }
      }],
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            // display: false
          },
          ticks: {
            fontSize: 14,
            padding: 25,
            max: 3500,
            min: 0,
            beginAtZero: false,
            fontColor: '#E7422E'
            // callback: function(value, index) {
            //   if (value !== 0) return value;
            // }
          }
        }
      ]
    }
  }

  useEffect(() => {
    const chart = new Chart(graphRef.current, {
      type: 'line',
      data: {
        labels: [{0: '2004'}, "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
          {
            data: [datasets.export[0]],
            backgroundColor: 'transparent',
            pointBackgroundColor: '#E7422E',
            tension: 0.0,
            borderColor: '#E7422E',
            pointRadius: 4,
            borderWidth: 2
          },
          {
            data: [datasets.import[0]],
            backgroundColor: 'transparent',
            borderColor: '#727272',
            tension: 0.0,
            pointBackgroundColor: '#727272',
            pointRadius: 4,
            borderWidth: 2
          }
        ]
      },
      options: options
    })

    const next = () => {
      const dataExport = chart.data.datasets[0].data
      const dataImport = chart.data.datasets[1].data
      const count = dataExport.length

      dataExport[count] = dataExport[count - 1]
      dataImport[count] = dataImport[count - 1]
      chart.update({ duration: 0 })

      dataExport[count] = datasets.export[count]
      dataImport[count] = datasets.import[count]
      chart.update({ duration: 200, easing: 'linear' })

      if (count < datasets.export.length) {
        setTimeout(next, 200)
      }
    }

    if (visible === true) {
      setTimeout(next, 200)
    }

  }, [visible])

  return (
    <div className={styles.investment}>
      <VisibilitySensor delayedCall onChange={onVisibilityChange} offset={{ top: 50 }}>
        <canvas className={styles.graph} ref={graphRef} margin="0" />
      </VisibilitySensor>

      <div className={styles.legend}>
        <div className={styles.indicator_p}></div>
        <div className={styles.production}>
          Производство ТБД в России, тыс. тонн
        </div>

        <div className={styles.indicator_i}></div>
        <div className={styles.import}>
          Импорт, тыс. тонн
        </div>
      </div>

      <div className={styles.description}>
        Динамика экспорта ТБД после ввода производства прямошовных одношовных труб большого диаметра «русского размера» на ВМЗ и последующем запуске других российских производств
      </div>
    </div>
  )
}
