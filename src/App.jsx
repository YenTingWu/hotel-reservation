import { useState } from 'react';
import styles from './App.module.css';
import { DemoMonitor } from './components/DemoMonitor';
import { RoomAllocation } from './components/RoomAllocation';

export function App() {
  const [numberOfPeople, setNumberOfPeople] = useState(10);
  const [numberOfRoom, setNumberOfRoom] = useState(3);
  const [result, setResult] = useState(null);

  return (
    <div className={styles.app}>
      <DemoMonitor
        numberOfPeople={numberOfPeople}
        numberOfRoom={numberOfRoom}
        result={result}
        onNumberOfPeopleChange={(v) => setNumberOfPeople(v)}
        onNumberOfRoomChange={(v) => setNumberOfRoom(v)}
      />
      <RoomAllocation
        guest={numberOfPeople}
        room={numberOfRoom}
        onChange={(result) => {
          console.log(result);
          setResult(result);
        }}
      />
    </div>
  );
}
