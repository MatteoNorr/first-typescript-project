import styles from "./SearchBar.module.scss";
import { todoModel } from "@/utils/fn";
import { SetStateAction } from "react";
import { Dispatch } from "react";

interface todo {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
  todoList: todoModel[];
  setTodoList: Dispatch<SetStateAction<todoModel[]>>;
  alert: boolean;
  setAlert: Dispatch<SetStateAction<boolean>>;
}

const SearchBar = ({
  todo,
  setTodo,
  todoList,
  setTodoList,
  alert,
  setAlert,
}: todo) => {
  //fn
  const onSubmitAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoList([...todoList, { id: Math.random(), todo, isDone: false }]);
      setTodo("");
    } else {
      setAlert(true);
      setTimeout(() => setAlert(false), 3000);
    }
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
    setAlert(false);
  };
  //end fn

  return (
    <>
      <div className={styles.SearchBar}>
        <form onSubmit={(e) => onSubmitAdd(e)}>
          <div className={styles.searchContainer}>
            <input
              className={styles.search}
              type="text"
              placeholder="Enter todo"
              onChange={onChangeValue}
              value={todo}
            />
            <input type="submit" value="Add" />
          </div>
        </form>
      </div>
      <div className={alert ? styles.alert : styles.alertHidden}>
        Some text is required!
      </div>
    </>
  );
};

export default SearchBar;
