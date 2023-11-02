import styles from './DemoMonitor.module.css';

export const DemoMonitor = ({
  numberOfPeople,
  numberOfRoom,
  result,
  onNumberOfPeopleChange,
  onNumberOfRoomChange,
}) => {
  return (
    <div className={styles['row-container']}>
      <div className={styles.row}>
        <label>Number of People</label>
        <input
          value={numberOfPeople}
          onChange={(e) => {
            if (isNaN(+e.target.value)) return;
            onNumberOfPeopleChange(e.target.value);
          }}
        />
      </div>
      <div className={styles.row}>
        <label>Number of Room</label>
        <input
          value={numberOfRoom}
          onChange={(e) => {
            if (isNaN(+e.target.value)) return;
            onNumberOfRoomChange(e.target.value);
          }}
        />
      </div>
      <div>{result}</div>
    </div>
  );
};
