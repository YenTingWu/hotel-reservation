import styles from './CustomInputNumber.module.css';

export const CustomInputNumber = ({
  min,
  max = Infinity,
  step,
  name,
  value,
  disabled,
  onChange,
  onBlur,
}) => {
  const handleMinus = () => {
    if (value <= min) return;

    const newV = value - step;

    onChange(Math.max(newV, min));
  };

  const handleAdd = () => {
    if (value >= max) return;

    const newV = value + step;

    onChange(Math.min(newV, max));
  };

  const handleInputChange = (e) => {
    const { value } = e.target;

    if (isNaN(+value)) return;

    if (+value <= min) {
      onChange(min);
    } else if (+value >= max) {
      onChange(max);
    } else {
      onChange(+value);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={handleMinus} disabled={value <= min}>
        -
      </button>
      <input
        type="text"
        value={value}
        name={name}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === '+') handleAdd();
          else if (e.key === '-') handleMinus();
        }}
        onBlur={onBlur}
        disabled={disabled}
      />
      <button onClick={handleAdd} disabled={value >= max}>
        +
      </button>
    </div>
  );
};
