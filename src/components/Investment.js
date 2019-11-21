import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js'

export default function Investment () {
  const mount = useRef()

    const data = {
      labels: ["2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
      datasets: [{
        data: [1000, 1310, 1740, 2220, 1790, 1940, 3200, 3450, 1800, 1790, 2575, 3350, 2140, 1606, 2070],
        backgroundColor: 'transparent',
        pointBackgroundColor: '#E7422E',
        tension: 0.0,
        borderColor: '#E7422E',
        pointRadius: 4,
        borderWidth: 2
      }, {
        data: [590, 490, 550, 560, 60, 50, 430, 660, 47, 30, 28, 28, 25, 6, 19],
        backgroundColor: 'transparent',
        borderColor: '#727272',
        tension: 0.0,
        pointBackgroundColor: '#727272',
        pointRadius: 4,
        borderWidth: 2
      }]
    }

    const options = {
      legend: {
        display: false,
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
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            fontSize: 14,
            fontColor: '#727272',
            padding: 28
          }
        }],
        yAxes: [{
          gridLines: {
            drawBorder: false,
            offsetGridLines: true,
            display: false,

          },
          ticks: {
            fontSize: 14,
            padding: 25,
            beginAtZero: false,
            fontColor: '#E7422E',
            callback: function(value, index) {
              if (value !== 0) return value;
            }
          }
        }]
      }
    }

  useEffect(() => {
    const line = new Chart(mount.current, {
      type: 'line',
      data: data,
      options: options
    })
  }, [])

  return (
    <div>
      <canvas ref={mount} margin="0" />
    </div>
  )
}
