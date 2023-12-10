import styles from './index.module.css'
import Countdown from './Countdown';
import Time from './Time';

export default (props) => {

  const { listItemData = {} } = props;
  const { money, title, description, status, restTime, time } = listItemData;

  return (
    <div className={styles.itemBox}>

      <div className={styles.leftMoney}>
        <div className={styles.num}>{money}</div>
        <div className={styles.unit}>元</div>
      </div>

      <div className={styles.centerText}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.time}>
          {
            restTime ?
              <Countdown restTime={restTime} />
              :
              <Time time={time}/>
          }
        </div>
      </div>

      <div className={styles.rightButton}>
        <div className={styles.status}>{status}</div>
      </div>

    </div>
  );
}
