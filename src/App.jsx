import styles from './App.module.css';
import { CustomInputNumber } from './components/CustomInputNumber';

export function App() {
  return (
    <div className={styles.app}>
      <CustomInputNumber />
    </div>
  );
}
