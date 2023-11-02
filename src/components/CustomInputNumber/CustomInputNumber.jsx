import styles from './CustomInputNumber.module.css';
import PropTypes from 'prop-types';

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
  const handleMinus = (e) => {
    if (value <= min) return;

    const newV = value - step;
    onChange(e, Math.max(newV, min));
  };

  const handleAdd = (e) => {
    if (value >= max) return;

    const newV = value + step;
    onChange(e, Math.min(newV, max));
  };

  const handleInputChange = (e) => {
    const { value } = e.target;

    if (isNaN(+value)) return;

    onChange(e, +value);
  };

  const handleInputBlur = (e) => {
    const { value } = e.target;

    if (isNaN(+value)) return;

    if (+value <= min) {
      onChange(e, min);
    } else if (+value >= max) {
      onChange(e, max);
    } else {
      onChange(e, +value);
    }
  };

  return (
    <div className={styles.container} onBlur={onBlur}>
      <button
        name="minus-button"
        onClick={handleMinus}
        disabled={value <= min || disabled}
      >
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
        onBlur={handleInputBlur}
        disabled={disabled}
      />
      <button
        name="add-button"
        onClick={handleAdd}
        disabled={value >= max || disabled}
      >
        +
      </button>
    </div>
  );
};

CustomInputNumber.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
