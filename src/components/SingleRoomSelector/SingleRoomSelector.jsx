import { CustomInputNumber } from '../CustomInputNumber';
import styles from './SingleRoomSelector.module.css';

export const SingleRoomSelector = ({ adult, child, id, onChange }) => {
  const handleAdultChange = (value) => {
    onChange({ adult: value });
  };

  const handleChildChange = (value) => {
    onChange({ child: value });
  };

  return (
    <div className={styles.room}>
      <h3>房間：{adult + child} 人</h3>
      <div className={styles['number-of-people-row']}>
        <div className={styles.generation}>
          <div>大人</div>
          <span>年齡 20+</span>
        </div>
        <CustomInputNumber
          name={`${id}_adult`}
          value={adult}
          step={1}
          max={10}
          min={1}
          onChange={handleAdultChange}
        />
      </div>
      <div className={styles['number-of-people-row']}>
        <div className={styles.generation}>
          <div>小孩</div>
        </div>
        <CustomInputNumber
          name={`${id}_child`}
          value={child}
          step={1}
          max={10}
          min={1}
          onChange={handleChildChange}
        />
      </div>
    </div>
  );
};
