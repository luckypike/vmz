import React, { useState, useEffect } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import styles from './Worker2.module.css'

export default function Worker2 () {

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
          <svg width="114" height="352" viewBox="0 0 114 352" fill="none" xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="gq" x1="0.5" y1="1" x2="0.5" y2="0">
              <stop offset="100%" stopOpacity="1" stopColor="#E7422E">
                <animate id="anime" attributeName="offset" values="0;1" dur="0.5s" />
              </stop>
              <stop offset="0%" stopOpacity="0" stopColor="#E7422E"/>
            </linearGradient>

            {visible &&
              <path d="M94.2179 187.214C95.6106 186.11 95.1748 186.747 96.7001 185.644C96.9559 185.463 97.2212 185.311 97.4959 185.168L112.294 188.374C112.294 188.374 114.341 151.914 113.943 151.885C113.838 151.876 110.219 151 104.942 149.716C105.928 144.035 106.866 138.269 106.998 136.138C107.159 133.655 107.33 131.79 107.434 130.781C108.012 130.829 108.599 130.791 108.94 130.543C109.774 129.934 109.803 127.404 109.812 123.15C109.822 118.897 110.039 119.573 109.196 118.184C108.353 116.804 106.439 115.748 106.439 115.748C106.439 115.748 106.638 112.57 105.284 104.758C103.919 96.9562 103.237 97.3083 105.056 95.8335C106.875 94.3492 107.178 91.5804 106.146 89.116C105.113 86.6517 104.393 83.2834 101.21 74.958C98.0265 66.6421 94.8716 64.1777 92.0579 60.5336C89.2441 56.8989 87.3778 57.0416 84.564 55.3956C81.7502 53.7495 75.1848 50.7999 75.1848 50.7999C75.1848 50.7999 75.8574 48.583 75.4974 48.0216C75.4122 47.8884 75.0616 47.66 74.5879 47.4031C75.2132 46.1662 76.7954 42.9407 78.1691 39.2775C78.927 37.2508 79.5428 36.385 80.1302 35.7856C81.5323 35.3574 84.2892 34.3488 85.0661 32.9311C86.1177 30.9996 85.0187 29.6009 85.0187 29.6009C85.0187 29.6009 91.8495 13.8064 77.7617 3.98711C63.6739 -5.83216 52.7505 5.57608 52.7505 5.57608C52.7505 5.57608 48.023 4.87198 45.9103 4.73878C43.7976 4.60557 41.9502 6.47998 42.7081 9.32491C43.305 11.5989 46.5545 14.6342 47.843 15.7569C47.824 16.2707 47.483 16.6798 46.6019 16.8892C43.106 17.7265 40.7754 18.9158 42.026 20.0576C43.2765 21.2089 44.565 21.8178 43.9776 22.7122C43.3902 23.6066 42.6512 24.7579 42.6512 24.7579L42.727 25.6904C42.727 25.6904 41.0975 26.3849 41.1828 27.0605C41.2681 27.7265 41.3533 28.5353 40.2828 30.7237C39.2122 32.9216 39.1933 35.3098 42.7839 37.2699C46.3745 39.2299 47.1514 37.4126 48.8093 42.5791C50.4673 47.7457 50.6378 47.2224 51.0262 51.504C51.1494 52.8171 50.9599 54.035 50.6188 55.1862C50.4294 54.701 50.3157 54.387 50.3157 54.387C45.7303 57.8218 45.664 60.8761 44.5555 63.7305C43.4471 66.585 41.2681 67.5079 38.2932 70.5146C35.3184 73.5213 36.8058 77.2035 34.8447 85.1959C32.8836 93.1883 34.2858 91.9419 30.6004 99.9629C26.915 107.974 28.6867 115.539 29.4351 120.382C30.193 125.215 26.7729 133.122 24.5844 136.3C22.396 139.487 25.2192 142.989 27.5403 143.94C29.8709 144.892 34.1436 146.357 34.1436 146.357L34.2668 147.48C34.0584 147.442 33.9447 147.413 33.9447 147.413L33.3478 152.694L33.4426 152.703C32.6373 160.173 30.8846 177.67 30.8183 188.327C30.733 202.161 29.7004 222.723 29.8046 235.634C29.9088 248.555 29.274 246.11 32.0499 258.67C34.8258 271.22 36.7774 271.876 35.8584 275.939C34.9395 280.011 36.5216 277.975 32.9594 286.129C29.3972 294.284 26.6403 295.844 28.2603 299.669C29.8709 303.494 31.9362 304.426 29.8235 306.291C27.7203 308.147 25.5129 309.479 25.5129 309.479C25.5129 309.479 25.6455 309.935 25.9771 310.678C24.4707 311.296 21.297 312.733 20.7096 314.103C19.9327 315.911 21.7896 315.901 17.4506 317.348C13.121 318.803 7.94818 318.87 5.37127 319.774C2.79436 320.668 1.07957 322.695 1.00378 323.884C0.927991 325.083 -0.237305 324.607 0.0279659 326.748C0.283762 328.898 4.16808 330.345 7.97661 330.982C11.7757 331.62 16.8158 331.553 23.2391 330.63C29.653 329.707 30.1172 328.68 35.65 329.165C41.1828 329.66 47.5682 329.26 47.5682 329.26C47.5682 329.26 51.2441 329.898 52.6084 329.184C53.9821 328.47 53.9821 322.219 53.9821 322.219L53.8684 322.172C54.2568 320.402 55.4506 315.787 55.9527 307.842C56.6253 297.243 55.4695 294.502 57.6011 283.998C59.7233 273.484 59.2591 266.139 60.4149 262.618C61.5612 259.098 62.1107 254.74 62.1107 254.74C62.1107 254.74 67.7951 286.244 69.0457 293.779C70.2868 301.315 70.2015 302.771 71.8689 309.793C73.1858 315.33 75.7532 321.753 76.7953 324.236C75.5258 325.749 75.3837 328.204 74.73 329.536C73.9721 331.087 72.9868 331.953 71.3478 334.779C69.7088 337.595 68.1077 337.766 65.6161 339.469C63.1245 341.173 64.1003 344.56 64.1003 344.56C64.1003 344.56 63.7876 345.331 63.0771 346.092C62.3665 346.843 63.5697 348.784 63.5697 348.784C63.5697 348.784 65.474 350.097 68.8372 351.382C72.2005 352.666 76.8996 351.763 83.6166 350.202C90.3431 348.632 91.3473 347.367 93.2232 344.959C95.099 342.552 96.179 344.35 98.8791 343.456C101.589 342.562 101.285 341.077 101.191 338.413C101.096 335.749 100.689 335.854 100.689 335.854L100.727 331.182C101.551 329.802 102.972 326.919 103.218 323.104C103.559 317.671 104.156 318.775 102.981 301.8C101.807 284.826 98.6802 252.685 95.9612 234.949C93.5169 219.012 92.3705 199.516 89.9452 186.89C90.0589 186.938 90.201 186.995 90.3905 187.09C91.6694 187.718 92.8253 188.317 94.2179 187.214ZM82.1671 33.4735C81.9587 33.8636 81.7123 34.2156 81.4376 34.5106C81.6744 34.2442 81.9113 33.9112 82.1671 33.4735ZM86.4967 145.187C88.1641 142.675 89.8126 138.013 91.5842 133.788C92.001 137.708 92.4842 142.589 92.7874 146.728C90.7126 146.224 88.5999 145.71 86.4967 145.187Z" fill="url(#gq)" />
            }
          </svg>
        </div>
      </VisibilitySensor>
    </>
  )
}
