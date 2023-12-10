import styles from './index.module.css'

export default (props) => {

  const { time } = props;

  const formatTimestamp = (timestamp) => {
    let date = new Date(timestamp);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${month}.${day} ${hours}:${minutes}`;
  }

  return (
    <>
      {
        time && time[0] && time[1] && typeof time[0] === 'number' && typeof time[1] === 'number' ?
          <div className={styles.timeBox}>
            有效期: {formatTimestamp(time[0])}-{formatTimestamp(time[1])}
          </div>
          :
          null
      }
    </>
  );
}