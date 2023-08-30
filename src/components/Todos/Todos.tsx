import { useState } from "react";
import Card from "../Card";
import { todoModel } from "@/utils/fn";
import SearchBar from "../SearchBar";
import styles from "./Todos.module.scss";

const Todos = () => {
  const [todoList, setTodoList] = useState<todoModel[]>([]);
  const [todo, setTodo] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);

  return (
    <>
      <SearchBar
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
        alert={alert}
        setAlert={setAlert}
      />
      {todoList.length ? (
        todoList.map((data, i) => <Card key={i} data={data} />)
      ) : (
        <h2 className={styles.empty}>No todos yet</h2>
      )}
    </>
  );
};

export default Todos;
