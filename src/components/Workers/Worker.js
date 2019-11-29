import React, { useState, useEffect } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import styles from './Worker.module.css'

export default function Worker () {

  const [visible, setVisible] = useState(false)

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setVisible(true)
    }
  }

  useEffect(() => {
    if (visible) {
      document.getElementById("anime").beginElement()
    }
  }, [visible])

  return(
    <>
      <VisibilitySensor delayedCall onChange={onVisibilityChange}>
        <div className={styles.worker}>
          <svg  width="90" height="279" viewBox="0 0 90 279" fill="none" xmlns="http://www.w3.org/2000/svg">
            {visible &&
              <linearGradient id="lg" x1="0.5" y1="1" x2="0.5" y2="0">
                <stop offset="0%" stopOpacity="1" stopColor="#E8E8E8"/>
                <stop offset="100%" stopOpacity="1" stopColor="#E8E8E8">
                  <animate id="anime" attributeName="offset" values="0;1" dur="0.5s" begin="indefinite" />
                </stop>
                <stop offset="0%" stopOpacity="0" stopColor="#E8E8E8"/>
              </linearGradient>
            }

            <path d="M15.6188 148.388C14.5193 147.513 14.8634 148.019 13.6592 147.144C13.4573 147 13.2478 146.88 13.0309 146.767L1.34806 149.308C1.34806 149.308 -0.267494 120.409 0.0466385 120.386C0.128914 120.379 2.98605 119.685 7.1521 118.667C6.37424 114.164 5.63377 109.594 5.52906 107.905C5.40191 105.937 5.26728 104.458 5.18501 103.659C4.72876 103.697 4.26504 103.667 3.99577 103.471C3.33759 102.988 3.31515 100.982 3.30766 97.6107C3.30019 94.2396 3.12816 94.7751 3.79383 93.674C4.4595 92.5805 5.97034 91.7434 5.97034 91.7434C5.97034 91.7434 5.81328 89.2245 6.88284 83.0329C7.95988 76.8488 8.49839 77.1279 7.06234 75.9589C5.62629 74.7824 5.38695 72.5878 6.20221 70.6346C7.01746 68.6813 7.5859 66.0116 10.099 59.4127C12.6121 52.8214 15.1027 50.8681 17.3241 47.9797C19.5455 45.0988 21.019 45.212 23.2403 43.9073C25.4617 42.6026 30.645 40.2647 30.645 40.2647C30.645 40.2647 30.1139 38.5075 30.3982 38.0626C30.4655 37.957 30.7422 37.776 31.1162 37.5724C30.6225 36.592 29.3735 34.0354 28.289 31.1319C27.6906 29.5255 27.2044 28.8392 26.7407 28.3641C25.6338 28.0248 23.4573 27.2254 22.8439 26.1017C22.0137 24.5707 22.8813 23.4621 22.8813 23.4621C22.8813 23.4621 17.4887 10.9431 28.6106 3.16024C39.7325 -4.62265 48.3563 4.41968 48.3563 4.41968C48.3563 4.41968 52.0885 3.8616 53.7564 3.75602C55.4243 3.65044 56.8828 5.13612 56.2845 7.39105C55.8133 9.19348 53.2478 11.5992 52.2306 12.4891C52.2456 12.8964 52.5148 13.2207 53.2104 13.3866C55.9703 14.0502 57.8103 14.9929 56.823 15.8979C55.8357 16.8105 54.8185 17.2931 55.2822 18.002C55.746 18.7109 56.3294 19.6235 56.3294 19.6235L56.2695 20.3625C56.2695 20.3625 57.556 20.9131 57.4887 21.4485C57.4213 21.9764 57.354 22.6175 58.1992 24.352C59.0444 26.0941 59.0593 27.987 56.2246 29.5406C53.3899 31.0942 52.7766 29.6537 51.4677 33.7488C50.1588 37.8439 50.0242 37.4291 49.7175 40.8228C49.6203 41.8635 49.7699 42.8288 50.0392 43.7414C50.1887 43.3567 50.2785 43.1079 50.2785 43.1079C53.8985 45.8304 53.9509 48.2512 54.826 50.5137C55.7011 52.7762 57.4214 53.5077 59.7699 55.8908C62.1184 58.274 60.9442 61.1925 62.4924 67.5274C64.0406 73.8624 62.9337 72.8744 65.8432 79.2319C68.7527 85.5819 67.354 91.5775 66.7632 95.4161C66.1648 99.2472 68.8649 105.514 70.5926 108.033C72.3204 110.56 70.0915 113.335 68.259 114.089C66.4191 114.843 63.0459 116.005 63.0459 116.005L62.9487 116.894C63.1132 116.864 63.2029 116.842 63.2029 116.842L63.6742 121.027L63.5994 121.035C64.2351 126.955 65.6188 140.824 65.6712 149.27C65.7385 160.236 66.5537 176.533 66.4715 186.767C66.3892 197.008 66.8903 195.07 64.6988 205.025C62.5074 214.972 60.9666 215.493 61.6921 218.713C62.4176 221.941 61.1685 220.327 63.9808 226.79C66.7931 233.253 68.9696 234.49 67.6906 237.522C66.4191 240.553 64.7886 241.293 66.4565 242.771C68.1169 244.241 69.8596 245.297 69.8596 245.297C69.8596 245.297 69.7549 245.659 69.4931 246.247C70.6824 246.738 73.188 247.876 73.6517 248.962C74.265 250.395 72.7991 250.388 76.2246 251.534C79.6427 252.688 83.7265 252.741 85.7609 253.457C87.7953 254.166 89.1491 255.772 89.2089 256.715C89.2688 257.665 90.1887 257.288 89.9793 258.985C89.7774 260.689 86.7108 261.836 83.7041 262.341C80.7048 262.846 76.7258 262.793 71.6547 262.062C66.5911 261.33 66.2246 260.516 61.8567 260.901C57.4887 261.293 52.4475 260.976 52.4475 260.976C52.4475 260.976 49.5455 261.481 48.4685 260.916C47.384 260.35 47.384 255.395 47.384 255.395L47.4737 255.358C47.167 253.955 46.2246 250.297 45.8282 244C45.2972 235.599 46.2097 233.427 44.5268 225.101C42.8514 216.767 43.2179 210.945 42.3054 208.155C41.4004 205.365 40.9666 201.91 40.9666 201.91C40.9666 201.91 36.4789 226.881 35.4917 232.854C34.5119 238.826 34.5792 239.98 33.2628 245.546C32.2231 249.935 30.1962 255.026 29.3735 256.994C30.3757 258.193 30.4879 260.139 31.004 261.195C31.6024 262.424 32.3802 263.11 33.6742 265.35C34.9681 267.582 36.2321 267.718 38.1992 269.068C40.1663 270.418 39.3959 273.103 39.3959 273.103C39.3959 273.103 39.6427 273.714 40.2037 274.317C40.7647 274.913 39.8148 276.451 39.8148 276.451C39.8148 276.451 38.3114 277.492 35.6562 278.51C33.001 279.528 29.2912 278.812 23.9883 277.575C18.6779 276.331 17.8851 275.328 16.4042 273.42C14.9232 271.512 14.0706 272.937 11.9389 272.228C9.79981 271.519 10.0392 270.343 10.114 268.231C10.1887 266.119 10.5104 266.202 10.5104 266.202L10.4804 262.499C9.82973 261.406 8.70782 259.121 8.51335 256.097C8.24409 251.79 7.77289 252.665 8.70034 239.211C9.62779 225.757 12.096 200.282 14.2426 186.224C16.1723 173.592 17.0773 158.139 18.992 148.132C18.9023 148.169 18.7901 148.215 18.6405 148.29C17.6308 148.788 16.7183 149.263 15.6188 148.388ZM25.1326 26.5315C25.2972 26.8407 25.4917 27.1198 25.7086 27.3536C25.5216 27.1424 25.3346 26.8784 25.1326 26.5315ZM21.7145 115.077C20.3982 113.086 19.0967 109.391 17.6981 106.042C17.369 109.149 16.9875 113.018 16.7482 116.299C18.3862 115.899 20.0541 115.492 21.7145 115.077Z" fill="url(#lg)" />
          </svg>
        </div>
      </VisibilitySensor>
    </>
  )
}
