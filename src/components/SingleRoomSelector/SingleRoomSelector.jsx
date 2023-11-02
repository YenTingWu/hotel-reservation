import { CustomInputNumber } from '../CustomInputNumber';
import styles from './SingleRoomSelector.module.css';

// 1. 4-person room
// 2. the initial number of adults would be 1, and of children would be 0

const MAX_NUMBER_OF_PEOPLE = 4;

export const SingleRoomSelector = ({
  adult,
  child,
  id,
  disabled,
  unallocatedNumber,
  onChange,
}) => {
  const handleAdultChange = (_, value) => {
    onChange({ adult: value });
  };

  const handleChildChange = (_, value) => {
    onChange({ child: value });
  };

  const max = Math.min(
    MAX_NUMBER_OF_PEOPLE,
    unallocatedNumber + (adult + child)
  );

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
          max={max - child}
          step={1}
          disabled={disabled}
          // The minimum number of adults should be 1
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
          max={max - adult}
          step={1}
          disabled={disabled}
          // No limitation
          min={0}
          onChange={handleChildChange}
        />
      </div>
    </div>
  );
};
