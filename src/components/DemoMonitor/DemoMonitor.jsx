import styles from './DemoMonitor.module.css';
import PropTypes from 'prop-types';

export const DemoMonitor = ({
  numberOfPeople,
  numberOfRoom,
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
    </div>
  );
};

DemoMonitor.propTypes = {
  numberOfPeople: PropTypes.number,
  numberOfRoom: PropTypes.number,
  onNumberOfPeopleChange: PropTypes.func,
  onNumberOfRoomChange: PropTypes.func,
};
