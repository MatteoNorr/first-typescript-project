import React, { useEffect, useLayoutEffect, useState } from "react";
import Card from "../Card";
import { todoModel } from "@/utils/fn";
import SearchBar from "../SearchBar";
import styles from "./Todos.module.scss";
import { rejects } from "assert";

type props = {
  isLogged: boolean;
};

const Todos = ({ isLogged }: props) => {
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
      {isLogged ? (
        todoList.length ? (
          todoList.map((data, i) => {
            return <Card key={i} data={data} />;
          })
        ) : (
          <div className={styles.empty}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/158/158398.png"
              alt="sad"
            />
            <h2>No todos yet</h2>
          </div>
        )
      ) : (
        <div className={styles.loginFor}>
          <img
            src="https://cdn.icon-icons.com/icons2/2518/PNG/512/login_icon_151220.png"
            alt="login-icon"
          />
          <span>Login to add todos</span>
        </div>
      )}
    </>
  );
};

export default Todos;
