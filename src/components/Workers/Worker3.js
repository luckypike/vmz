import React, { useState, useEffect } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import styles from './Worker.module.css'

export default function Worker3 () {

  const [visible, setVisible] = useState(false)

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setVisible(true)
    }
  }

  useEffect(() => {
    if (visible) {
      document.getElementById("animate").beginElement()
    }
  }, [visible])

  return(
    <>
      <VisibilitySensor delayedCall onChange={onVisibilityChange}>
        <div className={styles.worker}>
          <svg width="84" height="280" viewBox="0 0 84 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="wr" x1="0.5" y1="1" x2="0.5" y2="0">
              <stop offset="100%" stopOpacity="1" stopColor="#E8E8E8">
                <animate id="animate" attributeName="offset" values="0;1" dur="0.5s" />
              </stop>
              <stop offset="0%" stopOpacity="0" stopColor="#E8E8E8"/>
            </linearGradient>

            {visible &&
              <path d="M76.0141 267.636C72.9011 267.383 68.9823 268.023 69.8751 265.992C70.7679 263.962 68.129 264.704 69.5827 262.524C71.0365 260.343 68.0026 258.952 70.1674 254.725C72.3323 250.498 68.4608 245.592 69.0376 230.533C69.6143 215.466 69.0534 215.608 69.4958 207.233C69.9462 198.858 70.4676 194.307 69.9936 183.546C69.5116 172.801 69.8909 177.613 72.3639 169.206C74.8368 160.8 70.2464 153.152 71.2419 147.305C72.2453 141.45 72.9722 141.513 72.1347 133.028C71.9925 131.622 71.8898 130.373 71.8108 129.188C72.2532 128.73 72.5851 128.327 72.5851 128.327C72.5851 128.327 72.5219 125.451 72.2216 122.125C71.9214 118.798 72.5219 116.27 72.5219 116.27C72.5219 116.27 72.3876 116.223 72.1821 116.144C72.3955 113.908 72.672 111.3 73.0275 108.124L73.1539 108.116C73.1539 108.116 73.4779 103.834 74.0072 100.437C74.505 97.221 73.6675 93.7762 73.5806 93.4049C73.4858 90.7818 73.3041 88.0876 73.0433 85.3776C73.146 84.6033 73.2251 83.2206 72.988 81.0321C72.8379 79.6731 72.1821 76.497 71.2577 72.6887C70.1595 66.9053 68.7294 61.6591 67.0466 57.7639C66.4303 55.9388 65.8298 54.3428 65.2689 53.1419C62.2902 46.7343 58.3793 47.2715 58.3793 47.2715C58.2212 47.4217 58.0869 47.5797 57.9447 47.7377L58.7506 43.7398L53.2674 40.619C53.2674 40.619 53.2674 40.619 54.7053 38.628C56.1512 36.6448 54.1365 36.4789 55.5033 32.9551C56.8702 29.4313 55.9221 27.4403 55.9221 27.4403L60.8522 25.0937C61.745 25.2359 64.1153 25.5678 63.1119 24.8646C62.9144 24.7224 62.7011 24.5328 62.4877 24.3194L62.7959 24.1772C62.7959 24.1772 62.5746 24.1219 62.2191 24.035C61.1999 22.8973 60.1807 21.1275 60.0068 19.6421C59.7856 17.7143 59.7066 13.8823 58 9.53685C56.3013 5.19135 54.0891 2.71047 47.239 0.632532C40.3889 -1.46121 35.522 1.97569 31.7137 6.06835C27.9055 10.161 26.7836 17.7222 26.2147 20.3532C25.954 21.5778 25.9461 22.518 26.0172 23.1896C25.8355 23.6716 25.9777 24.0192 26.2384 24.2799C26.2621 24.3431 26.2779 24.3826 26.2779 24.3826C26.2779 24.3826 26.2937 24.3747 26.3253 24.3589C26.7994 24.7777 27.5184 24.991 27.3208 25.3307C26.8942 26.0576 28.261 27.5114 27.7791 29.0047C27.2971 30.4979 27.6211 33.5793 27.6606 35.5071C27.7001 37.4191 28.2531 37.4665 26.6414 39.2442C25.0296 41.0298 25.7169 44.1507 24.9585 44.4667C24.7214 44.5694 23.6864 45.2726 22.2248 46.2839C19.5858 47.8325 16.1411 49.7524 13.1466 51.4432C10.6025 52.8733 9.4648 53.9952 8.92754 54.7774C5.04819 57.0292 4.91388 58.4039 2.33819 63.2946C-0.458732 68.6198 1.53229 76.4338 0.979231 76.3943C0.979231 76.3943 1.45329 84.8482 0.473574 90.5053C-0.514039 96.1702 1.97474 95.0325 0.244448 105.794C-1.49375 116.555 6.32024 118.143 6.32024 118.143L8.76952 134.6C8.76952 134.6 9.21987 135.975 7.83721 137.2C6.45455 138.424 9.4806 142.311 6.47036 147.992C3.46801 153.681 11.4084 160.823 10.7763 164.213C10.1522 167.61 14.5925 169.886 12.2775 173.71C9.96255 177.549 17.5711 176.823 14.3555 180.386C11.1319 183.949 18.0294 182.977 14.4661 188.619C10.9028 194.26 17.6896 197.294 13.6918 208.647C9.70183 219.993 11.5348 229.893 10.966 237.502C10.3971 245.102 15.5722 244.944 14.6794 246.983C13.7866 249.013 16.9153 249.076 14.8453 249.677C12.7753 250.269 17.3973 252.569 14.6952 254.062C12.0089 255.571 16.1332 257.048 13.4548 258.368C10.7763 259.679 16.2833 262.421 13.0281 264.072C9.77293 265.724 14.6162 267.454 13.4706 270.417C12.3249 273.379 15.3589 274.778 22.7857 276.532C30.2126 278.278 34.3605 277.085 38.7771 274.762C43.1937 272.439 36.5412 263.116 36.9757 262.2C37.4182 261.275 37.11 260.09 38.5954 257.53C40.0729 254.97 35.5457 256.329 37.6394 253.05C39.7331 249.772 35.2138 250.941 37.1416 247.465C39.0616 243.98 37.6236 241.002 37.9712 231.465C38.3189 221.929 39.109 223.714 38.6665 217.362C38.2241 211.01 37.6868 210.781 39.3223 206.135C40.9578 201.489 38.1846 201.647 37.7105 198.163L42.5775 184.976C42.5775 184.976 41.1632 198.827 42.6328 208.703C44.1023 218.579 44.4816 228.171 44.529 230.09C44.5685 232.002 42.7829 238.552 43.8495 243.996C44.9161 249.44 43.4387 256.78 44.1102 260.082C44.7818 263.385 43.731 262.729 42.5143 266.648C41.2896 270.567 42.3799 273.514 42.4985 274.106C42.6091 274.644 42.8224 275.497 42.8224 275.497C42.8224 275.497 42.9014 276.619 49.554 277.109C50.5495 277.18 52.7617 277.417 54.9424 277.788C57.123 278.16 65.3321 279.4 69.5511 279.74C73.7623 280.079 78.5108 280.656 82.2795 277.14C86.0719 273.609 79.127 267.888 76.0141 267.636Z" fill="url(#wr)" />
            }
          </svg>
        </div>
      </VisibilitySensor>
    </>
  )
}
