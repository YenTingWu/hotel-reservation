import styles from './CustomInputNumber.module.css';

export const CustomInputNumber = ({
  min,
  max,
  step,
  name,
  value,
  disabled,
  onChange,
  onBlur,
}) => {
  const handleMinus = () => {
    onChange((prev) => {
      const newV = prev - step;
      return newV <= min ? min : newV;
    });
  };

  const handleAdd = () => {
    onChange((prev) => {
      const newV = prev + step;

      return newV >= max ? max : newV;
    });
  };

  const handleInputChange = (e) => {
    const { value } = e.target;

    if (isNaN(+value)) return;

    onChange(value);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleMinus} disabled={disabled}>
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
      <button onClick={handleAdd} disabled={disabled}>
        +
      </button>
    </div>
  );
};
