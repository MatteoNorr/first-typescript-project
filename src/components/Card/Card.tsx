import { todoModel } from "@/utils/fn";
import styles from "./Card.module.scss";
import { useRef, useState } from "react";

interface model {
  data: {
    id?: number;
    todo: string;
    isDone?: boolean;
  };
}

const Card: React.FC<model> = ({ data }) => {
  const [done, setDone] = useState<boolean>(false);
  const refCard = useRef<HTMLDivElement>(null);

  const onClickDone = () => setDone(!done);
  const onClickRemove = () => console.log(refCard.current?.remove());

  return (
    <div
      ref={refCard}
      onClick={onClickDone}
      className={`${done ? styles.done : styles.undone} ${styles.Card}`}
    >
      <p className={styles.todo}>{data.todo}</p>
      {done && (
        <div className={styles.delete} onClick={onClickRemove}>
          x
        </div>
      )}
    </div>
  );
};

export default Card;
