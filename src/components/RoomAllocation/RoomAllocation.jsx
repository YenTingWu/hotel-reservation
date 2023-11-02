import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SingleRoomSelector } from '../SingleRoomSelector';
import styles from './RoomAllocation.module.css';

export const RoomAllocation = ({
  guest = 4,
  room = 4,
  onChange = console.log,
}) => {
  const [roomList, setRoomList] = useState(
    Array.from({ length: room }, () => ({ adult: 1, child: 0, id: uuidv4() }))
  );

  const handleRoomChange = (index) => (newValue) => {
    setRoomList((prev) => {
      const newPrev = [...prev];

      newPrev[index] = { ...newPrev[index], ...newValue };

      onChange(newPrev);

      return newPrev;
    });
  };

  const totalAllocatedPeople = roomList.reduce(
    (acc, { adult, child }) => acc + (adult + child),
    0
  );

  const unallocatedNumber = guest - totalAllocatedPeople;
  const disabled = guest === room;

  return (
    <section className={styles.container}>
      <h2 className={styles.banner}>
        住客人數：{guest} 人 / {room} 房
      </h2>
      <div className={styles['unallocated-section']}>
        尚未分配人數：{unallocatedNumber} 人
      </div>
      <div>
        {roomList.map(({ adult, child, id }, index) => (
          <SingleRoomSelector
            key={id}
            id={id}
            adult={adult}
            child={child}
            disabled={disabled}
            unallocatedNumber={unallocatedNumber}
            onChange={handleRoomChange(index)}
          />
        ))}
      </div>
    </section>
  );
};
