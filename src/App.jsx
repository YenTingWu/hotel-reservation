import styles from './App.module.css';
import { RoomAllocation } from './components/RoomAllocation';

export function App() {
  return (
    <div className={styles.app}>
      <RoomAllocation
        guest={9}
        room={3}
        onChange={(result) => console.log(result)}
      />
    </div>
  );
}

// 1. CustomInputNumber patterns
