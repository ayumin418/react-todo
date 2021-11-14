export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
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
