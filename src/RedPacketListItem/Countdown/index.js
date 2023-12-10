import { useEffect, useRef, useState } from 'react';
import styles from './index.module.css'

export default (props) => {

  const { restTime } = props;

  const [countdown, setCountdown] = useState(restTime);//倒计时秒数
  const num = useRef(restTime);

  useEffect(() => {
    const interval = setInterval(() => tick(num.current), 1000);
    return () => clearInterval(interval); // 清除计时器  
  }, []);


  const tick = (data) => {
    if (data > 0) {
      setCountdown(data - 1);
      num.current = data - 1;
    }
  }

  const convertSecondsToTimeFormat = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = Math.floor((seconds % 3600) / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let remainingSeconds = seconds % 60;
    remainingSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
    return [hours, minutes, remainingSeconds];
  }

  const renderCountdown = () => {
    let arr = convertSecondsToTimeFormat(countdown);
    let data = (
      <div className={styles.countdown}>
        <div className={styles.num}>{arr[0]}</div>
        <div className={styles.colon}>:</div>
        <div className={styles.num}>{arr[1]}</div>
        <div className={styles.colon}>:</div>
        <div className={styles.num}>{arr[2]}</div>
      </div>
    )
    return data;
  }

  return (
    <>
      {
        restTime && typeof restTime === 'number' ?
          <div className={styles.countdownBox}>
            <div className={styles.countdownText}>距结束</div>
            {renderCountdown()}
          </div>
          :
          null
      }
    </>
  );
}