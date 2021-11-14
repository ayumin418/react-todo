const style = {
  width: "400px",
  minHeight: "200px",
  margin: " 8px",
  padding: " 8px",
  backgroundColor: "#ffffe0",
  borderRadius: "5px"
};

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={style}>
      <h2 className="title">完了のTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-item">
              <p className="list-item-lead">{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
