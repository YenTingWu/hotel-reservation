import { useState } from 'react';
import styles from './App.module.css';
import { CustomInputNumber } from './components/CustomInputNumber';

export function App() {
  const [value, setValue] = useState(4);

  return (
    <div className={styles.app}>
      <CustomInputNumber
        name={'12312'}
        value={value}
        step={5}
        max={10}
        min={1}
        onChange={setValue}
      />
    </div>
  );
}
