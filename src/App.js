import { useState, useEffect } from 'react';
import styles from './App.module.css';
import axios from 'axios';
import RedPacketListItem from './RedPacketListItem'

export default () => {

  const [redPacketListData, setRedPacketListData] = useState();

  useEffect(() => {
    getRedPacketListData();
  }, []);

  const getRedPacketListData = () => {
    axios.get('https://systemjs.1688.com/krump/schema/1352.json').then(res => {
      res?.data?.list && setRedPacketListData(res.data.list);
    }).catch(() => {
      alert('请求失败');
    })
  }

  console.log(redPacketListData);

  return (
    <div className={styles.app}>
      <div className={styles.title}>1688进货红包</div>
      <div className={styles.redPacketList}>
        {
          redPacketListData?.map((item, index) => {
            return (
              <RedPacketListItem listItemData={item} />
            )
          })
        }
      </div>
    </div>
  );
}