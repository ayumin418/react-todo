import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <h2 className="title">未完了のTODO</h2>
        <ul>
          {imcompleteTodos.map((todo) => {
            return (
              <li key={todo} className="list-item">
                <p className="list-item-lead">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <h2 className="title">完了のTODO</h2>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className="list-item">
                <p className="list-item-lead">{todo}</p>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};